export function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-primary text-white text-center py-[8px] font-bold">
      © {year} Prinsa Ghimire
    </div>
  );
}
