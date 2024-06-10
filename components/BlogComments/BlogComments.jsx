"use client";
import React from "react";
import GlobalButton from "../Global/GlobalButton";
import demoimg from "../../src/assets/img/demoimg.jpg";
import Image from "next/image";

function BlogComments() {
  return (
    <div className="mt-8 text-center">
      <div className="bg-slate-100 py-4">
        <div className="flex items-center gap-5">
          <Image
            src={demoimg}
            width={70}
            height={70}
            style={{ borderRadius: "50%" }}
            className="mx-4"
          />
          <div className="text-left">
            <p className="font-bold">Jhon Reham</p>
          </div>
        </div>
        <p className="mx-20 text-left text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eum
          aut, corporis possimus voluptate veniam iste repudiandae dicta odit?
          Totam expedita porro natus, obcaecati iste at harum voluptatibus
          assumenda voluptatem dolorum perspiciatis quaerat ea vitae,
          dignissimos neque necessitatibus culpa? Quaerat, itaque ullam. Unde ad
          alias impedit aliquid reprehenderit id placeat temporibus atque. Harum
          vel fuga quis ratione delectus odit quas laudantium magni veniam
          excepturi quidem enim tempore, culpa nemo ad quo expedita. Perferendis
          modi obcaecati neque tenetur, perspiciatis quis aliquid deserunt
          molestiae ratione enim alias accusantium esse, id vero aperiam
          aspernatur asperiores eius laboriosam placeat quos. Magni dolores id
          voluptatum.
        </p>
        <p className="mt-2 text-left mx-20 text-gray-500">
          <i className=" mx-2 text-[#008080] fa-solid fa-reply"></i>Reply
        </p>
      </div>
      <textarea
        rows="5"
        placeholder="Inter Your Comments Here..."
        className="border outline-[#008080] p-4 w-[70%] mx-auto"
        type="text"
      />{" "}
      <br />
      <GlobalButton text="Submit" />
    </div>
  );
}

export default BlogComments;
