const HeroSection = () => {
  return (
    <div className=" flex p-5 gap-5 flex-col bg-no-repeat place-content-center bg-center bg-cover bg-[url('/sample.jpg')] h-screen">
      <div className="flex flex-col gap-2 text-5xl font-extrabold tracking-widest text-white sm:text-7xl ">
        <span className="">I'M</span>
        <span>John</span>
        <span>Doe</span>
      </div>
      <div>
        <span className="text-xl font-bold tracking-wide  sm:text-3xl">
          <span>WEB</span> DEVELOPER
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
