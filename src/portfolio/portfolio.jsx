import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import GetInTouch from "../get-in-touch/get-in-touch";
import { PGLinkButton } from "../button/button";
import "./portfolio.css";
import profile_image from "./profile.png";
import prinsa_resume from "./PRINSA_GHIMIRE_RESUME.pdf";
import figma from "./figma.png";
import html from "./html.png";
import css from "./css.png";
import illustrator from "./illustrator.png";
import photoshop from "./photoshop.png";
import xd from "./xd.png";
import artsy_ecommerce_light from "./work_3.png";
import artsy_ecommerce_dark from "./work_3_dark.png";
import gamification_light from "./work_1.png";
import gamification_dark from "./work_1_dark.png";
import { Link } from "react-router";

export function Portfolio() {
  return (
    <main>
      <Navbar />
      <PageContent />
    </main>
  );
}

function PageContent() {
  return (
    <>
      <div className="w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col items-center gap-[32px]">
        <Intro />
        <Work />
        <Skill />
        <Showcase />
        <GetInTouch />
      </div>
      <Footer />
    </>
  );
}

function Intro() {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-[32px]">
      <IntroText />
      <IntroPicture />
    </div>
  );
}

function IntroText() {
  return (
    <div className="w-full max-w-[100%] sm:max-w-[50%] min-[700px]:max-w-[75%]">
      <h1 className="text-14 leading-14 sm:text-normal sm:leading-normal font-[500] text-black font-sfpro-medium">
        I craft scalable
      </h1>

      <h1 className="text-14 leading-14 sm:text-normal sm:leading-normal font-[500] text-black font-sfpro-medium">
        UI/UX solutions for
      </h1>

      <div className="relative overflow-hidden h-[var(--leading-14)] leading-[var(--leading-14)] sm:h-[var(--leading-normal)] sm:leading-[var(--leading-normal)]">
        <h1 className="animated-text text-primary absolute left-0 top-0 transform-[translateY(100%)] animate-[slide-up_8s_linear_infinite] text-14 leading-14 sm:text-normal sm:leading-normal tracking-[1%] font-sfpro-medium font-[500]">
          Startups
        </h1>

        <h1 className="animated-text text-primary absolute left-0 top-0 transform-[translateY(100%)] animate-[slide-up_8s_linear_infinite] text-14 leading-14 sm:text-normal sm:leading-normal tracking-[1%] font-sfpro-medium font-[500]">
          Enterprises
        </h1>

        <h1 className="animated-text text-primary absolute left-0 top-0 transform-[translateY(100%)] animate-[slide-up_8s_linear_infinite] text-14 leading-14 sm:text-normal sm:leading-normal tracking-[1%] font-sfpro-medium font-[500]">
          Users
        </h1>

        <h1 className="animated-text text-primary absolute left-0 top-0 transform-[translateY(100%)] animate-[slide-up_8s_linear_infinite] text-14 leading-14 sm:text-normal sm:leading-normal tracking-[1%] font-sfpro-medium font-[500]">
          Products
        </h1>
      </div>
      <PGLinkButton
        btnText={"Get In Touch"}
        btnLink={"mailto:prinsaghimire23@gmail.com"}
      />
    </div>
  );
}

function IntroPicture() {
  return (
    <div className="w-full max-w-[100%] sm:max-w-[50%] min-[700px]:max-w-[25%]">
      <img
        className="w-full object-cover aspect-square rounded-[16px] shadow-[0px_0px_10px_gray] bg-[#ffffffa0]"
        src={profile_image}
      />
    </div>
  );
}

function Work() {
  return (
    <div className="my-[40px] flex flex-col sm:flex-row gap-[32px] justify-between items-center animate-[fade-in_2s_ease-out_1]">
      <div className="w-full sm:w-[50%] sm:max-w-[50%] font-sfpro-medium text-[32px] font-[500] leading-[44.8px] align-left text-black pr-[32px]">
        Hi! I’m Prinsa, a designer with 4+ years of experience designing{" "}
        <span className="text-primary">user-centric solutions for</span> diverse
        industries.
      </div>
      <div className="w-full sm:w-[50%] sm:max-w-[50%] bg-background rounded-[24px] p-[32px]">
        <div className="font-[400] text-[20px] leading-[36px] text-black-97">
          My journey includes roles at startups and global teams, specializing
          in designing wireframes, user flows, and accessible prototypes.
          Currently pursuing a Master’s in Information Systems at ETSU, I’m
          passionate about mentoring designers and sharing insights on
          accessibility and design systems.
        </div>
        <PGLinkButton
          btnLink={prinsa_resume}
          btnText={"Download Resume"}
          download="PRINSA_GHIMIRE_RESUME"
        />
      </div>
    </div>
  );
}

function Skill() {
  return (
    <div className="w-full my-[40px] flex flex-col sm:flex-row gap-[32px] justify-between items-center">
      <div className="w-full sm:w-[50%] sm:max-w-[50%] font-sfpro-medium font-[500] text-[32px] leading-[44.8px] text-black">
        Things <span className="text-primary">I am good at</span> but not
        limited to:
      </div>
      <div className="w-full sm:w-[50%] sm:max-w-[50%] bg-background flex flex-wrap rounded-[24px] justify-around items-center h-[358px] overflow-hidden">
        <div className="animate-[scroll-up_10s_linear_infinite]">
          <SkillIcon icon={figma} />
          <SkillIcon icon={photoshop} />
          <SkillIcon icon={css} />
          <SkillIcon icon={figma} />
          <SkillIcon icon={photoshop} />
          <SkillIcon icon={css} />
        </div>
        <div className="animate-[scroll-down_10s_linear_infinite]">
          <SkillIcon icon={illustrator} />
          <SkillIcon icon={html} />
          <SkillIcon icon={xd} />
          <SkillIcon icon={illustrator} />
          <SkillIcon icon={html} />
          <SkillIcon icon={xd} />
        </div>
      </div>
    </div>
  );
}

function SkillIcon({ icon }) {
  return (
    <div className="align-center flex justify-center items-center mt-[30px] my-0">
      <img src={icon} />
    </div>
  );
}

function Showcase() {
  const showCaseData = [
    {
      href: "/showcase/artsy-ecommerce",
      slug: "UI/UX Case Study",
      lightImage: artsy_ecommerce_light,
      darkImage: artsy_ecommerce_dark,
      description: "Designing an Art E‑Commerce Website",
    },
    {
      href: "https://www.behance.net/gallery/210114643/Gamification-of-a-Coffee-Ordering-App",
      slug: "UI/UX Case Study",
      lightImage: gamification_light,
      darkImage: gamification_dark,
      description:
        "Gamifying a Coffee Ordering App To increase user engagement",
    },
  ];
  return (
    <div className="w-full my-[40px] flex flex-col gap-[32px]">
      <div className="w-full font-sfpro-medium font-[500] text-[32px] leading-[44.8px] text-black">
        Latest <span className="text-primary">work.</span>
      </div>
      <div className="flex justify-between flex-wrap gap-[32px]">
        {showCaseData.map(function (data, idx) {
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

function ShowCasePiece({
  href,
  slug,
  lightImage,
  darkImage,
  description,
}) {
  return (
    <div className="w-full max-w-[calc(50%-16px)] flex flex-col">
      <Link to={href}>
        <ShowCaseImage lightImage={lightImage} darkImage={darkImage} />
      </Link>

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

function ShowCaseImage({
  lightImage,
  darkImage,
}) {
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
