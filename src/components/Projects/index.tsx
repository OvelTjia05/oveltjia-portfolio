import { SiladenImg } from "@/assets/images";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { AndroidIcon } from "@/assets/icons";
import { CodeXmlIcon, MonitorIcon } from "lucide-react";
import useWindowSize from "@/hooks/useWindowSize";
import { Link } from "react-router-dom";

type ProjectList = {
  name: string;
  type: string;
  image: string;
  desc: string;
  sc: string;
  url: string;
}[];

const Projects = () => {
  const winSize = useWindowSize();
  const plugin = useRef(Autoplay({ delay: 4000 }));

  const PROJECTLIST: ProjectList = [
    {
      name: "Siladen",
      type: "mobile-app",
      image: SiladenImg,
      desc: "An Android app designed to facilitate quick and efficient reporting of patient safety incidents. The app allows medical personnel to report incidents in real-time, classify incidents by type and risk level, and analyze data to identify patterns and root causes. I worked as a front-end in the development process of this application, from environment setup, page slicing, API integration, feature creation, and deployment so that the application can be installed on Android devices.",
      sc: "https://github.com/RSUD-Dr-Sam-Ratulangi/Siladen.git",
      url: "https://alphacast.id/x/rsudtondano/siladen/",
    },
    {
      name: "Filkom Super App",
      type: "web",
      image: SiladenImg,
      desc: "A web application to manage all activities in the Faculty of Computer Science (Filkom), which consists of several apps, namely Academic Guidance, Alumni, Thesis, and still increasing. During my internship, I worked in the Academic Guidance Development section as a front-end, assisting in API integration, data manipulation, page slicing, code refactoring, and bug fixing.",
      sc: "https://github.com/filkomunklab/filkom-apps-fe.git",
      url: "http://App.filkom.unklab.ac.id",
    },
  ];

  return (
    <div
      id="projects"
      className="flex flex-col items-center bg-accent/85 px-[20%] py-8 max-lg:px-[15%] max-sm:px-6"
    >
      <h1 className="mb-8 text-5xl font-medium">Projects</h1>

      <div className="w-full px-12">
        <Carousel
          opts={{ loop: true }}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {PROJECTLIST.map((item) => (
              <CarouselItem key={item.name}>
                <div className="flex justify-evenly gap-y-4 p-1 max-md:flex-col">
                  {item.type === "mobile-app" ? (
                    <div className="relative my-auto h-[400px] min-w-[185px] rounded-[1.6rem] border-[10px] border-gray-800 bg-gray-800 dark:border-gray-700 max-2xl:h-[300px] max-2xl:min-w-[140px] max-2xl:rounded-[1.4rem] max-2xl:border-[7px] max-xl:mx-auto">
                      <div className="absolute -start-[12px] top-[110px] h-[43px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-700 max-2xl:-start-[9.5px] max-2xl:top-[60px] max-2xl:h-[37px]"></div>
                      <div className="absolute -start-[12px] top-[164px] h-[43px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-700 max-2xl:-start-[9.5px] max-2xl:top-[105px] max-2xl:h-[37px]"></div>
                      <div className="absolute -end-[12px] top-[132px] h-[61px] w-[3px] rounded-e-lg bg-gray-800 dark:bg-gray-700 max-2xl:-end-[9.5px] max-2xl:top-[80px] max-2xl:h-[50px]"></div>
                      <div className="h-full w-full overflow-hidden rounded-[1rem] bg-white dark:bg-gray-700">
                        <img
                          src={item.image}
                          className="h-full w-full object-cover"
                          alt={item.name}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="my-auto max-xl:mx-auto">
                      <div className="relative mx-auto h-[172px] max-w-[301px] rounded-t-xl border-[8px] border-gray-800 bg-gray-800 dark:border-gray-800 max-xs:h-[103px] max-xs:max-w-[180px] xs:h-[126px] xs:max-w-[220px] sm:h-[172px] sm:max-w-[301px] md:h-[103px] md:max-w-[180px] lg:h-[126px] lg:max-w-[220px] 2xl:h-[172px] 2xl:max-w-[301px]">
                        <div className="h-full overflow-hidden rounded-lg bg-white dark:bg-gray-800">
                          <img
                            src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
                            className="h-full w-full rounded-lg dark:hidden"
                            alt=""
                          />
                          <img
                            src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
                            className="hidden h-full w-full rounded-lg dark:block"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="relative mx-auto h-[16px] w-[320px] rounded-b-xl rounded-t-sm bg-gray-900 dark:bg-gray-700 max-xs:h-[10px] max-xs:w-[191px] xs:h-[13px] xs:w-[234px] sm:h-[16px] sm:w-[320px] md:h-[10px] md:w-[191px] lg:h-[13px] lg:w-[234px] 2xl:h-[16px] 2xl:min-w-[320px]">
                        <div className="absolute left-1/2 top-0 h-[4px] w-[49px] -translate-x-1/2 rounded-b-xl bg-gray-800"></div>
                      </div>
                    </div>
                  )}
                  <div className="relative flex basis-1/2 flex-col justify-center gap-y-5">
                    <h2 className="text-3xl font-medium">{item.name}</h2>
                    <p className="hide-scrollbar h-40 overflow-hidden overflow-y-scroll text-sm">
                      {item.desc}
                    </p>
                    <div className="flex gap-2">
                      <TooltipProvider disableHoverableContent>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              to={item.url}
                              onClick={(e) => !item.url && e.preventDefault()}
                              target="_blank"
                              className={`h-fit w-fit rounded-full p-2 shadow ${
                                item.url
                                  ? "bg-white hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900"
                                  : "bg-gray-300 opacity-50 dark:bg-gray-900"
                              }`}
                            >
                              {item.type === "mobile-app" ? (
                                <AndroidIcon className="h-6 w-6 fill-purple" />
                              ) : (
                                <MonitorIcon className="stroke-purple" />
                              )}
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent
                            avoidCollisions
                            className="max-w-48"
                            align={`${!!winSize.width && winSize.width < 768 ? "start" : "center"}`}
                          >
                            {item.url ? (
                              item.type === "mobile-app" ? (
                                <p>Download demo app</p>
                              ) : (
                                <p>Visit web</p>
                              )
                            ) : (
                              <p>
                                This app is currently only in development mode.
                                You can download the source code and run it on
                                your local machine
                              </p>
                            )}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              to={item.sc}
                              target="_blank"
                              rel="noreferrer"
                              className="h-fit w-fit rounded-full bg-white p-2 shadow hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900"
                            >
                              <CodeXmlIcon className="stroke-purple" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Source code</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
