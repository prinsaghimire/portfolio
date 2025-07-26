export function Results({ slug, title, resultsData }) {
  return (
    <div className="w-[calc(100vw-60px)] max-w-[1184px] my-[32px] mx-auto flex flex-col items-start justify-center gap-[32px]">
      <div className="text-slug tracking-[4px] uppercase text-black-59">
        {slug}
      </div>
      <div className="text-subheading leading-subheading font-extrabold text-black">
        {title}
      </div>

      <div className="flex flex-col md:flex-row gap-[32px]">
        {resultsData.map(function (data, idx) {
          return <ResultSection key={idx} data={data} />;
        })}
      </div>
    </div>
  );
}

export function ResultSection({ data }) {
  console.log(data)
  return (
    <div className="bg-background rounded-[16px] p-[32px] flex flex-col gap-[32px] text-[20px] leading-[36px] w-full md:max-w-[50%]">
    {data.heading && <p className="font-bold tracking-[1px] text-black-cc">{data.heading}</p>}

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
