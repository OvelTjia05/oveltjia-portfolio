const Timeline = () => {
  const eventList = [
    {
      title: "Universitas Klabat",
      time: "2020 - 2024",
      desc: "I majored in informatics at the faculty of computer science and graduated with a bachelor's degree in computer science. During my studies, I focused on web and mobile application development.",
    },
    {
      title: "RSUD Dr. Sam Ratulangi Tondano",
      time: "2023 - 2023",
      desc: "Participate in one of the Kampus Merdeka programs, which is an internship for 1 semester or about 6 months. During my internship at this hospital, my team and I successfully created a mobile application that has been used by the hospital until now.",
    },
  ];

  const duration = eventList.length;
  return (
    <div
      className={`timeline relative mt-2 after:ml-[17px] after:origin-top after:animate-moveline sm:after:left-1/2 sm:after:ml-[-3px]`}
      style={{ "--animation-duration": `${duration}s` } as any}
    >
      {eventList.map((item, index) => (
        <div className="relative" key={index}>
          <span
            className={`circle pointer-events-none absolute left-1/2 top-10 z-10 flex max-h-8 w-8 animate-moveline items-center justify-center rounded-full bg-foreground max-sm:left-1 sm:-ml-4`}
            style={{
              animationDelay: `${index + 0.1}s`,
              animationDuration: "700ms",
            }}
          >
            <span className="h-full max-h-6 w-full max-w-6 rounded-full bg-muted"></span>
          </span>
          <div
            className={`relative animate-show-up px-10 py-4 opacity-0 sm:w-1/2 ${index % 2 === 0 ? "sm:left-0" : "sm:left-1/2"}`}
            style={{ animationDelay: `${index}s` }}
          >
            <div className="relative rounded-lg bg-muted p-2 max-sm:ml-5">
              <h4 className="mb-1 text-lg font-medium">{item.title}</h4>
              <small>{item.time}</small>
              <p className="mt-1 text-sm">{item.desc}</p>
              <span
                className={`absolute top-7 border-y-[15px] border-x-muted border-y-transparent max-sm:-left-[15px] max-sm:border-r-[15px] ${index % 2 === 0 ? "sm:-right-[15px] sm:border-l-[15px]" : "sm:-left-[15px] sm:border-r-[15px]"}`}
              ></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
