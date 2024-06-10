import Header from "@/components/Header/Header";
import blogs1 from "../../../src/assets/img/blogs/blogs (1).jpg";
import blogs2 from "../../../src/assets/img/blogs/blogs (2).jpg";
import blogs3 from "../../../src/assets/img/blogs/blogs (3).jpg";
import blogs4 from "../../../src/assets/img/blogs/blogs (4).jpg";
import Image from "next/image";
import BlogComments from "@/components/BlogComments/BlogComments";

function page({ params }) {
  const { id } = params;
  const latestBlogsData = [
    {
      id: 1,
      name: "Dr. Smith",
      date: "2024-03-04",
      review: "4.5",
      title: "The Importance of Regular Exercise",
      description:
        "Learn why regular Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being. exercise is crucial for maintaining good health.Learn how cultivating a positive mindset can improve your health and well-being.",
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
        "Learn why regular Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being. exercise is crucial for maintaining good health.Learn how cultivating a positive mindset can improve your health and well-being.",
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
        "Learn why regular Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being. exercise is crucial for maintaining good health.Learn how cultivating a positive mindset can improve your health and well-being.",
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
        "Learn why regular Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being. exercise is crucial for maintaining good health.Learn how cultivating a positive mindset can improve your health and well-being.",
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
        "Learn why regular Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being. exercise is crucial for maintaining good health.Learn how cultivating a positive mindset can improve your health and well-being.",
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
        "Learn why regular Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being. exercise is crucial for maintaining good health.Learn how cultivating a positive mindset can improve your health and well-being.",
      comments: [
        { user: "John", rating: 4 },
        { user: "Alice", rating: 8 },
      ],
      healthtips: ["Get enough sleep.", "Stay hydrated."],
      img: blogs1,
      tags: "fitness",
      status: "",
    },
    {
      id: 7,
      name: "Dr. Lee",
      date: "2024-03-04",
      title: "The Power of Positive Thinking",
      description:
        "Learn why regular Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being. exercise is crucial for maintaining good health.Learn how cultivating a positive mindset can improve your health and well-being.",
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
      id: 8,
      name: "Dr. Martinez",
      date: "2024-03-04",
      title: "Stress Management Techniques",
      description:
        "Learn why regular Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being. exercise is crucial for maintaining good health.Learn how cultivating a positive mindset can improve your health and well-being.",
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
      id: 9,
      name: "Dr. Smith",
      date: "2024-03-04",
      review: "4.5",
      title: "The Importance of Regular Exercise",
      description:
        "Learn why regular Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being.Discover the impact of healthy eating habits on overall well-being.Learn how cultivating a positive mindset can improve your health and well-being. exercise is crucial for maintaining good health.Learn how cultivating a positive mindset can improve your health and well-being.",
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

  const data = latestBlogsData.find((item) => item.id === Number(id));

  return (
    <>
      <Header />
      <div className="flex border bg-[#008080] justify-evenly my-5 p-2 items-center">
        <h3 className="text-white ">{data?.title}</h3>
        <h3 className="text-white ">Publish Date :{data?.date}</h3>
      </div>
      <div className="customContainer">
        <div className=" grid md:grid-cols-2 grid-cols-1 items-center">
          <div>
            <Image alt="image" src={data?.img} width={400} height={400} />
            <h1 className="text-2xl text-[#008080]">{data?.name}</h1>
          </div>
          <div>
            <div className="flex border bg-[#008080] justify-evenly my-5 p-2 items-center">
              <h3 className="text-white ">Tags: {data?.tags}</h3>
              <h3 className="text-white ">Status: {data?.status}</h3>
            </div>
            <p className="text-gray-600">{data?.description}</p>
          </div>
        </div>

        <div className="mt-5 mb-5">
          <BlogComments />
        </div>
      </div>
    </>
  );
}

export default page;
