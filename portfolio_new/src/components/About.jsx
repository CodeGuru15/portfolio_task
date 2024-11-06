import { useState } from "react";

const About = () => {
  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore(!more);
  };
  return (
    <div className=" h-screen text-white tracking-wide flex flex-col bg-fixed place-content-center bg-[url('/hero_about.jpeg')] bg-cover bg-no-repeat">
      <div className="flex flex-col h-full p-5 place-content-center backdrop-blur-sm bg-black/50">
        <div className="flex p-2 text-xl font-bold sm:text-2xl">
          <p>About</p>
          <p className="pl-2">Me</p>
        </div>
        <div className="p-2 text-sm font-semibold tracking-wide md:text-lg">
          Hi, I,m Here To Build Your Dream Project !
        </div>
        <div className="p-2 text-sm tracking-wider text-justify md:font-medium lg:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
          commodi nihil eaque ducimus delectus rem accusamus minus quo, nemo
          facere veniam voluptas laudantium iure consequuntur ad voluptate. In,
          dolor iste!
        </div>
        <div></div>
        {more ? (
          <>
            <button
              onClick={handleMore}
              className=" hover:underline hover:underline-offset-2"
            >
              Read Less
            </button>
            <div className="p-2 text-sm text-justify md:font-medium lg:text-xl">
              <p className="tracking-wider">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                repellendus sunt tenetur necessitatibus voluptatibus asperiores
                vero voluptas eius explicabo corrupti, quod fugit magni sit
                officiis perspiciatis natus voluptatum perferendis voluptatem.
              </p>
            </div>
          </>
        ) : (
          <button
            onClick={handleMore}
            className="hidden sm:block hover:underline hover:underline-offset-2"
          >
            Read More ...
          </button>
        )}
      </div>
    </div>
  );
};

export default About;
