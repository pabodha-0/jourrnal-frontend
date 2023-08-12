"use client";

import Image from "next/image";
import Link from "next/link";
import { BsFillRecordCircleFill } from "react-icons/bs";

interface Props {
  articleImageURL: string;
  title: string;
  readTime: number;
  tags?: string[];
  userID: string;
}

const ArticleCard = ({
  articleImageURL,
  title,
  readTime,
  tags,
  userID,
}: Props) => {
  const userData = {
    userID: "U001",
    username: "John Doe",
    imageURL: "https://source.unsplash.com/RGKdWJOUFH0",
  };

  return (
    <div className="flex flex-col gap-3">
      <Link href={""}>
        <Image
          src={articleImageURL}
          width={1280}
          height={720}
          alt={title}
          className="aspect-video w-full rounded-md"
        />
      </Link>
      <div className="flex flex-col gap-5 justify-between h-full">
        <div className="flex flex-col gap-3">
          <Link href={""} className="text-2xl font-semibold">
            {title}
          </Link>
          <div className="flex gap-3 items-center text-slate-400">
            <Image
              src={userData.imageURL}
              width={30}
              height={30}
              alt={userData.username}
              className="a aspect-square object-cover rounded-full"
            />
            <span>
              by{" "}
              <Link
                href={""}
                className="text-black font-semibold transition hover:text-slate-500"
              >
                {userData.username}
              </Link>
            </span>
            <BsFillRecordCircleFill className="text-xs" />
            <span>{readTime} mins read</span>
          </div>
        </div>
        <div className="flex gap-3 overflow-auto no-scrollbar">
          {tags?.map((tag, i) => (
            <div
              key={i}
              className="min-w-max border-2 border-slate-500 leading-4 text-slate-500 px-3 py-1 rounded-md cursor-pointer transition hover:text-white hover:bg-slate-500"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
