const Portfolio = () => {
  const projects = [
    {
      name: "E-Commerce",
      details: "Description of the project",
      link: "#",
    },
    {
      name: "Social networking site",
      details: "Full Stack Project",
      link: "#",
    },
    {
      name: "Weather App",
      details: "Built with integrated API",
      link: "#",
    },
  ];
  return (
    <div className=" h-screen  text-white bg-[url('/project.webp')] bg-cover bg-no-repeat">
      <div className="flex flex-col items-center w-full h-full p-5  backdrop-blur-md bg-black/30 place-content-center">
        <div className="p-3 text-3xl font-semibold tracking-wider">
          MY PORTFOLIO
        </div>
        <ul className="flex flex-wrap justify-center gap-2 ">
          {projects.map((item, index) => {
            return (
              <li
                key={index}
                className="flex flex-col h-32 px-3 py-1 text-center border rounded-md w-52 hover:border-blue-600 sm:w-72 sm:text-xl place-content-center"
              >
                <div className="py-1 font-bold">{item.name}</div>
                <div className="p-2 text-base">{item.details}</div>
                <a href={item.link} className="block text-xs cursor-pointer ">
                  Visit Site
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
