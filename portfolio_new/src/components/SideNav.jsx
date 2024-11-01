import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import AnchorLink from "react-anchor-link-smooth-scroll";

const SideNav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className=" flex sm:hidden w-full bg-white/70 backdrop-blur-md  overflow-x-hidden px-5 md:text-lg justify-end py-2 z-50 fixed top-0">
      {toggle ? (
        <div className="flex flex-col w-full">
          <div className=" flex justify-end">
            <button className="" onClick={handleToggle}>
              <IoClose />
            </button>
          </div>
          <div className=" flex justify-center">
            <ul className="text-center">
              {navItems.map((item, index) => {
                return (
                  <li key={index} className="">
                    <AnchorLink href={item.link}>
                      <button
                        onClick={handleToggle}
                        className=" text-slate-800 hover:underline hover:underline-offset-2"
                      >
                        {item.name}
                      </button>
                    </AnchorLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <button className="menu text-2xl" onClick={handleToggle}>
          <IoMenu />
        </button>
      )}
    </div>
  );
};

export default SideNav;
