import {
    Message as VercelChatMessage,
    StreamingTextResponse,
    createStreamDataTransformer
} from 'ai';
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { HttpResponseOutputParser } from 'langchain/output_parsers';

import { JSONLoader } from "langchain/document_loaders/fs/json";
import { RunnableSequence } from '@langchain/core/runnables'
import { formatDocumentsAsString } from 'langchain/util/document';
import { CharacterTextSplitter } from 'langchain/text_splitter';

const loader = new JSONLoader(
    "src/data/states.json",
    [
        "/FPT_Education/history",
        "/FPT_Education/anniversary",
        "/FPT_Education/development",
         "/FPT_Education/lasted_event"
    ]
);

// const loader = new JSONLoader(
//     "src/data/states.json",
//     ["/state", "/code", "/nickname", "/website", "/admission_date", "/admission_number", "/capital_city", "/capital_url", "/population", "/population_rank", "/constitution_url", "/twitter_url"],
// );

export const dynamic = 'force-dynamic'

/**
 * Basic memory formatter that stringifies and passes
 * message history directly into the model.
 */
const formatMessage = (message: VercelChatMessage) => {
    return `${message.role}: ${message.content}`;
};

const TEMPLATE = `Answer the user's questions based only on the following context and You play the role of an experienced and funny virtual assistant and your name is <FPT virtual assistant>  and please send a summary and easy to understand.
Your answers will be formatted with paragraph breaks using the <br/>; tag and line breaks with the <br/>; tag to ensure readability and clarity for readers. 
If possible, please add img tag with url if user question about <fpt education 2024> creave image with url https://fpt.edu.vn/resources/article/uploads/thumb/M_img_11efe044-6b51-4730-8887-c9d4b52b37a6.jpeg.
In particular, there is no distinction between upper and lower case letters and your answer is always translated into Vietnamese and please send a summary not over 100 word and easy to understand:
==============================
Context: {context}
==============================
Current conversation: {chat_history}

user: {question}
assistant:`;


export async function POST(req: Request) {
    try {
        // Extract the `messages` from the body of the request
        const { messages } = await req.json();

        const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);

        const currentMessageContent = messages[messages.length - 1].content;

        const docs = await loader.load();

        // load a JSON object
        // const textSplitter = new CharacterTextSplitter();
        // const docs = await textSplitter.createDocuments([JSON.stringify({
        //     "state": "Kansas",
        //     "slug": "kansas",
        //     "code": "KS",
        //     "nickname": "Sunflower State",
        //     "website": "https://www.kansas.gov",
        //     "admission_date": "1861-01-29",
        //     "admission_number": 34,
        //     "capital_city": "Topeka",
        //     "capital_url": "http://www.topeka.org",
        //     "population": 2893957,
        //     "population_rank": 34,
        //     "constitution_url": "https://kslib.info/405/Kansas-Constitution",
        //     "twitter_url": "http://www.twitter.com/ksgovernment",
        // })]);

        const prompt = PromptTemplate.fromTemplate(TEMPLATE);

        const model = new ChatOpenAI({
            apiKey: process.env.OPENAI_API_KEY!,
            model: 'gpt-3.5-turbo',
            temperature: 0,
            streaming: true,
            verbose: true,
        });
        console.log('====================================');
        console.log(prompt);
        console.log(docs)
        console.log('====================================');
 
        /**
       * Chat models stream message chunks rather than bytes, so this
       * output parser handles serialization and encoding.
       */
        const parser = new HttpResponseOutputParser();

        const chain = RunnableSequence.from([
            {
                question: (input) => input.question,
                chat_history: (input) => input.chat_history,
                context: () => formatDocumentsAsString(docs),
            },
            prompt,
            model,
            parser,
        ]);

      

        // Convert the response into a friendly text-stream
        const stream = await chain.stream({
            chat_history: formattedPreviousMessages.join('\n'),
            question: currentMessageContent,
        });

        // Respond with the stream
        return new StreamingTextResponse(
            stream.pipeThrough(createStreamDataTransformer()),
        );
    } catch (e: any) {
        return Response.json({ error: e.message }, { status: e.status ?? 500 });
    }
}