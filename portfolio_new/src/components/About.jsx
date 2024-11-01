import { useState } from "react";

const About = () => {
  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore(!more);
  };
  return (
    <div className=" h-screen text-white tracking-wide flex flex-col bg-fixed place-content-center bg-[url('/hero_about.jpeg')] bg-cover bg-no-repeat">
      <div className="flex flex-col place-content-center backdrop-blur-sm bg-black/50 h-full p-5">
        <div className="flex p-2 font-bold text-xl sm:text-2xl">
          <p>About</p>
          <p className="pl-2">Me</p>
        </div>
        <div className="p-2 font-semibold text-sm md:text-lg tracking-wide">
          Hi, I,m Here To Build Your Dream Project !
        </div>
        <div className="p-2 text-justify md:font-medium text-sm lg:text-xl tracking-wider">
          Passionate and self-motivated entry-level Full Stack Web Developer
          seeking to leverage my strong foundations in HTML, CSS, and
          JavaScript, along with a keen interest in frameworks like React JS,
          Next JS and Tailwind CSS, to contribute to building dynamic and
          user-friendly web applications. Driven by a love for problem-solving
          and a thirst for continuous learning, I'm eager to join a
          collaborative team and grow my skills while contributing to real-world
          projects.
        </div>
        <div></div>
        {more ? (
          <>
            <button
              onClick={handleMore}
              className="  hover:underline hover:underline-offset-2"
            >
              Read Less
            </button>
            <div className="p-2 text-justify md:font-medium text-sm lg:text-xl">
              <p className="py-2 text-2xl text-left font-bold">
                Creating Impressive web experiences, pixel by pixel
              </p>
              <p className="tracking-wider">
                Embarking on a journey as a full-stack web developer from
                Kolkata, my portfolio showcase cutting-edge designs and
                streamelined solutions, with the perfect blend of creativity and
                technical knowledge. Immerse yourself in an array of successful
                web projects, rendering my footprint in the digital landscape.
              </p>
            </div>
          </>
        ) : (
          <button
            onClick={handleMore}
            className=" sm:block hidden hover:underline hover:underline-offset-2"
          >
            Read More ...
          </button>
        )}
      </div>
    </div>
  );
};

export default About;
