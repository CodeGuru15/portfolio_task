const Portfolio = () => {
  const projects = [
    {
      name: "E-Commerce",
      details: "Built with React and Tailwind",
      link: "https://github.com/CodeGuru15/Shopping-site-React_Vite.git",
    },
    {
      name: "Social networking site",
      details: "Full Stack Project",
      link: "#",
    },
    {
      name: "Web Scraping",
      details: "Built with Python",
      link: "https://github.com/CodeGuru15/Web_Scraping.git",
    },
  ];
  return (
    <div className=" h-screen  text-white bg-[url('/project.webp')] bg-cover bg-no-repeat">
      <div className=" backdrop-blur-md bg-black/30 h-full p-5 w-full flex flex-col items-center place-content-center">
        <div className="p-3 text-3xl tracking-wider font-semibold">
          MY PORTFOLIO
        </div>
        <ul className=" flex flex-wrap gap-2 justify-center">
          {projects.map((item, index) => {
            return (
              <li
                key={index}
                className="w-52 hover:border-blue-600 sm:w-72 border text-center sm:text-xl px-3 py-1 h-32 flex flex-col place-content-center rounded-md"
              >
                <div className="font-bold py-1">{item.name}</div>
                <div className="p-2 text-base">{item.details}</div>
                <a href={item.link} className=" text-xs block cursor-pointer">
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
