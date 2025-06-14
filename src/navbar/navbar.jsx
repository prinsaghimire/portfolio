import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import NavbarProvider from "./navbarContext";
import { useNavbar } from "./navbarContext";
import { PageContext } from "../pageContext";

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

  const page = useContext(PageContext)
  const isHome = page === 'home';

  const handleHomeClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      window.location.assign('/');
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
  });

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

function HomeIcon() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2.69L15 7.19V15H13V9H7V15H5V7.19L10 2.69ZM10 0L0 9H3V17H9V11H11V17H17V9H20L10 0Z"
        fill="var(--color-black)"
      />
    </svg>
  );
}

function MediumIcon() {
  return (
    <>
      <NavIcon href={"https://medium.com/@prinsaghimire23"} icon={faMedium} />
    </>
  );
}

function LinkedinIcon() {
  return (
    <>
      <NavIcon
        href={"https://www.linkedin.com/in/prinsaghimire101/"}
        icon={faLinkedinIn}
      />
    </>
  );
}

function EmailIcon() {
  return (
    <>
      <NavIcon href={"mailto:prinsaghimire23@gmail.com"} icon={faEnvelope} />
    </>
  );
}

function HamburgerIcon() {
  const { lightHamburger, darkHamburger } = useNavbar();

  const textLightColors = {
    black: "text-black",
    white: "text-white",
  };
  const textDarkColors = {
    black: "dark:text-black",
    white: "text-white",
  };
  return (
    <FontAwesomeIcon
      icon={faBars}
      className={`${textLightColors[lightHamburger]} ${textDarkColors[darkHamburger]}`}
    />
  );
}

function FAIcon({ icon }) {
  const { lightText, darkText } = useNavbar();
  const textLightColors = {
    primary: "text-primary",
    white: "text-white",
  };
  const textDarkColors = {
    white: "dark:text-white",
    black: "dark:text-black",
  };

  return (
    <FontAwesomeIcon
      icon={icon}
      className={`${textLightColors[lightText]} ${textDarkColors[darkText]}`}
    />
  );
}

function NavIcon({ href, icon }) {
  const { lightText, darkText } = useNavbar();

  const borderLightColors = {
    primary: "border-primary",
    white: "border-white",
  };
  const borderDarkColors = {
    white: "dark:border-white",
    black: "dark:border-black",
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <span
        className={`flex justify-center items-center rounded-[8px] size-[32px] border-[2px] border-solid ${borderLightColors[lightText]} ${borderDarkColors[darkText]}`}
      >
        <FAIcon icon={icon} />
      </span>
    </a>
  );
}
