import { Portfolio } from './portfolio/portfolio'
import { ArtsyEcommerce } from './artsy-ecommerce/artsy-ecommerce'
import { useContext } from 'react';
import { PageContext } from './pageContext'

export default function App({ page }) {
  const backgroundClass =
    page === "artsy-ecommerce"
      ? "bg-primary"
      : "bg-site";

  const component = () => {
    switch (page) {
      case 'home':
        return <Portfolio />;
      case 'artsy-ecommerce':
        return <ArtsyEcommerce />
      default:
        return <Portfolio />;
    }
  };

  return (
    <div className={`${backgroundClass} transition-colors duration-300 font-sfpro text-[16px]`}>
      <PageContext value={page} >
        { component() }
      </PageContext>
    </div>
  )
}
