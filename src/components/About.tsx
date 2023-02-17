import React from "react";

const About = () => {
  const me = "../assets/me.jpg";

  return (
    <div
      id="about"
      className="w-full page-banner h-screen  text-gray-300"
      style={{
        backgroundImage: `url(${me})`,
      }}
    >
      <div className="flex flex-col justify-center bg-[rgba(10,25,47,0.97)] items-center h-full  ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 pt-[40px] ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 pb-[40px]  gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Akhigbe Peace. Nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p className="text-justify">
              I am a highly motivated and creative Frontend Developer with a
              passion for developing beautiful and functional web experiences.
              With a solid foundation in HTML, CSS, JavaScript and React, I am
              dedicated to learning new skills and staying up-to-date with the
              latest trends in frontend development. My attention to detail,
              problem-solving skills, and eagerness to collaborate make me a
              valuable addition to any team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
