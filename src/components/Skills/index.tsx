import {
  CSSIcon,
  FirebaseIcon,
  GitIcon,
  HTMLIcon,
  JavascriptIcon,
  JenkinsIcon,
  MySQLIcon,
  NodeJSIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
  TypescriptIcon,
  ViteIcon,
} from "@/assets/icons";

const Skills = () => {
  const skillList = [
    { icon: <JavascriptIcon />, name: "Javascript" },
    { icon: <TypescriptIcon />, name: "Typescript" },
    { icon: <HTMLIcon />, name: "HTML" },
    { icon: <CSSIcon />, name: "CSS" },
    { icon: <ReactIcon />, name: "React" },
    { icon: <ReactIcon />, name: "React Native" },
    { icon: <ViteIcon />, name: "Vite" },
    { icon: <TailwindIcon />, name: "Tailwind" },
    { icon: <SassIcon />, name: "Sass" },
    { icon: <NodeJSIcon />, name: "Node JS" },
    { icon: <FirebaseIcon />, name: "Firebase" },
    { icon: <GitIcon />, name: "Git" },
    { icon: <JenkinsIcon />, name: "Jenkins" },
    { icon: <MySQLIcon />, name: "MySQL" },
  ];
  return (
    <div
      id="skills"
      className="flex flex-col items-center bg-accent/85 px-[20%] py-8 max-lg:px-[15%] max-sm:px-6"
    >
      <h1 className="mb-8 text-5xl font-medium">Skills</h1>
      <div className="skill w-full gap-8 max-sm:gap-6 [&_p]:text-xs [&_svg]:h-16 [&_svg]:w-16 [&_svg]:rounded-lg [&_svg]:bg-primary/10 [&_svg]:p-2 [&_svg]:shadow [&_svg]:backdrop-blur-lg">
        {skillList.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center gap-1 [&_svg]:hover:bg-primary/20"
          >
            {item.icon}
            <p className="text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
