import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import { PGLinkButton } from "../button/button";
import Spacer from '../spacer/spacer';
import GetInTouch from "../get-in-touch/get-in-touch";
import artsyIntro from "./artsy-intro.png";
import artsyContext from "./artsy-context.png";
import artsyImpact from "./artsy-impact.png";
import artsyDesignProcess from "./artsy-design-process.svg";
import sheila from "./artsy-sheila.svg";
import michael from "./artsy-michael.svg";
import artsyDSApproachFull from "./artsy-dsapproach-huge.png";
import artsyDSApproachLeft from "./artsy-dsapproach-left.svg";
import artsyDSApproachRight from "./artsy-dsapproach-right.svg";
import artsyValidationMain from "./artsy-validation-main.png";
import artsyValidationTaskOne from "./artsy-validation-task-one.png";
import artsyValidationTaskTwo from "./artsy-validation-task-two.png";
import artsyValidationTaskThree from "./artsy-validation-task-three.png";
import artsyValidationTaskFour from "./artsy-validation-task-four.png";

export function ArtsyEcommerce() {
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
        <Validation />
        <Results />
        <GetInTouchSection />
      </div>
      <Footer />
    </>
  );
}

function Intro() {
  return (
    <div className="bg-primary">
      <div className="w-[calc(100vw-60px)] max-w-[1184px] mt-[32px] mx-auto flex flex-col md:flex-row items-center gap-[32px]">
        <div className="flex flex-col justify-center md:w-[50%]">
          <div className="text-slug tracking-[4px] uppercase text-white my-[16px]">
            UX Case Study
          </div>
          <div className="text-[clamp(36px,64px,6vw)] leading-[calc(clamp(36px,64px,6vw)*1.4)] font-sfpro-bold text-white">
            Designing an Art E‑Commerce Experience
          </div>
        </div>
        <div className="md:w-[50%]">
          <img src={artsyIntro} />
        </div>
      </div>
    </div>
  );
}

function Context() {
  return (
    <div className="w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col md:flex-row items-center gap-[32px]">
      <div className="flex flex-col gap-[16px] md:w-[50%]">
        <div className="text-slug tracking-[4px] uppercase text-black-59">
          Context
        </div>
        <div className="text-subheading leading-subheading font-extrabold text-black">
          Bringing Art to the Digital Marketplace
        </div>
        <div className="font-normal text-[20px] leading-[36px] text-black-97">
          This project, as a part of my HCI coursework, focused on designing an
          intuitive e‑commerce platform for art discovery and purchasing. The
          challenge was creating a seamless, user‑friendly experience for both
          tech‑savvy users and beginners, guided by user research and usability
          testing.
        </div>
        <div className="flex flex-col md:flex-row gap-[16px] items-stretch justify-between">
          <ContextPill heading={"My Role"} descriptionOne={"Lead Designer"} />
          <ContextPill
            heading={"Team"}
            descriptionOne={"3 Designers"}
            descriptionTwo={"1 Project Manager"}
          />
          <ContextPill heading={"Time"} descriptionOne={"4 Months"} />
        </div>
      </div>

      <div className="md:w-[50%]">
        <img src={artsyContext} />
      </div>
    </div>
  );
}

function Impact() {
  return (
    <div className="w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col md:flex-row-reverse items-center gap-[32px]">
      <div className="flex flex-col gap-[16px] md:w-[50%]">
        <div className="text-slug tracking-[4px] uppercase text-black-59">
          Context
        </div>
        <div className="text-subheading leading-subheading font-extrabold text-black">
          My Impact
        </div>
        <div className="flex flex-col rounded-[16px] bg-background p-[32px] gap-[16px] font-normal text-[20px] leading-[36px]">
          <ImpactParagraph
            heading={"Led Design Strategy:"}
            description={
              "As Lead Designer, I set the vision and implemented Ant Design, ensuring a scalable, consistent, and efficient user experience."
            }
          />
          <ImpactParagraph
            heading={"Drove Usability Testing:"}
            description={
              "Conducted over half of the tests, extracted key insights, and led refinements that improved task success and reduced friction."
            }
          />
          <ImpactParagraph
            heading={"Executed & Delivered Impact:"}
            description={
              "Mapped user journeys, optimized workflows, and visualized findings, turning research into actionable design improvements that enhanced engagement and conversions."
            }
          />
        </div>
      </div>
      <div className="md:w-[50%]">
        <img src={artsyContext} />
      </div>
    </div>
  );
}

