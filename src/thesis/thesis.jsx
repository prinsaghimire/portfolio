import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import GetInTouch from "../get-in-touch/get-in-touch";
import introImage from "./intro.png";
import contextImage from "./context.png";
import { ResultSection } from "../results/results";
import timelineImage from './timeline.png';
import { Showcase } from "../showcase/showcase";
import Spacer from "../spacer/spacer";

export function Thesis() {
  return (
    <main>
      <Navbar />
      <PageContent />
    </main>
  )
}

function PageContent() {
  return (
    <>
      <div className="flex flex-col gap-[64px] bg-site">
        <Intro />
        <Context />
        <Timeline />
        <GetInTouch />
        <div className="w-[calc(100vw-60px)] max-w-[1184px] mt-[32px] mx-auto flex flex-col md:flex-row items-center gap-[32px]">
          <Showcase
            keysToInclude={["artsy", "ticketing"]}
            headline={"my_other_works"}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

function Intro() {
  return (
    <div className="bg-primary">
      <div className="w-[calc(100vw-60px)] max-w-[1184px] mt-[32px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-[64px]">
        <div className="flex flex-col justify-center md:max-w-[50%]">
          <div className="text-slug tracking-[4px] uppercase text-white my-[16px]">
            ONGOING THESIS STUDY
          </div>
          <div className="text-[clamp(36px,64px,6vw)] leading-[calc(clamp(36px,64px,6vw)*1.4)] font-sfpro-bold text-white">
            Perceptions and Behaviors in Gameplay 
          </div>
        </div>
        <div className="w-full md:max-w-[35%]">
          <img src={introImage} className="w-full" />
        </div>
      </div>
      <Spacer height={"lg"} />
    </div>
  );
}

function Context() {
  return (
    <div className="w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col flex-col-reverse md:flex-row items-center gap-[32px]">
      <div className="w-full md:w-[50%]">
        <img src={contextImage} className="w-full" />
      </div>
      <div className="flex flex-col gap-[16px] md:w-[50%] flex-1">
        <div className="text-slug tracking-[4px] uppercase text-black-59">
          Context
        </div>
        <div className="text-subheading leading-subheading font-extrabold text-black">
          {"A Qualitative Study of Self\u2011Reported vs. Observed Engagement Through the Hexad Scale"}
        </div>
        <div className="font-normal text-[20px] leading-[36px] text-black-97">
          {
            "The study explores the mismatch between users’ self\u2011identified Hexad player types and their actual behavior in immersive gamified environments. Although the Hexad Scale is widely used to categorize motivation, research reveals inconsistencies between reported types and real\u2011world engagement. By comparing self\u2011assessments with observed gameplay, the research aims to evaluate the scale’s reliability and its effectiveness in informing gamified learning design."
          }
        </div>
        <div className="flex flex-col md:flex-row gap-[16px] items-stretch justify-between">
          <ContextPill
            heading={"My Role"}
            descriptionOne={"Researcher/Analyst"}
          />
          <ContextPill
            heading={"Team"}
            descriptionOne={"1 Researcher"}
            descriptionTwo={"1 Supervisor"}
          />
          <ContextPill heading={"Time"} descriptionOne={"Ongoing Thesis"} />
        </div>
      </div>
    </div>
  );
}

function ContextPill({ heading, descriptionOne, descriptionTwo = "" }) {
  return (
    <div className="bg-background rounded-[8px] py-[16px] px-[24px]">
      <div className="font-bold text-[20px] leading-[1.5] tracking-[1] text-black">
        {heading}
      </div>
      <div className="text-[20px] leading-[1.5] tracking-[1] text-black-97">
        {descriptionOne}
      </div>
      <div className="text-[20px] leading-[1.5] tracking-[1] text-black-97">
        {descriptionTwo}
      </div>
    </div>
  );
}

function Timeline() {
  const timelineData = {
    heading: "",
    details: [
      {
        subHeading: " Participant Onboarding and Self\u2011Assessment:",
        description: "Participants are recruited via social media and complete a Qualtrics questionnaire, including the Hexad Scale to determine player type and session eligibility.",
      },
      {
        subHeading: "Gameplay Observation and Interviews:",
        description: "In 1.5\u20112 hour sessions (in-person or via Zoom), participants play a game of their choice while thinking aloud and responding to semi-structured interview questions. Sessions are recorded and transcribed for analysis.",
      },
      {
        subHeading: "Thematic Analysis and Validation:",
        description: "Qualitative data is coded through open and focused coding. Themes are refined through constant comparison and validated with participants via member-checking.",
      }
    ]
  }

  return (
    <div className="w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col items-start justify-center gap-[32px]">

      <div className="flex flex-col md:flex-row gap-[32px] items-center">

        <div className="flex flex-col gap-[32px] w-full md:max-w-[50%]">
          <div className="text-slug tracking-[4px] uppercase text-black-59">
            {"CURRENT TIMELINE"}
          </div>
          <div className="text-subheading leading-subheading font-extrabold text-black">
            {"Work In Progress"}
          </div>
          <div className="bg-background rounded-[16px] p-[32px] flex flex-col gap-[32px] text-[20px] leading-[36px]">
            {timelineData.details.map(function (det, idx) {
              return (
                <p key={idx}>
                  <span className="font-bold tracking-[1px] text-black-cc">
                    {det.subHeading}
                  </span>
                  <br />
                  <span className="text-black-97">{det.description}</span>
                </p>
              );
            })}
          </div>
        </div>
        <div className="w-full md:max-w-[50%]">
          <img src={timelineImage} className="w-full" />
        </div>
      </div>
    </div>
  )
}
