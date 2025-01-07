import endpoint from "@/app/service/endpoint";
import { BlogsModule } from "@/components/modules/Blog";
import axios from "axios";
import React from "react";

type TProps = {
  params: {
    memberId: string;
  };
};
const getBlogById = async (slug: string) => {
  try {
    const data = await axios.get(
      endpoint.GET_PROJECT_BY_ID.replace("{slug}", slug),
    );
    return data;
  } catch (err) {
    return null;
  }
};
async function StudyRoom({ params }: TProps) {
  const data = await getBlogById(params.memberId);
  return <BlogsModule data={data?.data?.data} />;
}

export default StudyRoom;