function ContextPill({
  heading,
  descriptionOne,
  descriptionTwo = "",
}) {
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

function ImpactParagraph({
  heading,
  description,
}) {
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
  const characters = [
    {
      name: "Sheila Downy",
      age: 32,
      profession: "Software Engineer",
      avatar: sheila,
      bio: "Sheila has a solid understanding of the art market and is familiar with the types of artwork available in the platforms. She wants to find something that matches her style and preferences.",
      shortTermGoal: "Find artwork that fit her aesthetic and budget.",
      longTermGoal:
        "Build a meaningful and diverse art collection that reflects her taste and supports emerging artists.",
      needs: [
        "Intuitive e‑commerce platform to browse and buy artworks.",
        "She needs clear pricing, artist background information, and verified authenticity to ensure confidence in her purchase.",
      ],
    },
    {
      name: "Michael Adrian",
      age: 25,
      profession: "Artist",
      avatar: michael,
      bio: "Michael is a talented artist struggling with online marketing and e‑commerce tools. He seeks broader visibility for his work but lacks the technical skills to promote it effectively.",
      shortTermGoal: "Increase sales and visibility on the platform.",
      longTermGoal:
        "Become a financially stable full‑time artist with a loyal customer base.",
      needs: [
        "Easy‑to‑use tools for promoting and selling artwork.",
        "A platform that boosts visibility without requiring advanced technical skills.",
      ],
    },
  ];
  return (
    <div className="w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col items-start gap-[32px]">
      <div className="flex flex-col gap-[16px]">
        <div className="text-slug tracking-[4px] uppercase text-black-59">
          Context
        </div>
        <div className="text-subheading leading-subheading font-extrabold text-black">
          Understanding the Users
        </div>
      </div>
      <div className="flex flex-col gap-[32px] md:flex-row">
        <div className="flex flex-col justify-center gap-[16px] md:w-[50%]">
          <p className="text-[20px] leading-[36px] text-black-97">
            My approach began with understanding the two primary user groups:
            Buyers and Artists.
          </p>
          <p className="text-[20px] leading-[36px] text-black-97">
            <span className="font-bold tracking-[1px] text-black-cc">
              Buyers
            </span>{" "}
            needed a smooth browsing experience, filtering options to find
            relevant artwork, and a hassle‑free checkout process.
          </p>
          <p className="text-[20px] leading-[36px] text-black-97">
            <span className="font-bold tracking-[1px] text-black-cc">
              Artists
            </span>{" "}
            required a profile that highlighted their work and facilitated
            engagement through feedback and recommendations.
          </p>
        </div>
        <div className="md:w-[50%]">
          <img src={artsyDesignProcess} />
        </div>
      </div>
      <Spacer height={'xs'} />
      <div className="flex flex-col md:flex-row gap-[32px]">
        {characters.map(function (data, idx) {
          return <Character key={idx} data={data} />;
        })}
      </div>
    </div>
  );
}

function Character({
  data,
}) {
  return (
    <div className="bg-background rounded-[16px] p-[16px]">
      <div className="flex flex-col gap-[16px]">
        <div className="flex gap-[16px]">
          <div className="max-w-[30%]">
            <img src={data.avatar} />
          </div>
          <div className="max-w-[70%] text-[clamp(12px,20px,4vw)] leading-[clamp(24px,40px,8vw)]">
            <p className="font-bold tracking-[1px] text-black-cc">
              {data.name}
            </p>
            <p className="text-black-cc">Age: {data.age}</p>
            <p className="text-black-cc">Profession: {data.profession}</p>
          </div>
        </div>
        <div className="text-[20px] leading-[36px] text-black-97">
          {data.bio}
        </div>
        <div>
          <p className="font-bold tracking-[1px] text-black-cc text-[20px] leading-[36px]">
            Goals
          </p>
          <ul className="list-none text-[20px] leading-[36px] text-black-97">
            <li className="list-disc list-inside">{data.shortTermGoal}</li>
            <li className="list-disc list-inside">{data.longTermGoal}</li>
          </ul>
        </div>
        <div>
          <p className="font-bold tracking-[1px] text-black-cc text-[20px] leading-[36px]">
            Needs
          </p>
          <ul className="list-none text-[20px] leading-[36px] text-black-97">
            {data.needs.map((need, idx) => (
              <li key={idx} className="list-disc list-inside">
                {need}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DSApproach() {
  return (
    <div className="w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col items-center justify-center gap-[32px]">
      <div className="text-slug tracking-[4px] uppercase text-black-59">
        Design Process
      </div>
      <div className="text-subheading leading-subheading font-extrabold text-black max-w-[750px] text-center">
        Standardizing the design <br /> (Design System Approach)
      </div>
      <div className="text-[20px] leading-[36px] max-w-[600px] text-center text-black-97">
        To create a structured and consistent experience, I leveraged the{" "}
        <span className="font-bold tracking-[1px] text-black-cc">
          Ant Design System
        </span>{" "}
        to build reusable UI components, ensuring scalability and visual
        coherence. This approach streamlined development and maintained
        uniformity across different sections of the platform.
      </div>
      <img
        className="hidden md:block w-full rounded-[16px] p-[16px] bg-[#ffffffa0]"
        src={artsyDSApproachFull}
      />
      <img
        className="md:hidden w-full rounded-[16px_0px_0px_16px] p-[16px_0px_0px_16px] bg-[#ffffffa0]"
        src={artsyDSApproachLeft}
      />
      <img
        className="md:hidden w-full rounded-[0px_16px_16px_0px] p-[0px_16px_16px_0px] bg-[#ffffffa0]"
        src={artsyDSApproachRight}
      />
    </div>
  );
}

function Validation() {
  const validationData = [
    {
      image: artsyValidationTaskOne,
      heading: "Task 1: Sign Up & Login",
      successRate: "88%",
      findings:
        'While most users found the process intuitive, one participant struggled to differentiate between "Sign Up" and "Sign In."',
      solution: "Adjusted button hierarchy and labeling for clarity.",
    },
    {
      image: artsyValidationTaskTwo,
      heading: "Task 2: Filtering Artwork",
      successRate:
        "High improvement; users cut completion time by nearly 50% on second attempts.",
      findings:
        'One user misread the "A‑Z" price filter as alphabetical sorting.',
      solution: "Replaced text with currency symbols for clarity.",
    },
    {
      image: artsyValidationTaskThree,
      heading: "Task 3: Check Out Process Flow",
      successRate: "80% met the efficiency benchmark.",
      findings:
        "Users completed the task but required more clicks than expected due to unclear prototype triggers.",
      solution:
        "Refined the prototype to better simulate real‑world interactions, reducing unnecessary clicks.",
    },
    {
      image: artsyValidationTaskFour,
      heading: "Task 4: Artist Profile & Feedback",
      successRate: "100%",
      findings:
        "Some users struggled to locate the recommendation and feedback section.",
      solution:
        "Enhanced visual hierarchy using contrast and card‑based UI to make key elements stand out.",
    },
  ];

  return (
    <div className="w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col items-center justify-center gap-[32px]">
      <div className="flex flex-col md:flex-row gap-[32px]">
        <div className="flex flex-col justify-center gap-[16px] md:max-w-[50%]">
          <div className="text-slug tracking-[4px] uppercase text-black-59">
            validation
          </div>
          <div className="text-subheading leading-subheading font-extrabold text-black">
            Usability Testing and Insights
          </div>
          <div className="text-[20px] leading-[36px] text-black-97">
            With the initial prototype in place, we conducted usability tests
            with five participants. Sessions were held both in‑person and
            online, using a{" "}
            <span className="font-bold tracking-[1px] text-black-cc">
              Think Aloud methodology
            </span>{" "}
            to capture user feedback in real‑time.
          </div>
          <div className="text-[20px] leading-[36px] text-black-97">
            The testing focused on four critical tasks and evaluated their
            impact on the usability goals of{" "}
            <span className="font-bold tracking-[1px] text-black-cc">
              Memorability, Learnability, and Efficiency
            </span>
            .
          </div>
        </div>
        <div className="md:max-w-[50%]">
          <img src={artsyValidationMain} />
        </div>
      </div>
      <Spacer height={'sm'} />
      <div className="flex flex-col md:flex-row gap-[32px] text-[20px] leading-[36px]">
        {validationData.slice(0, 2).map(function (data, idx) {
          return <ValidationTask key={idx} data={data} />;
        })}
      </div>

      <div className="flex flex-col md:flex-row gap-[32px] text-[20px] leading-[36px]">
        {validationData.slice(2).map(function (data, idx) {
          return <ValidationTask key={idx} data={data} />;
        })}
      </div>
    </div>
  );
}

function ValidationTask({
  data,
}) {
  return (
    <div className="flex flex-col gap-[16px] rounded-[16px] bg-background p-[16px] w-full md:max-w-[50%] text-black-97">
      <img src={data.image} />
      <p className="font-bold tracking-[1px] text-black">{data.heading}</p>
      <p>
        <span className="font-bold tracking-[1px] text-black-cc">
          Success Rate:{" "}
        </span>
        {data.successRate}
      </p>
      <p>
        <span className="font-bold tracking-[1px] text-black-cc">
          Findings:{" "}
        </span>
        {data.findings}
      </p>
      <p>
        <span className="font-bold tracking-[1px] text-black-cc">
          Solution:{" "}
        </span>
        {data.solution}
      </p>
    </div>
  );
}

function Results() {
  const resultsData = [
    {
      heading: "Key Takeaways & Impact",
      details: [
        {
          subHeading: "Increased Learnability:",
          description:
            "Users completed repeat tasks 50% faster after their initial attempt indicating good learnability of the platform",
        },
        {
          subHeading: "Enhanced Visual Hierarchy:",
          description:
            "Small UI refinements, such as clearer labels and structured layouts, significantly improved usability.",
        },
        {
          subHeading: "Reduced Interaction Friction:",
          description:
            "Checkout optimizations decreased unnecessary clicks, making the purchase process smoother.",
        },
      ],
    },
    {
      heading: "What I Learned",
      details: [
        {
          subHeading: "The power of a design system:",
          description:
            "Using Ant Design not only saved time but also ensured consistency across the platform.",
        },
        {
          subHeading: "The importance of user validation:",
          description:
            "Usability tests revealed insights that significantly improved the final product.",
        },
        {
          subHeading: "Iterate, iterate, iterate:",
          description:
            "Every round of feedback led to refinements that made the platform more intuitive.",
        },
      ],
    },
  ];

  return (
    <div className="w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col items-start justify-center gap-[32px]">
      <div className="text-slug tracking-[4px] uppercase text-black-59">
        Results
      </div>
      <div className="text-subheading leading-subheading font-extrabold text-black">
        Enhancing the Art Buying Experience
      </div>

      <div className="flex flex-col md:flex-row gap-[32px]">
        {resultsData.map(function (data, idx) {
          return <ResultSection key={idx} data={data} />;
        })}
      </div>
    </div>
  );
}

function ResultSection({
  data,
}) {
  return (
    <div className="bg-background rounded-[16px] p-[16px] flex flex-col gap-[32px] text-[20px] leading-[36px] w-full md:max-w-[50%]">
      <p className="font-bold tracking-[1px] text-black-cc">{data.heading}</p>

      {data.details.map(function (det, idx) {
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
  );
}

function GetInTouchSection() {
  return (
    <div className="w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col items-start justify-center gap-[32px]">
      <GetInTouch />
    </div>
  );
}
