import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import { Results } from "../results/results";
import { Showcase } from "../showcase/showcase";
import Spacer from "../spacer/spacer";
import GetInTouch from "../get-in-touch/get-in-touch";
import ticketingIntro from "./intro.png";
import contextImage from "./context.png";
import impactImageLight from "./impact_light.png";
import impactImageDark from "./impact_dark.png";
import dpFullLight from "./dp_full_light.png";
import dpFullDark from "./dp_full_dark.png";
import dpMbLight from "./dp_mb_light.png";
import dpMbDark from "./dp_mb_dark.png";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import designChallengeLight from "./design_challenge_light.png";
import designChallengeDark from "./design_challenge_dark.png";
import dsOneLightLeft from "./ds_one_light_left.png";
import dsOneLightRight from "./ds_one_light_right.png";
import dsOneDarkLeft from "./ds_one_dark_left.png";
import dsOneDarkRight from "./ds_one_dark_right.png";
import dsTwoLight from "./ds_two_light.png";
import dsTwoDark from "./ds_two_dark.png";
import dsOneFullLight from "./ds_full_one_light.png";
import dsOneFullDark from "./ds_full_one_dark.png";
import dsTwoFullLight from "./ds_two_full_light.png";
import dsTwoFullDark from "./ds_two_full_dark.png";
import dsThreeFullLight from "./ds_three_full_light.png";
import dsThreeFullDark from "./ds_three_full_dark.png";
import dsThreeLight from "./ds_three_light.png";
import dsThreeDark from "./ds_three_dark.png";

export function TicketingSystem() {
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
      <div className="flex flex-col gap-[64px] bg-site">
        <Intro />
        <Context />
        <Impact />
        <DesignProcess />
        <DSApproach />
        <DesignChallenge />
        <DesignSolution />
        <Result />
        <GetInTouch />
        <div className="w-[calc(100vw-60px)] max-w-[1184px] mt-[32px] mx-auto flex flex-col md:flex-row items-center gap-[32px]">
          <Showcase
            keysToInclude={["artsy", "gamification"]}
            headline={"my_other_works"}
          />
        </div>
        <Spacer height={"xs"} />
      </div>
      <Footer />
    </>
  );
}

function Intro() {
  return (
    <div className="bg-primary">
      <div className="w-[calc(100vw-60px)] max-w-[1184px] mt-[32px] mx-auto flex flex-col md:flex-row items-center gap-[32px]">
        <div className="flex flex-col justify-center md:w-[60%]">
          <div className="text-slug tracking-[4px] uppercase text-white my-[16px]">
            UI DESIGN CASE STUDY
          </div>
          <div className="text-[clamp(36px,64px,6vw)] leading-[calc(clamp(36px,64px,6vw)*1.4)] font-sfpro-bold text-white">
            Reimagining Tech Support: A Ticketing System for ETSU ITS
          </div>
        </div>
        <div className="w-full md:w-[40%]">
          <img src={ticketingIntro} className="w-full" />
        </div>
      </div>
    </div>
  );
}

