import GlobalTimeline from "@/components/Global/GlobalTimeline";
import { Tabs } from "antd";
import Image from "next/image";
import reviewUser from "../../../src/assets/img/review.png";
import doctor1 from "../../../src/assets/img/rendomDoctor.jpg (1).png";
import extraImg1 from "../../../src/assets/img/extraservice (1).jpg";
import extraImg2 from "../../../src/assets/img/extraservice (2).jpg";
import extraImg3 from "../../../src/assets/img/extraservice (3).jpg";

function DoctorNavTabs({ data }) {
  const onChange = (key) => {
    // console.log(key);
  };

  const extraService = [
    {
      id: 1,
      name: "Dr. Ruby Perrin",
      title: "MDS - Periodontology and Oral Implantology, BDS",
      position: "Dentist",
      extraImg: extraImg1,
      Education: [
        {
          university: "American Dental Medical University",
          degree: "BDS",
          duration: "1998 - 2003",
        },
        {
          university: "American Dental Medical University",
          degree: "MDS",
          duration: "2003 - 2005",
        },
      ],
      work: [
        {
          position: "Dentist",
          company: "Glowing Smiles Family Dental Clinic",
          duration: "2010 - Present",
          years: "5 years",
        },
        {
          position: "Dentist",
          company: "Comfort Care Dental Clinic",
          duration: "2007 - 2010",
          years: "3 years",
        },
        {
          position: "Dentist",
          company: "Dream Smile Dental Practice",
          duration: "2005 - 2007",
          years: "2 years",
        },
      ],
      Awards: [
        {
          date: "July 2023",
          award: "Humanitarian Award",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        },
        {
          date: "March 2011",
          award: "Certificate for International Volunteer Service",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        },
        {
          date: "May 2008",
          award: "The Dental Professional of The Year Award",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        },
      ],
      ratings: 17,
      location: "Florida, USA",
      image: [doctor1, doctor1, doctor1],
      personalImage: doctor1,
      like: 98,
      comments: 17,
      amount: "300-1000",
      aboutMe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions",
      reviews: [
        {
          name: "John Doe",
          reviewTime: "2024-03-11",
          comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
      ],
      businessHours: {
        Monday: "07:00 AM - 09:00 PM",
        Tuesday: "07:00 AM - 09:00 PM",
        Wednesday: "07:00 AM - 09:00 PM",
        Thursday: "07:00 AM - 09:00 PM",
        Friday: "07:00 AM - 09:00 PM",
        Saturday: "07:00 AM - 09:00 PM",
        Sunday: "Closed",
      },
    },
    {
      id: 1,
      name: "Dr. Ruby Perrin",
      title: "MDS - Periodontology and Oral Implantology, BDS",
      position: "Dentist",
      extraImg: extraImg2,
      Education: [
        {
          university: "American Dental Medical University",
          degree: "BDS",
          duration: "1998 - 2003",
        },
        {
          university: "American Dental Medical University",
          degree: "MDS",
          duration: "2003 - 2005",
        },
      ],
      work: [
        {
          position: "Dentist",
          company: "Glowing Smiles Family Dental Clinic",
          duration: "2010 - Present",
          years: "5 years",
        },
        {
          position: "Dentist",
          company: "Comfort Care Dental Clinic",
          duration: "2007 - 2010",
          years: "3 years",
        },
        {
          position: "Dentist",
          company: "Dream Smile Dental Practice",
          duration: "2005 - 2007",
          years: "2 years",
        },
      ],
      Awards: [
        {
          date: "July 2023",
          award: "Humanitarian Award",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        },
        {
          date: "March 2011",
          award: "Certificate for International Volunteer Service",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        },
        {
          date: "May 2008",
          award: "The Dental Professional of The Year Award",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        },
      ],
      ratings: 17,
      location: "Florida, USA",
      image: [doctor1, doctor1, doctor1],
      personalImage: doctor1,
      like: 98,
      comments: 17,
      amount: "300-1000",
      aboutMe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions",
      reviews: [
        {
          name: "John Doe",
          reviewTime: "2024-03-11",
          comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
      ],
      businessHours: {
        Monday: "07:00 AM - 09:00 PM",
        Tuesday: "07:00 AM - 09:00 PM",
        Wednesday: "07:00 AM - 09:00 PM",
        Thursday: "07:00 AM - 09:00 PM",
        Friday: "07:00 AM - 09:00 PM",
        Saturday: "07:00 AM - 09:00 PM",
        Sunday: "Closed",
      },
    },
    {
      id: 1,
      name: "Dr. Ruby Perrin",
      title: "MDS - Periodontology and Oral Implantology, BDS",
      position: "Dentist",
      extraImg: extraImg3,
      Education: [
        {
          university: "American Dental Medical University",
          degree: "BDS",
          duration: "1998 - 2003",
        },
        {
          university: "American Dental Medical University",
          degree: "MDS",
          duration: "2003 - 2005",
        },
      ],
      work: [
        {
          position: "Dentist",
          company: "Glowing Smiles Family Dental Clinic",
          duration: "2010 - Present",
          years: "5 years",
        },
        {
          position: "Dentist",
          company: "Comfort Care Dental Clinic",
          duration: "2007 - 2010",
          years: "3 years",
        },
        {
          position: "Dentist",
          company: "Dream Smile Dental Practice",
          duration: "2005 - 2007",
          years: "2 years",
        },
      ],
      Awards: [
        {
          date: "July 2023",
          award: "Humanitarian Award",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        },
        {
          date: "March 2011",
          award: "Certificate for International Volunteer Service",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        },
        {
          date: "May 2008",
          award: "The Dental Professional of The Year Award",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        },
      ],
      ratings: 17,
      location: "Florida, USA",
      image: [doctor1, doctor1, doctor1],
      personalImage: doctor1,
      like: 98,
      comments: 17,
      amount: "300-1000",
      aboutMe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions",
      reviews: [
        {
          name: "John Doe",
          reviewTime: "2024-03-11",
          comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
      ],
      businessHours: {
        Monday: "07:00 AM - 09:00 PM",
        Tuesday: "07:00 AM - 09:00 PM",
        Wednesday: "07:00 AM - 09:00 PM",
        Thursday: "07:00 AM - 09:00 PM",
        Friday: "07:00 AM - 09:00 PM",
        Saturday: "07:00 AM - 09:00 PM",
        Sunday: "Closed",
      },
    },
  ];

  const items = [
    {
      key: "1",
      label: "Overview",
      children: (
        <>
        <h4 className="text-gray-500 text-2xl font-bold">About Me</h4>
        <p className="text-gray-800 text-[18px]">{data?.aboutMe}</p>
        <GlobalTimeline items={data?.Education} headline="Education" />
        <GlobalTimeline items={data?.work} headline="Work & Experience" />
        <GlobalTimeline items={data?.Awards} headline="Awards" />
      </>
      ),
    },
 
    {
      key: "3",
      label: "Locations",
      children: (
        <>
          <h3 className="text-2xl text-[#008080]">{data?.location}</h3>
        </>
      ),
    },
    {
      key: "4",
      label: "Reviews",
      children: (
        <>
          {data?.reviews?.map((item, index) => (
            <div className="bg-gray-100 p-5">
              <div className="flex gap-4 items-center">
                <Image
                  src={reviewUser}
                  width={80}
                  height={80}
                  style={{ borderRadius: "50%" }}
                  alt="image"
                />
                <div className="flex flex-col">
                  <h3 className="text-gray-500">{item?.name}</h3>
                  <b className="text-gray">{item?.reviewTime}</b>
                </div>
              </div>
              <p className="text-gray-800">{item?.comment}</p>
              <b className="text-[#008080]">
                <i className="fa-solid fa-reply mx-2 my-2"></i>Reply
              </b>
            </div>
          ))}
        </>
      ),
    },
    {
      key: "5",
      label: "Business Hours",
      children: (
        <div className="text-center">
          <div className="">
            <div className="flex gap-5">
              <b>Monday </b> <p>{data?.businessHours.Monday}</p>
            </div>
            <div className="flex gap-5">
              <b>Tuesday </b> <p>{data?.businessHours.Tuesday}</p>
            </div>
            <div className="flex gap-5">
              <b>Wednesday</b> <p>{data?.businessHours.Wednesday}</p>
            </div>
            <div className="flex gap-5">
              {" "}
              <b>Thursday </b> <p>{data?.businessHours.Thursday}</p>
            </div>
            <div className="flex gap-5">
              {" "}
              <b>Saturday</b> <p>{data?.businessHours.Saturday}</p>
            </div>
            <div className="flex gap-5">
              {" "}
              <b>Sunday</b> <p>{data?.businessHours.Sunday}</p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        size="large"
        items={items}
        onChange={onChange}
      />
    </div>
  );
}

export default DoctorNavTabs;
