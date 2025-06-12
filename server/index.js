import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, useLocation, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse, useNavigate } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, createContext, useMemo, useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";
import { faMedium, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "@react-router/dev/routes";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
function Layout({
  children
}) {
  const location = useLocation();
  const backgroundClass = location.pathname === "/showcase/artsy-ecommerce" ? "bg-primary" : "bg-site";
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {}), /* @__PURE__ */ jsx("script", {
        src: "/themeCheck.js"
      })]
    }), /* @__PURE__ */ jsxs("body", {
      className: `${backgroundClass} transition-colors duration-300 font-sfpro text-[16px]`,
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "text-black text-normal",
      children: message
    }), /* @__PURE__ */ jsx("p", {
      className: "text-black",
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root
}, Symbol.toStringTag, { value: "Module" }));
const NavbarContext = createContext(null);
const NavbarProvider = ({ children }) => {
  const location = useLocation();
  const navbarClasses = useMemo(() => {
    const path = location.pathname;
    if (path === "/") {
      return {
        lightHamburger: "white",
        darkHamburger: "white",
        lightBg: "primary",
        darkBg: "primary",
        lightText: "white",
        darkText: "white"
      };
    } else {
      return {
        lightHamburger: "black",
        darkHamburger: "black",
        lightBg: "background",
        darkBg: "background",
        lightText: "primary",
        darkText: "black"
      };
    }
  }, [location.pathname]);
  return /* @__PURE__ */ jsx(NavbarContext.Provider, { value: navbarClasses, children });
};
const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useRouteContext must be used within a RouteProvider");
  }
  return context;
};
function Navbar() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(NavbarProvider, { children: [
    /* @__PURE__ */ jsx(NavWrap, {}),
    /* @__PURE__ */ jsx(ThemeToggler, {})
  ] }) });
}
function NavWrap() {
  const [showSideBarNav, setShowSideBarNav] = useState(false);
  const handleHamburgerClick = () => {
    setShowSideBarNav(true);
  };
  const { lightBg, darkBg } = useNavbar();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const handleHomeClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };
  const bgClasses = {
    white: "bg-white",
    primary: "bg-primary",
    background: "bg-background"
  };
  const darkBgClasses = {
    white: "dark:bg-white",
    primary: "dark:bg-primary",
    background: "dark:bg-background"
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    showSideBarNav && /* @__PURE__ */ jsx(SideBarNav, { fn: () => setShowSideBarNav(false) }),
    /* @__PURE__ */ jsx("div", { className: "z-999 sticky top-0 pb-[16px] backdrop-blur-[5px]", children: /* @__PURE__ */ jsxs("div", { className: "w-[calc(100vw-60px)] max-w-[1184px] my-0 mx-auto h-[64px] flex justify-between items-end", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "size-[40px] rounded-[8px] p-[8px] flex justify-center shadow-[0px_0px_10px_#000000aa] cursor-pointer bg-background",
          onClick: handleHomeClick,
          children: /* @__PURE__ */ jsx(HomeIcon, {})
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `${bgClasses[lightBg]} ${darkBgClasses[darkBg]} h-full w-fit min-w-[52px] rounded-b-[8px] flex justify-center items-end shadow-[0px_0px_10px_#000000aa]`,
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "sm:hidden p-[8px] cursor-pointer",
                onClick: handleHamburgerClick,
                children: /* @__PURE__ */ jsx(HamburgerIcon, {})
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex justify-center gap-[16px] py-[8px] px-[16px]", children: [
              /* @__PURE__ */ jsx(MediumIcon, {}),
              /* @__PURE__ */ jsx(LinkedinIcon, {}),
              /* @__PURE__ */ jsx(EmailIcon, {})
            ] })
          ]
        }
      )
    ] }) })
  ] });
}
function SideBarNav({ fn }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "h-screen w-full absolute top-0 left-0 bg-[#00000050] z-1" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-primary fixed right-0 top-0 z-2000 h-screen min-w-[50%] flex flex-col justify-start items-start gap-[24px] p-[96px_32px_32px_32px]", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute right-0 top-0 p-[32px] cursor-pointer",
          onClick: fn,
          children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faX, style: { color: "var(--color-white)" } })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-start items-center gap-[8px]", children: [
        /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(MediumIcon, {}) }),
        /* @__PURE__ */ jsx("span", { className: "text-white", children: "Medium" }),
        " "
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-start items-center gap-[8px]", children: [
        /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(LinkedinIcon, {}) }),
        /* @__PURE__ */ jsx("span", { className: "text-white", children: "Linkedin" }),
        " "
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-start items-center gap-[8px]", children: [
        /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(EmailIcon, {}) }),
        /* @__PURE__ */ jsx("span", { className: "text-white", children: "Email" }),
        " "
      ] })
    ] })
  ] });
}
function ThemeToggler() {
  const [appliedTheme, setAppliedTheme] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setAppliedTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
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
  return /* @__PURE__ */ jsx(Fragment, { children: !loading && /* @__PURE__ */ jsx(
    "div",
    {
      id: "theme-toggle",
      className: "size-[64px] rounded-full text-center leading-[64px] bg-primary z-1000 shadow-[0px_0px_5px_1px_gray] fixed bottom-[64px] left-[calc(50%+min(562px,calc((100vw-60px)/2))-64px)]",
      onClick: () => handleSwitchTheme(),
      children: /* @__PURE__ */ jsx(
        FontAwesomeIcon,
        {
          icon: appliedTheme === "dark" ? faLightbulb : faMoon,
          style: { color: "var(--color-white)" }
        }
      )
    }
  ) });
}
function HomeIcon() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 20 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M10 2.69L15 7.19V15H13V9H7V15H5V7.19L10 2.69ZM10 0L0 9H3V17H9V11H11V17H17V9H20L10 0Z",
          fill: "var(--color-black)"
        }
      )
    }
  );
}
function MediumIcon() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(NavIcon, { href: "https://medium.com/@prinsaghimire23", icon: faMedium }) });
}
function LinkedinIcon() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    NavIcon,
    {
      href: "https://www.linkedin.com/in/prinsaghimire101/",
      icon: faLinkedinIn
    }
  ) });
}
function EmailIcon() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(NavIcon, { href: "mailto:prinsaghimire23@gmail.com", icon: faEnvelope }) });
}
function HamburgerIcon() {
  const { lightHamburger, darkHamburger } = useNavbar();
  const textLightColors = {
    black: "text-black",
    white: "text-white"
  };
  const textDarkColors = {
    black: "dark:text-black",
    white: "text-white"
  };
  return /* @__PURE__ */ jsx(
    FontAwesomeIcon,
    {
      icon: faBars,
      className: `${textLightColors[lightHamburger]} ${textDarkColors[darkHamburger]}`
    }
  );
}
function FAIcon({ icon }) {
  const { lightText, darkText } = useNavbar();
  const textLightColors = {
    primary: "text-primary",
    white: "text-white"
  };
  const textDarkColors = {
    white: "dark:text-white",
    black: "dark:text-black"
  };
  return /* @__PURE__ */ jsx(
    FontAwesomeIcon,
    {
      icon,
      className: `${textLightColors[lightText]} ${textDarkColors[darkText]}`
    }
  );
}
function NavIcon({ href, icon }) {
  const { lightText, darkText } = useNavbar();
  const borderLightColors = {
    primary: "border-primary",
    white: "border-white"
  };
  const borderDarkColors = {
    white: "dark:border-white",
    black: "dark:border-black"
  };
  return /* @__PURE__ */ jsx("a", { href, target: "_blank", children: /* @__PURE__ */ jsx(
    "span",
    {
      className: `flex justify-center items-center rounded-[8px] size-[32px] border-[2px] border-solid ${borderLightColors[lightText]} ${borderDarkColors[darkText]}`,
      children: /* @__PURE__ */ jsx(FAIcon, { icon })
    }
  ) });
}
function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxs("div", { className: "bg-primary text-white text-center py-[8px] font-bold", children: [
    "© ",
    year,
    " Prinsa Ghimire"
  ] });
}
function PGButton({ btnText }) {
  return /* @__PURE__ */ jsx("button", { className: "border-solid border-[2px] rounded-[12px] p-[12px] mt-[24px] font-[500] leading-[20px] tracking-[0.05em] cursor-pointer uppercase opacity-[0.95] text-[16px] border-border-btn bg-background-btn text-black hover:text-white hover:bg-primary hover:border-primary", children: btnText });
}
function PGLinkButton({
  btnText,
  btnLink,
  download = ""
}) {
  return download !== "" ? /* @__PURE__ */ jsx("a", { href: btnLink, download, children: /* @__PURE__ */ jsx(PGButton, { btnText }) }) : /* @__PURE__ */ jsx("a", { href: btnLink, target: "_blank", children: /* @__PURE__ */ jsx(PGButton, { btnText }) });
}
function GetInTouch() {
  return /* @__PURE__ */ jsxs("div", { className: "my-[40px] w-full flex flex-col gap-[32px] sm:flex-row justify-between items-center font-[500]", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full sm:max-w-[50%] inline-flex sm:block text-normal leading-normal align-left text-black p-[32px]", children: [
      /* @__PURE__ */ jsx("div", { children: "Get in" }),
      /* @__PURE__ */ jsx("div", { className: "text-primary font-sfpro-medium font-bold", children: "Touch." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full sm:max-w-[50%] bg-background rounded-[24px] p-[32px]", children: [
      /* @__PURE__ */ jsx("div", { className: "font-[400] text-[20px] leading-[36px] text-black-97", children: "I’d love to collaborate or discuss design ideas! Feel free to reach out via email." }),
      /* @__PURE__ */ jsx(
        PGLinkButton,
        {
          btnLink: "mailto:prinsaghimire23@gmail.com",
          btnText: "prinsaghimire23@gmail.com"
        }
      )
    ] })
  ] });
}
const profile_image = "/assets/profile-DlXZ6jyG.png";
const prinsa_resume = "/assets/PRINSA_GHIMIRE_RESUME-930hEvuL.pdf";
const figma = "data:image/png;base64,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";
const html = "data:image/png;base64,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";
const css = "data:image/png;base64,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";
const illustrator = "data:image/png;base64,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";
const photoshop = "data:image/png;base64,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";
const xd = "data:image/png;base64,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";
const artsy_ecommerce_light = "/assets/work_3-D8_tVzoo.png";
const artsy_ecommerce_dark = "/assets/work_3_dark-CaRM3sVP.png";
const gamification_light = "/assets/work_1-DkmAVsKv.png";
const gamification_dark = "/assets/work_1_dark-t0PhVqDP.png";
function Portfolio() {
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(PageContent$1, {})
  ] });
}
function PageContent$1() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col items-center gap-[32px]", children: [
      /* @__PURE__ */ jsx(Intro$1, {}),
      /* @__PURE__ */ jsx(Work, {}),
      /* @__PURE__ */ jsx(Skill, {}),
      /* @__PURE__ */ jsx(Showcase, {}),
      /* @__PURE__ */ jsx(GetInTouch, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Intro$1() {
  return /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col sm:flex-row justify-between items-center gap-[32px]", children: [
    /* @__PURE__ */ jsx(IntroText, {}),
    /* @__PURE__ */ jsx(IntroPicture, {})
  ] });
}
function IntroText() {
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-[100%] sm:max-w-[50%] min-[700px]:max-w-[75%]", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-14 leading-14 sm:text-normal sm:leading-normal font-[500] text-black font-sfpro-medium", children: "I craft scalable" }),
    /* @__PURE__ */ jsx("h1", { className: "text-14 leading-14 sm:text-normal sm:leading-normal font-[500] text-black font-sfpro-medium", children: "UI/UX solutions for" }),
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden h-[var(--leading-14)] leading-[var(--leading-14)] sm:h-[var(--leading-normal)] sm:leading-[var(--leading-normal)]", children: [
      /* @__PURE__ */ jsx("h1", { className: "animated-text text-primary absolute left-0 top-0 transform-[translateY(100%)] animate-[slide-up_8s_linear_infinite] text-14 leading-14 sm:text-normal sm:leading-normal tracking-[1%] font-sfpro-medium font-[500]", children: "Startups" }),
      /* @__PURE__ */ jsx("h1", { className: "animated-text text-primary absolute left-0 top-0 transform-[translateY(100%)] animate-[slide-up_8s_linear_infinite] text-14 leading-14 sm:text-normal sm:leading-normal tracking-[1%] font-sfpro-medium font-[500]", children: "Enterprises" }),
      /* @__PURE__ */ jsx("h1", { className: "animated-text text-primary absolute left-0 top-0 transform-[translateY(100%)] animate-[slide-up_8s_linear_infinite] text-14 leading-14 sm:text-normal sm:leading-normal tracking-[1%] font-sfpro-medium font-[500]", children: "Users" }),
      /* @__PURE__ */ jsx("h1", { className: "animated-text text-primary absolute left-0 top-0 transform-[translateY(100%)] animate-[slide-up_8s_linear_infinite] text-14 leading-14 sm:text-normal sm:leading-normal tracking-[1%] font-sfpro-medium font-[500]", children: "Products" })
    ] }),
    /* @__PURE__ */ jsx(
      PGLinkButton,
      {
        btnText: "Get In Touch",
        btnLink: "mailto:prinsaghimire23@gmail.com"
      }
    )
  ] });
}
function IntroPicture() {
  return /* @__PURE__ */ jsx("div", { className: "w-full max-w-[100%] sm:max-w-[50%] min-[700px]:max-w-[25%]", children: /* @__PURE__ */ jsx(
    "img",
    {
      className: "w-full object-cover aspect-square rounded-[16px] shadow-[0px_0px_10px_gray] bg-[#ffffffa0]",
      src: profile_image
    }
  ) });
}
function Work() {
  return /* @__PURE__ */ jsxs("div", { className: "my-[40px] flex flex-col sm:flex-row gap-[32px] justify-between items-center animate-[fade-in_2s_ease-out_1]", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full sm:max-w-[50%] font-sfpro-medium text-[32px] font-[500] leading-[44.8px] align-left text-black p-[32px]", children: [
      "Hi! I’m Prinsa, a designer with 4+ years of experience designing",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "user-centric solutions for" }),
      " diverse industries."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full sm:max-w-[50%] bg-background rounded-[24px] p-[32px]", children: [
      /* @__PURE__ */ jsx("div", { className: "font-[400] text-[20px] leading-[36px] text-black-97", children: "My journey includes roles at startups and global teams, specializing in designing wireframes, user flows, and accessible prototypes. Currently pursuing a Master’s in Information Systems at ETSU, I’m passionate about mentoring designers and sharing insights on accessibility and design systems." }),
      /* @__PURE__ */ jsx(
        PGLinkButton,
        {
          btnLink: prinsa_resume,
          btnText: "Download Resume",
          download: "PRINSA_GHIMIRE_RESUME"
        }
      )
    ] })
  ] });
}
function Skill() {
  return /* @__PURE__ */ jsxs("div", { className: "w-full my-[40px] flex flex-col sm:flex-row gap-[32px] justify-between items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full sm:max-w-[50%] font-sfpro-medium font-[500] text-[32px] leading-[44.8px] text-black", children: [
      "Things ",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "I am good at" }),
      " but not limited to:"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full sm:max-w-[50%] bg-background flex flex-wrap rounded-[24px] justify-around items-center h-[358px] overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "animate-[scroll-up_10s_linear_infinite]", children: [
        /* @__PURE__ */ jsx(SkillIcon, { icon: figma }),
        /* @__PURE__ */ jsx(SkillIcon, { icon: photoshop }),
        /* @__PURE__ */ jsx(SkillIcon, { icon: css }),
        /* @__PURE__ */ jsx(SkillIcon, { icon: figma }),
        /* @__PURE__ */ jsx(SkillIcon, { icon: photoshop }),
        /* @__PURE__ */ jsx(SkillIcon, { icon: css })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "animate-[scroll-down_10s_linear_infinite]", children: [
        /* @__PURE__ */ jsx(SkillIcon, { icon: illustrator }),
        /* @__PURE__ */ jsx(SkillIcon, { icon: html }),
        /* @__PURE__ */ jsx(SkillIcon, { icon: xd }),
        /* @__PURE__ */ jsx(SkillIcon, { icon: illustrator }),
        /* @__PURE__ */ jsx(SkillIcon, { icon: html }),
        /* @__PURE__ */ jsx(SkillIcon, { icon: xd })
      ] })
    ] })
  ] });
}
function SkillIcon({ icon }) {
  return /* @__PURE__ */ jsx("div", { className: "align-center flex justify-center items-center mt-[30px] my-0", children: /* @__PURE__ */ jsx("img", { src: icon }) });
}
function Showcase() {
  const showCaseData = [
    {
      href: "/showcase/artsy-ecommerce",
      slug: "UI/UX Case Study",
      lightImage: artsy_ecommerce_light,
      darkImage: artsy_ecommerce_dark,
      description: "Designing an Art E‑Commerce Website"
    },
    {
      href: "https://www.behance.net/gallery/210114643/Gamification-of-a-Coffee-Ordering-App",
      slug: "UI/UX Case Study",
      lightImage: gamification_light,
      darkImage: gamification_dark,
      description: "Gamifying a Coffee Ordering App To increase user engagement"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "w-full my-[40px] flex flex-col gap-[32px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full font-sfpro-medium font-[500] text-[32px] leading-[44.8px] text-black", children: [
      "Latest ",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "work." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-between flex-wrap gap-[32px]", children: showCaseData.map(function(data, idx) {
      return /* @__PURE__ */ jsx(
        ShowCasePiece,
        {
          href: data.href,
          slug: data.slug,
          lightImage: data.lightImage,
          darkImage: data.darkImage,
          description: data.description
        },
        idx
      );
    }) })
  ] });
}
function ShowCasePiece({
  href,
  slug,
  lightImage,
  darkImage,
  description
}) {
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-[calc(50%-16px)] flex flex-col", children: [
    /* @__PURE__ */ jsx("a", { href, target: "_blank", children: /* @__PURE__ */ jsx(ShowCaseImage, { lightImage, darkImage }) }),
    /* @__PURE__ */ jsx("div", { className: "my-[16px] my-0 uppercase tracking-[2px] text-black-59 text-[clamp(12px,16px,2vw)]", children: slug }),
    /* @__PURE__ */ jsx("div", { className: "text-[clamp(20px,28px,4vw)] text-black-97", children: description }),
    /* @__PURE__ */ jsx("div", { className: "flex-1" }),
    /* @__PURE__ */ jsx(PGLinkButton, { btnText: "View Case Study", btnLink: href })
  ] });
}
function ShowCaseImage({
  lightImage,
  darkImage
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "w-full rounded-[40px] shadow-[0px_4px_4px_0px_#00000040] block dark:hidden hover:shadow-[0px_0px_8px_0px_var(--pg-primary)]",
        src: lightImage
      }
    ),
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "w-full rounded-[40px] shadow-[0px_4px_4px_0px_#00000040] hidden dark:block hover:shadow-[0px_0px_8px_0px_var(--pg-primary)]",
        src: darkImage
      }
    )
  ] });
}
function meta$1({}) {
  return [{
    title: "Prinsa Ghimire"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Portfolio, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const showcase = withComponentProps(function Showcase2() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx(Outlet, {})
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: showcase
}, Symbol.toStringTag, { value: "Module" }));
const artsyIntro = "/assets/artsy-intro-p3aLkNVM.png";
const artsyContext = "/assets/artsy-context-BqguHNJv.png";
const artsyDesignProcess = "/assets/artsy-design-process-kQwtIaB5.svg";
const sheila = "/assets/artsy-sheila-ehp8nQY6.svg";
const michael = "/assets/artsy-michael-BeUP7n8g.svg";
const artsyDSApproachFull = "/assets/artsy-dsapproach-huge-swwiM0Se.png";
const artsyDSApproachLeft = "/assets/artsy-dsapproach-left-CQhRB01D.svg";
const artsyDSApproachRight = "/assets/artsy-dsapproach-right-wExXSQXZ.svg";
const artsyValidationMain = "/assets/artsy-validation-main-B4Tb7XmF.png";
const artsyValidationTaskOne = "/assets/artsy-validation-task-one-fAyOH_lW.png";
const artsyValidationTaskTwo = "/assets/artsy-validation-task-two-DsoTMSwH.png";
const artsyValidationTaskThree = "/assets/artsy-validation-task-three-BpJm-2_q.png";
const artsyValidationTaskFour = "/assets/artsy-validation-task-four-CAAsn-0A.png";
function ArtsyEcommerce() {
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(PageContent, {})
  ] });
}
function PageContent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[64px] bg-site", children: [
      /* @__PURE__ */ jsx(Intro, {}),
      /* @__PURE__ */ jsx(Context, {}),
      /* @__PURE__ */ jsx(Impact, {}),
      /* @__PURE__ */ jsx(DesignProcess, {}),
      /* @__PURE__ */ jsx(DSApproach, {}),
      /* @__PURE__ */ jsx(Validation, {}),
      /* @__PURE__ */ jsx(Results, {}),
      /* @__PURE__ */ jsx(GetInTouchSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Intro() {
  return /* @__PURE__ */ jsx("div", { className: "bg-primary", children: /* @__PURE__ */ jsxs("div", { className: "w-[calc(100vw-60px)] max-w-[1184px] mt-[32px] mx-auto flex flex-col md:flex-row items-center gap-[32px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center md:w-[50%]", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[clamp(16px,20px,5vw)] tracking-[4px] uppercase text-white my-[16px]", children: "UX Case Study" }),
      /* @__PURE__ */ jsx("div", { className: "text-[clamp(36px,64px,6vw)] leading-[calc(clamp(36px,64px,6vw)*1.4)] font-extrabold text-white", children: "Designing an Art E‑Commerce Experience" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:w-[50%]", children: /* @__PURE__ */ jsx("img", { src: artsyIntro }) })
  ] }) });
}
function Context() {
  return /* @__PURE__ */ jsxs("div", { className: "w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col md:flex-row items-center gap-[32px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[16px] md:w-[50%]", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[clamp(16px,20px,5vw)] tracking-[4px] uppercase text-black-59", children: "Context" }),
      /* @__PURE__ */ jsx("div", { className: "text-[clamp(36px,64px,6vw)] leading-[calc(clamp(36px,64px,6vw)*1.4)] font-extrabold text-black", children: "Bringing Art to the Digital Marketplace" }),
      /* @__PURE__ */ jsx("div", { className: "font-normal text-[20px] leading-[36px] text-black-97", children: "This project, as a part of my HCI coursework, focused on designing an intuitive e‑commerce platform for art discovery and purchasing. The challenge was creating a seamless, user‑friendly experience for both tech‑savvy users and beginners, guided by user research and usability testing." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-[16px] items-stretch justify-between", children: [
        /* @__PURE__ */ jsx(ContextPill, { heading: "My Role", descriptionOne: "Lead Designer" }),
        /* @__PURE__ */ jsx(
          ContextPill,
          {
            heading: "Team",
            descriptionOne: "3 Designers",
            descriptionTwo: "1 Project Manager"
          }
        ),
        /* @__PURE__ */ jsx(ContextPill, { heading: "Time", descriptionOne: "4 Months" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:w-[50%]", children: /* @__PURE__ */ jsx("img", { src: artsyContext }) })
  ] });
}
function Impact() {
  return /* @__PURE__ */ jsxs("div", { className: "w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col md:flex-row-reverse items-center gap-[32px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[16px] md:w-[50%]", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[clamp(16px,20px,5vw)] tracking-[4px] uppercase text-black-59", children: "Context" }),
      /* @__PURE__ */ jsx("div", { className: "text-[clamp(36px,64px,6vw)] leading-[calc(clamp(36px,64px,6vw)*1.4)] font-extrabold text-black", children: "My Impact" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col rounded-[16px] bg-background p-[32px] gap-[16px] font-normal text-[20px] leading-[36px]", children: [
        /* @__PURE__ */ jsx(
          ImpactParagraph,
          {
            heading: "Led Design Strategy:",
            description: "As Lead Designer, I set the vision and implemented Ant Design, ensuring a scalable, consistent, and efficient user experience."
          }
        ),
        /* @__PURE__ */ jsx(
          ImpactParagraph,
          {
            heading: "Drove Usability Testing:",
            description: "Conducted over half of the tests, extracted key insights, and led refinements that improved task success and reduced friction."
          }
        ),
        /* @__PURE__ */ jsx(
          ImpactParagraph,
          {
            heading: "Executed & Delivered Impact:",
            description: "Mapped user journeys, optimized workflows, and visualized findings, turning research into actionable design improvements that enhanced engagement and conversions."
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:w-[50%]", children: /* @__PURE__ */ jsx("img", { src: artsyContext }) })
  ] });
}
function ContextPill({
  heading,
  descriptionOne,
  descriptionTwo = ""
}) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-[8px] py-[16px] px-[24px]", children: [
    /* @__PURE__ */ jsx("div", { className: "font-bold text-[20px] leading-[1.5] tracking-[1] text-black", children: heading }),
    /* @__PURE__ */ jsx("div", { className: "text-[20px] leading-[1.5] tracking-[1] text-black-97", children: descriptionOne }),
    /* @__PURE__ */ jsx("div", { className: "text-[20px] leading-[1.5] tracking-[1] text-black-97", children: descriptionTwo })
  ] });
}
function ImpactParagraph({
  heading,
  description
}) {
  return /* @__PURE__ */ jsxs("p", { className: "text-black-97", children: [
    /* @__PURE__ */ jsx("span", { className: "font-bold text-[20px] tracking-[1px] text-black-cc", children: heading }),
    /* @__PURE__ */ jsx("br", {}),
    description
  ] });
}
function DesignProcess() {
  const characters = [
    {
      name: "Sheila Downy",
      age: 32,
      profession: "Software Engineer",
      avatar: sheila,
      bio: "Sheila has a solid understanding of the art market and is familiar with the types of artwork available in the platforms. She wants to find something that matches her style and preferences.",
      shortTermGoal: "Find artwork that fit her aesthetic and budget.",
      longTermGoal: "Build a meaningful and diverse art collection that reflects her taste and supports emerging artists.",
      needs: [
        "Intuitive e‑commerce platform to browse and buy artworks.",
        "She needs clear pricing, artist background information, and verified authenticity to ensure confidence in her purchase."
      ]
    },
    {
      name: "Michael Adrian",
      age: 25,
      profession: "Artist",
      avatar: michael,
      bio: "Michael is a talented artist struggling with online marketing and e‑commerce tools. He seeks broader visibility for his work but lacks the technical skills to promote it effectively.",
      shortTermGoal: "Increase sales and visibility on the platform.",
      longTermGoal: "Become a financially stable full‑time artist with a loyal customer base.",
      needs: [
        "Easy‑to‑use tools for promoting and selling artwork.",
        "A platform that boosts visibility without requiring advanced technical skills."
      ]
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col items-start gap-[32px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[16px]", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[clamp(16px,20px,5vw)] tracking-[4px] uppercase text-black-59", children: "Context" }),
      /* @__PURE__ */ jsx("div", { className: "text-[clamp(36px,64px,6vw)] leading-[calc(clamp(36px,64px,6vw)*1.4)] font-extrabold text-black", children: "Understanding the Users" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[32px] md:flex-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[16px] md:w-[50%]", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[20px] leading-[36px] text-black-97", children: "My approach began with understanding the two primary user groups: Buyers and Artists." }),
        /* @__PURE__ */ jsxs("p", { className: "text-[20px] leading-[36px] text-black-97", children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold tracking-[1px] text-black-cc", children: "Buyers" }),
          " needed a smooth browsing experience, filtering options to find relevant artwork, and a hassle‑free checkout process."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-[20px] leading-[36px] text-black-97", children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold tracking-[1px] text-black-cc", children: "Artists" }),
          " required a profile that highlighted their work and facilitated engagement through feedback and recommendations."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:w-[50%]", children: /* @__PURE__ */ jsx("img", { src: artsyDesignProcess }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row gap-[32px]", children: characters.map(function(data, idx) {
      return /* @__PURE__ */ jsx(Character, { data }, idx);
    }) })
  ] });
}
function Character({
  data
}) {
  return /* @__PURE__ */ jsx("div", { className: "bg-background rounded-[16px] p-[16px]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[16px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-[16px]", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-[30%]", children: /* @__PURE__ */ jsx("img", { src: data.avatar }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-[70%] text-[clamp(12px,20px,4vw)] leading-[clamp(24px,40px,8vw)]", children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold tracking-[1px] text-black-cc", children: data.name }),
        /* @__PURE__ */ jsxs("p", { className: "text-black-cc", children: [
          "Age: ",
          data.age
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-black-cc", children: [
          "Profession: ",
          data.profession
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-[20px] leading-[36px] text-black-97", children: data.bio }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "font-bold tracking-[1px] text-black-cc text-[20px] leading-[36px]", children: "Goals" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-none text-[20px] leading-[36px] text-black-97", children: [
        /* @__PURE__ */ jsx("li", { className: "list-disc list-inside", children: data.shortTermGoal }),
        /* @__PURE__ */ jsx("li", { className: "list-disc list-inside", children: data.longTermGoal })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "font-bold tracking-[1px] text-black-cc text-[20px] leading-[36px]", children: "Needs" }),
      /* @__PURE__ */ jsx("ul", { className: "list-none text-[20px] leading-[36px] text-black-97", children: data.needs.map((need, idx) => /* @__PURE__ */ jsx("li", { className: "list-disc list-inside", children: need }, idx)) })
    ] })
  ] }) });
}
function DSApproach() {
  return /* @__PURE__ */ jsxs("div", { className: "w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col items-center justify-center gap-[32px]", children: [
    /* @__PURE__ */ jsx("div", { className: "text-[clamp(16px,20px,5vw)] tracking-[4px] uppercase text-black-59", children: "Design Process" }),
    /* @__PURE__ */ jsx("div", { className: "text-[clamp(36px,64px,6vw)] leading-[calc(clamp(36px,64px,6vw)*1.4)] font-extrabold text-black max-w-[750px] text-center", children: "Standardizing the design (Design System Approach)" }),
    /* @__PURE__ */ jsxs("div", { className: "text-[20px] leading-[36px] max-w-[600px] text-center text-black-97", children: [
      "To create a structured and consistent experience, I leveraged the",
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-bold tracking-[1px] text-black-cc", children: "Ant Design System" }),
      " to build reusable UI components, ensuring scalability and visual coherence. This approach streamlined development and maintained uniformity across different sections of the platform."
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "hidden md:block w-full rounded-[16px] p-[16px] bg-[#ffffffa0]",
        src: artsyDSApproachFull
      }
    ),
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "md:hidden w-full rounded-[16px_0px_0px_16px] p-[16px_0px_0px_16px] bg-[#ffffffa0]",
        src: artsyDSApproachLeft
      }
    ),
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "md:hidden w-full rounded-[0px_16px_16px_0px] p-[0px_16px_16px_0px] bg-[#ffffffa0]",
        src: artsyDSApproachRight
      }
    )
  ] });
}
function Validation() {
  const validationData = [
    {
      image: artsyValidationTaskOne,
      heading: "Task 1: Sign Up & Login",
      successRate: "88%",
      findings: 'While most users found the process intuitive, one participant struggled to differentiate between "Sign Up" and "Sign In."',
      solution: "Adjusted button hierarchy and labeling for clarity."
    },
    {
      image: artsyValidationTaskTwo,
      heading: "Task 2: Filtering Artwork",
      successRate: "High improvement; users cut completion time by nearly 50% on second attempts.",
      findings: 'One user misread the "A‑Z" price filter as alphabetical sorting.',
      solution: "Replaced text with currency symbols for clarity."
    },
    {
      image: artsyValidationTaskThree,
      heading: "Task 3: Check Out Process Flow",
      successRate: "80% met the efficiency benchmark.",
      findings: "Users completed the task but required more clicks than expected due to unclear prototype triggers.",
      solution: "Refined the prototype to better simulate real‑world interactions, reducing unnecessary clicks."
    },
    {
      image: artsyValidationTaskFour,
      heading: "Task 4: Artist Profile & Feedback",
      successRate: "100%",
      findings: "Some users struggled to locate the recommendation and feedback section.",
      solution: "Enhanced visual hierarchy using contrast and card‑based UI to make key elements stand out."
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col items-center justify-center gap-[32px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-[32px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[16px] md:max-w-[50%]", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[clamp(16px,20px,5vw)] tracking-[4px] uppercase text-black-59", children: "validation" }),
        /* @__PURE__ */ jsx("div", { className: "text-[clamp(24px,48px,6vw)] leading-[calc(clamp(24px,48px,6vw)*1.4)] font-extrabold text-black", children: "Usability Testing and Insights" }),
        /* @__PURE__ */ jsxs("div", { className: "text-[20px] leading-[36px] text-black-97", children: [
          "With the initial prototype in place, we conducted usability tests with five participants. Sessions were held both in‑person and online, using a",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-bold tracking-[1px] text-black-cc", children: "Think Aloud methodology" }),
          " ",
          "to capture user feedback in real‑time."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-[20px] leading-[36px] text-black-97", children: [
          "The testing focused on four critical tasks and evaluated their impact on the usability goals of",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-bold tracking-[1px] text-black-cc", children: "Memorability, Learnability, and Efficiency" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:max-w-[50%]", children: /* @__PURE__ */ jsx("img", { src: artsyValidationMain }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row gap-[32px] text-[20px] leading-[36px]", children: validationData.slice(0, 2).map(function(data, idx) {
      return /* @__PURE__ */ jsx(ValidationTask, { data }, idx);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row gap-[32px] text-[20px] leading-[36px]", children: validationData.slice(2).map(function(data, idx) {
      return /* @__PURE__ */ jsx(ValidationTask, { data }, idx);
    }) })
  ] });
}
function ValidationTask({
  data
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[16px] rounded-[16px] bg-background p-[16px] w-full md:max-w-[50%] text-black-97", children: [
    /* @__PURE__ */ jsx("img", { src: data.image }),
    /* @__PURE__ */ jsx("p", { className: "font-bold tracking-[1px] text-black", children: data.heading }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsxs("span", { className: "font-bold tracking-[1px] text-black-cc", children: [
        "Success Rate:",
        " "
      ] }),
      data.successRate
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsxs("span", { className: "font-bold tracking-[1px] text-black-cc", children: [
        "Findings:",
        " "
      ] }),
      data.findings
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsxs("span", { className: "font-bold tracking-[1px] text-black-cc", children: [
        "Solution:",
        " "
      ] }),
      data.solution
    ] })
  ] });
}
function Results() {
  const resultsData = [
    {
      heading: "Key Takeaways & Impact",
      details: [
        {
          subHeading: "Increased Learnability:",
          description: "Users completed repeat tasks 50% faster after their initial attempt indicating good learnability of the platform"
        },
        {
          subHeading: "Enhanced Visual Hierarchy:",
          description: "Small UI refinements, such as clearer labels and structured layouts, significantly improved usability."
        },
        {
          subHeading: "Reduced Interaction Friction:",
          description: "Checkout optimizations decreased unnecessary clicks, making the purchase process smoother."
        }
      ]
    },
    {
      heading: "What I Learned",
      details: [
        {
          subHeading: "The power of a design system:",
          description: "Using Ant Design not only saved time but also ensured consistency across the platform."
        },
        {
          subHeading: "The importance of user validation:",
          description: "Usability tests revealed insights that significantly improved the final product."
        },
        {
          subHeading: "Iterate, iterate, iterate:",
          description: "Every round of feedback led to refinements that made the platform more intuitive."
        }
      ]
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col items-start justify-center gap-[32px]", children: [
    /* @__PURE__ */ jsx("div", { className: "text-[clamp(16px,20px,5vw)] tracking-[4px] uppercase text-black-59", children: "Results" }),
    /* @__PURE__ */ jsx("div", { className: "text-[clamp(36px,64px,6vw)] leading-[calc(clamp(36px,64px,6vw)*1.4)] font-extrabold text-black", children: "Enhancing the Art Buying Experience" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row gap-[32px]", children: resultsData.map(function(data, idx) {
      return /* @__PURE__ */ jsx(ResultSection, { data }, idx);
    }) })
  ] });
}
function ResultSection({
  data
}) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-background rounded-[16px] p-[16px] flex flex-col gap-[32px] text-[20px] leading-[36px] w-full md:max-w-[50%]", children: [
    /* @__PURE__ */ jsx("p", { className: "font-bold tracking-[1px] text-black-cc", children: data.heading }),
    data.details.map(function(det, idx) {
      return /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { className: "font-bold tracking-[1px] text-black-cc", children: det.subHeading }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-black-97", children: det.description })
      ] }, idx);
    })
  ] });
}
function GetInTouchSection() {
  return /* @__PURE__ */ jsx("div", { className: "w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col items-start justify-center gap-[32px]", children: /* @__PURE__ */ jsx(GetInTouch, {}) });
}
function meta({}) {
  return [{
    title: "Prinsa Ghimire"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const artsyEcommerce = withComponentProps(function Home2() {
  return /* @__PURE__ */ jsx(ArtsyEcommerce, {});
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: artsyEcommerce,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DLAkNw-B.js", "imports": ["/assets/chunk-DQRVZFIR-BDxfa0dZ.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-C7aDW-f0.js", "imports": ["/assets/chunk-DQRVZFIR-BDxfa0dZ.js", "/assets/with-props-Dkufk5_y.js"], "css": ["/assets/root-CtdYZL_d.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-qTydJdfj.js", "imports": ["/assets/with-props-Dkufk5_y.js", "/assets/chunk-DQRVZFIR-BDxfa0dZ.js", "/assets/get-in-touch-BQ231OcM.js"], "css": ["/assets/home-DY0sx50T.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/showcase": { "id": "routes/showcase", "parentId": "root", "path": "/showcase", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/showcase-16FeDxv7.js", "imports": ["/assets/with-props-Dkufk5_y.js", "/assets/chunk-DQRVZFIR-BDxfa0dZ.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/showcase/artsy-ecommerce": { "id": "routes/showcase/artsy-ecommerce", "parentId": "routes/showcase", "path": "artsy-ecommerce", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/artsy-ecommerce-7mpm6S9j.js", "imports": ["/assets/with-props-Dkufk5_y.js", "/assets/chunk-DQRVZFIR-BDxfa0dZ.js", "/assets/get-in-touch-BQ231OcM.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-5b026f4c.js", "version": "5b026f4c", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/showcase": {
    id: "routes/showcase",
    parentId: "root",
    path: "/showcase",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/showcase/artsy-ecommerce": {
    id: "routes/showcase/artsy-ecommerce",
    parentId: "routes/showcase",
    path: "artsy-ecommerce",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
