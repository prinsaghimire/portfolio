import { Portfolio } from "./portfolio/portfolio";
import { ArtsyEcommerce } from "./artsy-ecommerce/artsy-ecommerce";
import { TicketingSystem } from "./ticketing-system/ticketing-system";
import { Thesis } from './thesis/thesis';
import { PageContext } from "./pageContext";

export default function App({ page }) {
  const backgroundClass = page === "home" ? "bg-site" : "bg-primary";

  const component = () => {
    switch (page) {
      case "home":
        return <Portfolio />;
      case "artsy-ecommerce":
        return <ArtsyEcommerce />;
      case "ticketing-system":
        return <TicketingSystem />;
      case "thesis":
        return <Thesis />
      default:
        return <Portfolio />;
    }
  };

  return (
    <div
      className={`${backgroundClass} transition-colors duration-300 font-sfpro text-[16px]`}
    >
      <PageContext value={page}>{component()}</PageContext>
    </div>
  );
}
