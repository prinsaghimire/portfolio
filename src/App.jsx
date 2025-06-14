import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Portfolio } from './portfolio/portfolio'
import { ArtsyEcommerce } from './artsy-ecommerce/artsy-ecommerce'

export default function App() {

  const location = useLocation();

  const backgroundClass =
    location.pathname === "/showcase/artsy-ecommerce"
      ? "bg-primary"
      : "bg-site";

  return (
    <div className={`${backgroundClass} transition-colors duration-300 font-sfpro text-[16px]`}>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/showcase/artsy-ecommerce" element={<ArtsyEcommerce />} />
      </Routes>
    </div>
  )
}
