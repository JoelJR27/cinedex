import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import ClickableLink from "../ClickableLink";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = useWindowWidth();
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-primary-color p-5 flex justify-around text-white font-bold items-center">
      <div className="flex items-center justify-center gap-2">
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          style={
            isOpen
              ? {
                  transform: "rotate(90deg)",
                  transition: "all 0.3s ease-in-out",
                }
              : {
                  transform: "rotate(0deg)",
                  transition: "all 0.3s ease-in-out",
                }
          }
          className="text-xl cursor-pointer md:opacity-0 md:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1 className="text-white text-xl font-bold">CineDex</h1>
      </div>
      <div className="flex items-center">
        {windowWidth < 768 && isOpen && (
          <nav className="bg-primary-color absolute left-0 top-17 w-1/2 p-5">
            <div className="flex flex-col items-center gap-6 md:flex-row md:gap-3">
              <ClickableLink link={"/"} text={"Home"} />
              <ClickableLink link={"/people"} text={"People"} />
            </div>
          </nav>
        )}
        {windowWidth >= 768 && (
          <nav className="hidden md:relative md:block md:w-auto md:left-auto md:top-auto md:p-0">
            <div className="flex flex-col items-center gap-6 md:flex-row md:gap-3">
              <ClickableLink link={"/"} text={"Home"} />
              <ClickableLink link={"/people"} text={"People"} />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
