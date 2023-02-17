import React from "react";
import { technologies } from "../data/data";
import Image from "next/image";

const Skills = () => {
  const bg = "/assets/laptop.webp";

  return (
    <div
      id="skills"
      className="w-full h-screen page-banner text-gray-300"
      style={{
        backgroundImage: "url('../assets/laptop.webp')",
      }}
    >
      <div className="bg-[rgba(10,25,47,0.97)]  w-full h-full">
        <div className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-screen ">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
              Skills
            </p>
            <p className="py-4">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pb-[90px] pt-8">
            {technologies.map((item, index) => (
              <div
                key={index}
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
              >
                <Image
                  src={item.img}
                  alt="HTML icon"
                  width={80}
                  height={80}
                  className="w-20 mx-auto"
                />
                <p className="my-4">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
