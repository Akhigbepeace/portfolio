import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const bg = "/assets/laptop.webp";

  return (
    <div
      id="home"
      className="w-full h-screen page-banner "
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="px-8 bg-[rgba(10,25,47,0.95)] w-full  h-full flex items-center justify-center">
        <div className=" flex flex-col justfiy-center ">
          <p className="text-pink-600 text-[20px] ">Hi, my name is</p>

          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            AKHIGBE PEACE
          </h1>
          <h2 className="text-[20px] sm:text-[25px] font-bold text-[#8892b0]">
            I am a Frontend Developer.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[600px] text-justify ">
            I’m a frontend developer specializing in developing exceptional
            digital experiences. Currently, I’m focused on building responsive
            web applications.
          </p>
          <div className="cursor-pointer">
            <Link
              to="work"
              smooth={true}
              className="text-white group border-2  px-6 py-3 my-2 inline-flex items-center hover:bg-pink-600 hover:border-pink-600"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
