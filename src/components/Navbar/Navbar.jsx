import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      id: 1,
      name: "Home",
      to: "home",
    },
    {
      id: 2,
      name: "About",
      to: "about",
    },
    {
      id: 3,
      name: "Skills",
      to: "skills",
    },
    {
      id: 4,
      name: "Projects",
      to: "projects",
    },

    {
      id: 5,
      name: "Creative Portfolio",
      to: "creative",
    },


    {
      id: 6,
      name: "Contact",
      to: "contact",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer text-2xl font-bold text-primary"
        >
          BS<span className="text-accent">.</span>
        </Link>


        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 items-center">

          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="
                  cursor-pointer
                  text-gray-700
                  hover:text-primary
                  transition
                "
              >
                {link.name}
              </Link>
            </li>
          ))}


          

        </ul>


        {/* Bouton Mobile */}
        <button
          className="md:hidden text-3xl text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>


      {/* Menu Mobile */}

      {
        isOpen && (

          <ul className="md:hidden bg-white px-6 pb-6 space-y-4 shadow-md">

            {links.map((link)=>(
              <li key={link.id}>

                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={()=>setIsOpen(false)}
                  className="
                    cursor-pointer
                    block
                    text-gray-700
                    hover:text-primary
                  "
                >
                  {link.name}
                </Link>

              </li>
            ))}

          </ul>

        )
      }

    </nav>
  );
}

export default Navbar;