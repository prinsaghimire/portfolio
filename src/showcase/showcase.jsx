import artsyEcommerceLight from "./work_3.png";
import artsyEcommerceDark from "./work_3_dark.png";
import gamificationLight from "./work_1.png";
import gamificationDark from "./work_1_dark.png";
import ticketingLight from './ticketing_showcase_light.png';
import ticketingDark from './ticketing_showcase_dark.png';
import { PGLinkButton } from "../button/button";

const showcaseData = [
  {
    key: "artsy",
    href: "./artsy-ecommerce",
    slug: "UI/UX Case Study",
    lightImage: artsyEcommerceLight,
    darkImage: artsyEcommerceDark,
    description: "Designing an Art E‑Commerce Website Experience",
  },
  {
    key: "gamification",
    href: "https://www.behance.net/gallery/210114643/Gamification-of-a-Coffee-Ordering-App",
    slug: "UI/UX Case Study",
    lightImage: gamificationLight,
    darkImage: gamificationDark,
    description: "Gamifying a Coffee Ordering App To increase user engagement",
  },
  {
    key: "ticketing",
    href: "./ticketing-system",
    slug: "UI DESIGN CASE STUDY",
    lightImage: ticketingLight,
    darkImage: ticketingDark,
    description: "Reimagining Tech Support: A Ticketing System for ETSU ITS",
  },
];

const getHeadline = (headline) => {
  switch (headline) {
    case "my_latest_works":
      return (
        <>
          My Latest <span className="text-primary">Works</span>
        </>
      );
    case "my_other_works":
      return (
        <>
          My Other <span className="text-primary">Works</span>
        </>
      );
    default:
      return <></>;
  }
};

export function Showcase({ headline, keysToInclude }) {
  const filteredData = keysToInclude.map(key => showcaseData.find(item => item.key === key)).filter(Boolean);

  return (
    <div className="w-full my-[40px] flex flex-col gap-[32px]">
      <div className="w-full font-sfpro-medium font-[500] text-[32px] leading-[44.8px] text-black">
        {getHeadline(headline)}
      </div>
      <div className="flex justify-between flex-col sm:flex-row flex-wrap gap-[32px]">
        {filteredData.map(function (data, idx) {
          return (
            <ShowCasePiece
              key={idx}
              href={data.href}
              slug={data.slug}
              lightImage={data.lightImage}
              darkImage={data.darkImage}
              description={data.description}
            />
          );
        })}
      </div>
    </div>
  );
}

function ShowCasePiece({ href, slug, lightImage, darkImage, description }) {
  return (
    <div className="w-full sm:max-w-[calc(50%-16px)] flex flex-col">
      <a href={href} target="_blank">
        <ShowCaseImage lightImage={lightImage} darkImage={darkImage} />
      </a>

      <div className="my-[16px] my-0 uppercase tracking-[2px] text-black-59 text-[clamp(12px,16px,2vw)]">
        {slug}
      </div>
      <div className="text-[clamp(20px,28px,4vw)] text-black-97">
        {description}
      </div>
      <div className="flex-1"></div>
      <PGLinkButton btnText={"View Case Study"} btnLink={href} />
    </div>
  );
}

function ShowCaseImage({ lightImage, darkImage }) {
  return (
    <>
      <img
        className="w-full rounded-[40px] shadow-[0px_4px_4px_0px_#00000040] block dark:hidden hover:shadow-[0px_0px_8px_0px_var(--pg-primary)]"
        src={lightImage}
      />
      <img
        className="w-full rounded-[40px] shadow-[0px_4px_4px_0px_#00000040] hidden dark:block hover:shadow-[0px_0px_8px_0px_var(--pg-primary)]"
        src={darkImage}
      />
    </>
  );
}
