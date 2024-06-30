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
      className={`timeline relative mt-2 after:animate-moveline md:after:left-1/2 md:after:ml-[-3px]`}
      style={{ "--animation-duration": `${duration}s` } as any}
    >
      {eventList.map((item, index) => (
        <div className="relative" key={index}>
          <span
            className={`circle pointer-events-none absolute left-1/2 top-10 z-10 flex max-h-8 w-8 animate-moveline items-center justify-center rounded-full bg-purple-100 max-md:left-1 md:-ml-4`}
            style={{
              animationDelay: `${index + 0.1}s`,
              animationDuration: "700ms",
            }}
          >
            <span className="h-full max-h-6 w-full max-w-6 rounded-full bg-purple"></span>
          </span>
          <div
            className={`relative animate-slide-up px-10 py-4 opacity-0 md:w-1/2 ${index % 2 === 0 ? "md:left-0" : "md:left-1/2"}`}
            style={{ animationDelay: `${index}s` }}
          >
            <div className="relative rounded-lg bg-background p-2 outline outline-purple max-md:ml-5">
              <h4 className="mb-1 text-lg font-medium">{item.title}</h4>
              <small>{item.time}</small>
              <p className="mt-1 text-sm">{item.desc}</p>
              <span
                className={`triangle absolute top-5 z-[99] border-y-[20px] border-x-purple border-y-transparent max-md:-left-[20px] max-md:border-r-[20px] ${index % 2 === 0 ? "triangle-left md:-right-[20px] md:border-l-[20px]" : "triangle-right md:-left-[20px] md:border-r-[20px]"}`}
              ></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
