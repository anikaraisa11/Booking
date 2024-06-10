import React from "react";
import Image from "next/image";
import icon from "../../src/assets/img/a.svg";
import blogs1 from "../../src/assets/img/blogs/blogs (1).jpg";
import blogs2 from "../../src/assets/img/blogs/blogs (2).jpg";
import blogs3 from "../../src/assets/img/blogs/blogs (3).jpg";
import blogs4 from "../../src/assets/img/blogs/blogs (4).jpg";
import BlogCard from "./BlogCard";

function LatestArticles() {
  const latestBlogsData = [
    {
      id: 1,
      name: "Dr. Smith",
      date: "2024-03-04",
      review: "4.5",
      title: "The Importance of Regular Exercise",
      description:
        "Learn why regular exercise is crucial for maintaining good health.Learn how cultivating a positive mindset can improve your health and well-being.",
      comments: [
        { user: "John", rating: 4 },
        { user: "Alice", rating: 8 },
      ],
      healthtips: ["Get enough sleep.", "Stay hydrated."],
      img: blogs1,
      tags: "fitness",
      status: "popular",
    },
    {
      id: 2,
      name: "Dr. Johnson",
      date: "2024-03-04",
      review: "4.2",
      title: "Healthy Eating Habits for a Better Life",
      description:
        "Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.",
      comments: [
        { user: "Bob", rating: 6 },
        { user: "Emily", rating: 10 },
      ],
      healthtips: ["Eat a balanced diet.", "Exercise regularly."],
      img: blogs2,
      tags: "health",
      status: "popular",
    },
    {
      id: 3,
      name: "Dr. Martinez",
      date: "2024-03-04",
      title: "Stress Management Techniques",
      description:
        "Explore effective techniques for managing stress in daily life.Learn how cultivating a positive mindset can improve your health and well-being.",
      comments: [
        { user: "Charlie", rating: 9 },
        { user: "Eva", rating: 12 },
      ],
      healthtips: ["Practice mindfulness.", "Stay connected with loved ones."],
      img: blogs3,
      review: "4.5",
      tags: "diet",
      status: "popular",
    },
    {
      id: 4,
      name: "Dr. Lee",
      date: "2024-03-04",
      title: "The Power of Positive Thinking",
      description:
        "Learn how cultivating a positive mindset can improve your health and well-being.Learn how cultivating a positive mindset can improve your health and well-being.",
      comments: [
        { user: "David", rating: 3 },
        { user: "Fiona", rating: 7 },
      ],
      healthtips: ["Prioritize self-care.", "Take breaks when needed."],
      img: blogs4,
      review: "4.1",
      tags: "nutrition",
      status: "",
    },
    {
      id: 5,
      name: "Dr. Martinez",
      date: "2024-03-04",
      title: "Stress Management Techniques",
      description:
        "Explore effective techniques for managing stress in daily life.Learn how cultivating a positive mindset can improve your health and well-being.",
      comments: [
        { user: "Charlie", rating: 9 },
        { user: "Eva", rating: 12 },
      ],
      healthtips: ["Practice mindfulness.", "Stay connected with loved ones."],
      img: blogs3,
      review: "4.5",
      tags: "diet",
      status: "",
    },
    {
      id: 6,
      name: "Dr. Smith",
      date: "2024-03-04",
      review: "4.5",
      title: "The Importance of Regular Exercise",
      description:
        "Learn why regular exercise is crucial for maintaining good health.Learn how cultivating a positive mindset can improve your health and well-being.",
      comments: [
        { user: "John", rating: 4 },
        { user: "Alice", rating: 8 },
      ],
      healthtips: ["Get enough sleep.", "Stay hydrated."],
      img: blogs1,
      tags: "fitness",
      status: "",
    },
  ];

  return (
    <div className="customContainer">
      <div className="text-center py-8">
        <div className="text-2xl py-10 md:text-4xl font-bold relative">
          Latest Articles
          <Image
            src={icon}
            className="absolute top-8 left-[60%]"
            alt="Icon"
            height={50}
            width={50}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {latestBlogsData?.map((item, index) => (
          <BlogCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default LatestArticles;
