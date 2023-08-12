"use client";

import ArticleCard from "../ArticleCard";

const Articles = () => {
  const articleData = [
    {
      articleID: "A001",
      articleImageURL: "https://source.unsplash.com/aId-xYRTlEc",
      title: "Will Artificial Intelligence Replace the Digital Artist?",
      readTime: 3,
      userID: "U001",
      tags: ["Artificial intelligence", "Tech", "Artist", "Digital"],
    },
    {
      articleID: "A002",
      articleImageURL: "https://source.unsplash.com/aId-xYRTlEc",
      title: "Will President Trump Grow Up",
      readTime: 5,
      userID: "U001",
      tags: ["Tech", "Artist", "Digital"],
    },
    {
      articleID: "A003",
      articleImageURL: "https://source.unsplash.com/aId-xYRTlEc",
      title: "The explosive Truth of the Universe",
      readTime: 10,
      userID: "U002",
      tags: ["Technical", "Blunt", "Digital"],
    },
  ];

  return (
    <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {articleData.map(
        ({ articleID, articleImageURL, title, readTime, tags, userID }) => (
          <ArticleCard
            key={articleID}
            articleImageURL={articleImageURL}
            title={title}
            readTime={readTime}
            tags={tags}
            userID={userID}
          />
        )
      )}
    </div>
  );
};

export default Articles;
