export default function Spacer({ height }) {
  const sizeToClass = {
    xs: "h-[8px]",
    sm: "h-[16px]",
    md: "h-[24px]",
    lg: "h-[32px]",
    xl: "h-[40px]",
    "2xl": "h-[48px]",
    "3xl": "h-[54px]",
    lll: "h-[64px]",
  };
  return <div className={`${sizeToClass[height]}`}></div>;
}
