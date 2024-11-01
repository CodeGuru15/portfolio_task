const HeroSection = () => {
  return (
    <div className=" flex p-5 gap-5 flex-col bg-no-repeat place-content-center bg-center bg-cover bg-[url('/sample.jpg')] h-screen">
      <div className="sm:text-7xl text-5xl font-extrabold flex flex-col gap-2 text-white tracking-widest ">
        <span className=" ">I'M</span>
        <span>ARIJIT</span>
        <span>PAL</span>
      </div>
      <div>
        <span className=" text-xl sm:text-3xl tracking-wide font-bold">
          <span>WEB</span> DEVELOPER
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
