import Image from "next/image";
import Direction from "../Direction";

function Banner({ image, title, subTitle, slug }: any) {
  return (
    <div className="pt-10">
      <Direction currenPage={slug} />
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-title text-3xl font-semibold text-primary">
            {title}
          </h1>
          <p className="font-title text-base font-normal">{subTitle}</p>
        </div>
        <span
          className="group"
          style={{
            maskImage: "url('/images/background_frames_blog.png')",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "contain",
          }}
        >
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="aspect-video w-full bg-background_library bg-cover transition-all duration-500 group-hover:scale-125"
          />
        </span>
      </div>
    </div>
  );
}

export default Banner;
