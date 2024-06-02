const Timeline = () => {
  const eventList = [
    {
      title: "Universitas Klabat",
      time: "2020 - 2024",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ducimus dicta et debitis nemo rerum incidunt pariatur suscipit fuga id",
    },
    {
      title: "Universitas Klabat",
      time: "2020 - 2024",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ducimus dicta et debitis nemo rerum incidunt pariatur suscipit fuga id",
    },
    {
      title: "Universitas Klabat",
      time: "2020 - 2024",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ducimus dicta et debitis nemo rerum incidunt pariatur suscipit fuga id",
    },
    {
      title: "Universitas Klabat",
      time: "2020 - 2024",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ducimus dicta et debitis nemo rerum incidunt pariatur suscipit fuga id",
    },
  ];

  const duration = eventList.length;
  return (
    <div className="timeline relative">
      {eventList.map((item, index) => (
        <div
          key={index}
          className={`relative w-1/2 px-10 py-4 opacity-0 ${index % 2 === 0 ? "left-0" : "left-1/2"}`}
          style={{
            animation: `movedown ${duration}s linear forwards`,
            animationDelay: `${index}s`,
          }}
        >
          <span
            className={`absolute -right-5 top-10 z-20 h-10 w-10 rounded-full bg-foreground ${index % 2 === 0 ? "" : "-left-5"}`}
          ></span>
          <div className="relative rounded-lg bg-muted p-2">
            <h4 className="text-lg font-medium">{item.title}</h4>
            <small>{item.time}</small>
            <p className="text-sm">{item.desc}</p>
            <span
              className={` ${index % 2 === 0 ? "arrow-left" : "arrow-right"}`}
            ></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
