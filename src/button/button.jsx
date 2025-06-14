import { Link } from "react-router";

export function PGButton({ btnText }) {
  return (
    <button className="border-solid border-[2px] rounded-[12px] p-[12px] mt-[24px] font-[500] leading-[20px] tracking-[0.05em] cursor-pointer uppercase opacity-[0.95] text-[16px] border-border-btn bg-background-btn text-black hover:text-white hover:bg-primary hover:border-primary">
      {btnText}
    </button>
  );
}

export function PGLinkButton({
  btnText,
  btnLink,
  download = "",
}) {
  return download !== "" ? (
    <a href={btnLink} target="_blank" download={download} rel="noopener noreferrer">
      <PGButton btnText={btnText} />
    </a>
  ) : (
    <Link to={btnLink} target={"_blank"} rel="noopener noreferrer">
      <PGButton btnText={btnText} />
    </Link>
  );
}