function Context() {
  return (
    <div className="w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col md:flex-row items-center gap-[32px]">
      <div className="w-full md:w-[40%]">
        <img src={contextImage} className="w-full" />
      </div>
      <div className="flex flex-col gap-[16px] md:w-[60%] flex-1">
        <div className="text-slug tracking-[4px] uppercase text-black-59">
          Context
        </div>
        <div className="text-subheading leading-subheading font-extrabold text-black">
          {"Standardizing Service Requests for Campus IT Operations"}
        </div>
        <div className="font-normal text-[20px] leading-[36px] text-black-97">
          {
            "The Information Technology Services (ITS) department at East Tennessee State University (ETSU) initiated this project to address inefficiencies in how service requests were managed.  The goal was to design an internal ticketing system that would streamline the intake, assignment, and resolution of IT service tickets, whether entered manually or triggered automatically by email."
          }
        </div>
        <div className="flex flex-col md:flex-row gap-[16px] items-stretch justify-between">
          <ContextPill
            heading={"My Role"}
            descriptionOne={"UI Designer"}
            descriptionTwo={"HTML/ CSS Developer"}
          />
          <ContextPill
            heading={"Team"}
            descriptionOne={"1 System Admin"}
            descriptionTwo={"2 Designers"}
          />
          <ContextPill heading={"Time"} descriptionOne={"4 Weeks"} />
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

function Impact() {
  return (
    <div className="w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col md:flex-row items-center gap-[32px]">
      <div className="flex flex-col gap-[16px] md:w-[60%]">
        <div className="text-slug tracking-[4px] uppercase text-black-59">
          Context
        </div>
        <div className="text-subheading leading-subheading font-extrabold text-black">
          My Impact
        </div>
        <div className="flex flex-col rounded-[16px] bg-background p-[32px] gap-[16px] font-normal text-[20px] leading-[36px]">
          <ImpactParagraph
            heading={"Simplified Workflows Through Interface Design:"}
            description={
              "Collaborated with the project lead to design a clear, user-friendly interface for easy ticket entry, updates, and delegation resulting in 30% faster ticket handling."
            }
          />
          <ImpactParagraph
            heading={"Implemented Responsive UI Styles:"}
            description={
              "Developed mobile-responsive CSS layouts to ensure the system worked seamlessly on all screen sizes, enabling access across devices and field environments."
            }
          />
          <ImpactParagraph
            heading={"Designed for Clarity and Scalability:"}
            description={
              "Designed a ticket interface with filters for status, priority, and assignee, improving clarity and reducing manual coordination."
            }
          />
        </div>
      </div>
      <div className="w-full md:w-[40%] flex flex-end">
        <AdaptiveImage lightImage={impactImageLight} darkImage={impactImageDark} />
      </div>
    </div>
  );
}

function ImpactParagraph({ heading, description }) {
  return (
    <p className="text-black-97">
      <span className="font-bold text-[20px] tracking-[1px] text-black-cc">
        {heading}
      </span>
      <br />
      {description}
    </p>
  );
}

function DesignProcess() {
  return (
    <div className="w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col items-center justify-center gap-[32px]">
      <div className="text-slug tracking-[4px] uppercase text-black-59">
        Design Process
      </div>
      <div className="text-subheading leading-subheading font-extrabold text-black max-w-[750px] text-center">
        Empathizing with the Users
      </div>
      <div className="text-[20px] leading-[36px] max-w-[600px] text-center text-black-97">
        The ITS team manages service requests across campus, often while
        multitasking or on the go. They needed a centralized system to reduce
        manual effort and streamline how tickets are created, updated, and
        delegated. Through interviews with team members, we identified key user
        needs to reduce mental load and improve efficiency.
      </div>
      <div className="hidden md:block bg-background rounded-[16px]">
        <AdaptiveImage lightImage={dpFullLight} darkImage={dpFullDark} />
      </div>
      <div className="block md:hidden bg-background rounded-[16px]">
        <AdaptiveImage lightImage={dpMbLight} darkImage={dpMbDark} />
      </div>
    </div>
  );
}

function AdaptiveImage({ lightImage, darkImage }) {
  return (
    <>
      <img className="block dark:hidden" src={lightImage} />
      <img className="hidden dark:block" src={darkImage} />
    </>
  );
}

function DSApproach() {
  const approachData = [
    {
      icon: NewspaperIcon,
      headline: "Ticket Management (CRUD)",
      description:
        "Designed a dashboard interface with cards to create, update, resolve, or delete tickets efficiently.",
    },
    {
      icon: PermIdentityOutlinedIcon,
      headline: "Delegation",
      description:
        "Enabled multi-user assignment within each ticket, using roles to ensure clarity and accountability.",
    },
    {
      icon: ComputerOutlinedIcon,
      headline: "Asset & Inventory Management",
      description:
        "Integrated tickets with specific assets like lab computers and printers, and created a searchable, filterable table to track and manage IT equipment.",
    },
    {
      icon: DevicesOutlinedIcon,
      headline: "Responsive User Interface Design",
      description:
        "Focused on a mobile-first responsive system and made our way across multiple viewports to ensure there is accessibility on all kinds of devices.",
    },
  ];
  return (
    <div className="w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col md:flex-row items-center justify-center gap-[32px]">
      <div className="flex flex-col gap-[32px] w-full xl:max-w-[40%]">
        <div className="text-slug tracking-[4px] uppercase text-center text-black-59">
          Design Process
        </div>
        <div className="text-subheading leading-subheading font-extrabold text-black max-w-[750px] text-center">
          Structuring the Experience
        </div>
        <div className="text-black-97 text-[20px] leading-[36px] text-center">
          {
            "After determining the key user needs, we broke down the workflows into four core functions:"
          }
        </div>
      </div>
      <div className="flex gap-[16px] justify-start flex-wrap w-full xl:max-w-[60%]">
        {approachData.map(function (data, idx) {
          return <ApproachPill data={data} key={idx} />;
        })}
      </div>
    </div>
  );
}

function ApproachPill({ data }) {
  const IconComponent = data.icon;

  return (
    <div className="bg-background w-full sm:w-[calc(50%-8px)] md:w-full xl:w-[calc(50%-8px)] rounded-[16px] flex flex-col gap-[8px] p-[16px]">
      <IconComponent className="text-primary" />
      <div className="text-[20px] leading-[36px] font-extrabold text-black-97">
        {data.headline}
      </div>
      <div className="text-[20px] leading-[36px] text-black-97">
        {data.description}
      </div>
    </div>
  );
}

function DesignChallenge() {
  return (
    <div className="w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col md:flex-row items-center justify-center gap-[32px]">
      <div className="flex flex-col gap-[16px] md:w-[50%] lg:w-[60%]">
        <div className="text-slug tracking-[4px] uppercase text-black-59">
          DESIGN CHALLENGE
        </div>
        <div className="text-subheading leading-subheading font-extrabold text-black">
          {"Balancing Simplicity with Functionality in a Utility-Heavy System"}
        </div>
        <div className="text-black-97 text-[20px] leading-[36px] flex flex-col gap-[16px]">
          <p>
            {
              "One of the biggest challenges was designing an interface that could handle multiple complex functions: ticket creation, delegation, asset tracking, and inventory management without overwhelming the user."
            }
          </p>
          <p>
            {
              "The system manager had limited time to learn new tools and needed the interface to be immediately usable. At the same time, the system needed to scale and support detailed workflows."
            }
          </p>
        </div>
      </div>
      <div className="flex justify-end md:w-[50%] lg:w-[40%]">
        <AdaptiveImage
          lightImage={designChallengeLight}
          darkImage={designChallengeDark}
        />
      </div>
    </div>
  );
}

function DesignSolution() {
  return (
    <div className="w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col items-center justify-center gap-[32px]">
      <div className="text-slug tracking-[4px] uppercase text-black-59">
        DESIGN SOLUTION
      </div>
      <div className="text-subheading leading-subheading font-extrabold text-black max-w-[750px] text-center">
        How we overcame The Challenge
      </div>
      <div className="hidden md:flex flex-col gap-[64px] bg-background rounded-[16px] p-[24px]">
        <AdaptiveImage lightImage={dsOneFullLight} darkImage={dsOneFullDark} />
        <AdaptiveImage lightImage={dsTwoFullLight} darkImage={dsTwoFullDark} />
        <AdaptiveImage
          lightImage={dsThreeFullLight}
          darkImage={dsThreeFullDark}
        />
      </div>
      <div className="md:hidden flex flex-col gap-[64px] bg-background rounded-[16px] p-[24px]">
        <AdaptiveImage lightImage={dsOneLightLeft} darkImage={dsOneDarkLeft} />
        <AdaptiveImage
          lightImage={dsOneLightRight}
          darkImage={dsOneDarkRight}
        />
        <AdaptiveImage lightImage={dsTwoLight} darkImage={dsTwoDark} />
        <AdaptiveImage lightImage={dsThreeLight} darkImage={dsThreeDark} />
      </div>
    </div>
  );
}

function Result() {
  const resultsData = [
    {
      heading: "Key Results & Impact",
      details: [
        {
          subHeading: "50% Faster Ticket Triage:",
          description:
            "The system manager now triages service requests in half the time compared to email-based tracking.",
        },
        {
          subHeading: "Lesser Delays due to Mobile Access:",
          description:
            "Staff actively use mobile devices to update and check tickets, reducing delays in response while on-site.",
        },
        {
          subHeading: "Improves Task Clarity:",
          description:
            "Delegation features and asset links reduced confusion around who’s responsible for what, improving internal coordination.",
        },
      ],
    },
    {
      heading: "What I Learned",
      details: [
        {
          subHeading: "Clarity Over Complexity in Utility Heavy Tools:",
          description:
            "Simple systems can make a big difference: clear, well-structured interfaces help teams get their work done faster and improve overall workflows.",
        },
        {
          subHeading: "The importance of CSS in the overall experience:",
          description:
            "Clean, responsive styling was critical to ensuring the interface didn’t just look good but felt good to use.",
        },
        {
          subHeading: "Understanding the Real-world Constraints:",
          description:
            "Designing for university systems meant keeping usability high even within technical limitations.",
        },
      ],
    },
  ];

  return (
    <Results
      slug={"results"}
      title={"Streamlining ITS Operations"}
      resultsData={resultsData}
    />
  );
}
