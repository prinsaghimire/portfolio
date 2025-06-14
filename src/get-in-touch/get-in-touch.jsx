import { PGLinkButton } from "../button/button";

export default function GetInTouch() {
  return (
    <div className="my-[40px] w-full flex flex-col gap-[32px] sm:flex-row justify-between items-center font-[500]">
      <div className="w-full sm:max-w-[50%] inline-flex sm:block text-normal leading-normal align-left text-black p-[32px]">
        <div>Get in</div>
        <div className="text-primary font-sfpro-medium font-bold">Touch.</div>
      </div>
      <div className="w-full sm:max-w-[50%] bg-background rounded-[24px] p-[32px]">
        <div className="font-[400] text-[20px] leading-[36px] text-black-97">
          I’d love to collaborate or discuss design ideas! Feel free to reach
          out via email.
        </div>
        <PGLinkButton
          btnLink={"mailto:prinsaghimire23@gmail.com"}
          btnText={"prinsaghimire23@gmail.com"}
        />
      </div>
    </div>
  );
}
