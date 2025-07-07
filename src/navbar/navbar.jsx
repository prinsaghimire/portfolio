import { useState, useEffect, useContext } from "react";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarProvider from "./navbarContext";
import { useNavbar } from "./navbarContext";
import { PageContext } from "../pageContext";
import {
  HamburgerIcon,
  HomeIcon,
  MediumIcon,
  LinkedinIcon,
  EmailIcon,
} from "../icons/icons";

export function Navbar() {
  return (
    <>
      <NavbarProvider>
        <NavWrap />
        <ThemeToggler />
      </NavbarProvider>
    </>
  );
}

export function NavWrap() {
  const [showSideBarNav, setShowSideBarNav] = useState(false);
  const handleHamburgerClick = () => {
    setShowSideBarNav(true);
  };

  const { lightBg, darkBg } = useNavbar();

  const page = useContext(PageContext);
  const isHome = page === "home";

  const handleHomeClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      window.location.assign("/");
    }
  };

  const bgClasses = {
    white: "bg-white",
    primary: "bg-primary",
    background: "bg-background",
  };

  const darkBgClasses = {
    white: "dark:bg-white",
    primary: "dark:bg-primary",
    background: "dark:bg-background",
  };

  return (
    <>
      {showSideBarNav && <SideBarNav fn={() => setShowSideBarNav(false)} />}
      <div className="z-999 sticky top-0 pb-[16px] backdrop-blur-[5px]">
        <div className="w-[calc(100vw-60px)] max-w-[1184px] my-0 mx-auto h-[64px] flex justify-between items-end">
          <div
            className="size-[40px] rounded-[8px] p-[8px] flex justify-center shadow-[0px_0px_10px_#000000aa] cursor-pointer bg-background"
            onClick={handleHomeClick}
          >
            <HomeIcon />
          </div>
          <div
            className={`${bgClasses[lightBg]} ${darkBgClasses[darkBg]} h-full w-fit min-w-[52px] rounded-b-[8px] flex justify-center items-end shadow-[0px_0px_10px_#000000aa]`}
          >
            <div
              className="sm:hidden p-[8px] cursor-pointer"
              onClick={handleHamburgerClick}
            >
              <HamburgerIcon />
            </div>
            <div className="hidden sm:flex justify-center gap-[16px] py-[8px] px-[16px]">
              <MediumIcon />
              <LinkedinIcon />
              <EmailIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SideBarNav({ fn }) {
  return (
    <>
      <div className="h-screen w-full absolute top-0 left-0 bg-[#00000050] z-1"></div>
      <div className="bg-primary fixed right-0 top-0 z-2000 h-screen min-w-[50%] flex flex-col justify-start items-start gap-[24px] p-[96px_32px_32px_32px]">
        <div
          className="absolute right-0 top-0 p-[32px] cursor-pointer"
          onClick={fn}
        >
          <FontAwesomeIcon icon={faX} style={{ color: "var(--color-white)" }} />
        </div>
        <div className="flex justify-start items-center gap-[8px]">
          <span>
            <MediumIcon />
          </span>
          <span className="text-white">Medium</span>{" "}
        </div>
        <div className="flex justify-start items-center gap-[8px]">
          <span>
            <LinkedinIcon />
          </span>
          <span className="text-white">Linkedin</span>{" "}
        </div>
        <div className="flex justify-start items-center gap-[8px]">
          <span>
            <EmailIcon />
          </span>
          <span className="text-white">Email</span>{" "}
        </div>
      </div>
    </>
  );
}

function ThemeToggler() {
  const [appliedTheme, setAppliedTheme] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAppliedTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
    setLoading(false);
  }, []);

  const handleSwitchTheme = () => {
    const currentTheme = localStorage.theme;
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.theme = nextTheme;
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    setAppliedTheme(nextTheme);
  };

  return (
    <>
      {!loading && (
        <div
          id="theme-toggle"
          className="size-[64px] rounded-full text-center leading-[64px] bg-primary z-1000 shadow-[0px_0px_5px_1px_gray] fixed bottom-[64px] left-[calc(50%+min(562px,calc((100vw-60px)/2))-64px)] cursor-pointer"
          onClick={() => handleSwitchTheme()}
        >
          <FontAwesomeIcon
            icon={appliedTheme === "dark" ? faLightbulb : faMoon}
            style={{ color: "var(--color-white)" }}
          />
        </div>
      )}
    </>
  );
}
