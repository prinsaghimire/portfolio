import { createContext, useContext, useMemo } from "react";
import { ReactNode } from "react";
import { PageContext } from "../pageContext";

export const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const page = useContext(PageContext);

  const navbarClasses = useMemo(() => {
    const path = page;

    if (path === "home") {
      return {
        lightHamburger: "white",
        darkHamburger: "white",
        lightBg: "primary",
        darkBg: "primary",
        lightText: "white",
        darkText: "white",
      };
    } else {
      return {
        lightHamburger: "black",
        darkHamburger: "black",
        lightBg: "background",
        darkBg: "background",
        lightText: "primary",
        darkText: "black",
      };
    }
  }, [page]);

  return (
    <NavbarContext.Provider value={navbarClasses}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useRouteContext must be used within a RouteProvider");
  }
  return context;
};
