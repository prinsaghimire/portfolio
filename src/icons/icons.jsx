import { useNavbar } from "../navbar/navbarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export function HamburgerIcon() {
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

export function FAIcon({ icon }) {
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

export function NavIcon({ href, icon }) {
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

export function HomeIcon() {
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

export function MediumIcon() {
  return (
    <>
      <NavIcon href={"https://medium.com/@prinsaghimire23"} icon={faMedium} />
    </>
  );
}

export function LinkedinIcon() {
  return (
    <>
      <NavIcon
        href={"https://www.linkedin.com/in/prinsaghimire101/"}
        icon={faLinkedinIn}
      />
    </>
  );
}

export function EmailIcon() {
  return (
    <>
      <NavIcon href={"mailto:prinsaghimire23@gmail.com"} icon={faEnvelope} />
    </>
  );
}
