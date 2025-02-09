
const NavBar = ({Open}) => {
  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link",
    },
  ];

  return (
    <nav>
      <div className="hidden md:flex flex-col md:flex-row gap-20 ring-2 ring-bg-white rounded-full p-2">
        {navItems.map(({ label, link, className }, key) => (
          <a href={link} className={`${className} block`} key={key}>
            {label}
          </a>
        ))}
      </div>
    {Open && (

        <div className="flex flex-col gap-20 ring-2 ring-bg-white rounded-full p-2">
          {navItems.map(({ label, link, className }, key) => (
            <a href={link} className={`${className} block`} key={key}>
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
