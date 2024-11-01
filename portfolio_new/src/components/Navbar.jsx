import AnchorLink from "react-anchor-link-smooth-scroll";
const Navbar = () => {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <div className="p-3 fixed z-50 bg-white/70 text-slate-500 backdrop-blur-3xl top-0 shadow-sm shadow-slate-200 w-screen hidden sm:flex justify-center items-center">
      <ul className=" flex gap-5">
        {navItems.map((item, index) => {
          return (
            <li
              className=" hover:underline hover:underline-offset-2"
              key={index}
            >
              <AnchorLink href={item.link}>{item.name}</AnchorLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
