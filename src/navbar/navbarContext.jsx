import { createContext, useContext, useMemo } from "react";
import { ReactNode } from "react";
import { useLocation } from "react-router";

export const NavbarContext = createContext();

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
  }, [location.pathname]);

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
