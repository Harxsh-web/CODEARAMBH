import { cn } from "@/lib/utils"
// import Image from "next/image"

export const AuthorCard = ({
  className,
  backgroundImage,
  author,
  content
}) => {
  return (
    (<div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 bg-cover object-cover",
          className
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div
          className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60" />
        {/* <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height={100}
            width={100}
            alt={`${author.name}'s avatar`}
            src={author.avatar}
            className="h-10 w-10 rounded-full border-2 object-cover" />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {author.name}
            </p>
            {author.readTime && (
              <p className="text-sm text-gray-400">{author.readTime}</p>
            )}
          </div>
        </div> */}
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {content.title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {content.description}
          </p>
        </div>
        <button className="border-1 rounded-2xl p-2 hover:bg-white hover:text-black font-semibold bg-black hover:border-black z-10 text-2xl cursor-pointer">Know More</button>
      </div>
    </div>)
  );
}