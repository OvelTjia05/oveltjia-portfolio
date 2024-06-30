import useTypewriter from "@/hooks/useTypewriter";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ProfileImg } from "@/assets/images";
import { GitHubIcon, LinkedInIcon } from "@/assets/icons";
import { Link } from "react-router-dom";

const Banner = () => {
  const socialList = [
    {
      name: "github",
      icon: GitHubIcon,
      url: "https://github.com/OvelTjia05",
    },
    {
      name: "linkedin",
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/ovel-richy-maramis-tjia-9104212a0/",
    },
  ];
  const textList = ["Front-End Developer", "Mobile App Developer"];
  const typingText = useTypewriter(textList);

  return (
    <div
      className="banner min-h-[65vh] py-28 max-2xl:pb-12 max-2xl:pt-44 max-lg:px-[15%] max-sm:px-6 max-sm:pb-6 max-xs:pt-28 lg:px-[20%]"
      id="home"
    >
      <div className="min-h-[500px] 2xl:flex 2xl:flex-row-reverse 2xl:items-center 2xl:justify-between">
        <Avatar className="h-[400px] w-[400px] shadow max-2xl:float-right max-2xl:h-[350px] max-2xl:w-[350px] max-xl:h-[300px] max-xl:w-[300px] max-md:h-[250px] max-md:w-[250px] max-xs:h-full max-xs:w-full xs:ml-4">
          <AvatarImage src={ProfileImg} className="object-cover" />
          <AvatarFallback>OT</AvatarFallback>
        </Avatar>
        <div className="relative max-2xl:min-h-[500px]">
          <div className="overflow-clip break-words max-xs:text-center [&>*]:text-secondary-foreground">
            <h1 className="mb-3 text-4xl font-bold lg:text-5xl">
              Hi! I'm Ovel Tjia
            </h1>
            <h2 className="min-h-10 text-3xl font-semibold max-2xs:min-h-20 lg:text-4xl">
              {typingText}
            </h2>
          </div>
          <p className="mb-4 mt-10 max-w-[500px] text-muted-foreground max-xs:text-center max-2xs:mt-2 md:text-lg">
            A passionate developer based in Manado, Sulawesi Utara, Indonesia,
            who loves coding and problem solving. Dedicated to building
            interactive, effective web and mobile applications.
          </p>
          <div
            className="social-icon flex gap-2 py-4 max-xs:justify-center xs:absolute xs:bottom-0 2xl:relative"
            // className="flex gap-4 py-4 max-xs:justify-center xs:absolute xs:bottom-0 2xl:relative"
          >
            {socialList.map((item) => (
              <Link
                key={item.name}
                to={item.url}
                target="_blank"
                rel="noreferrer"
                className="bg-background"
                // className="inline-flex h-12 w-12 items-center justify-center"
              >
                <item.icon
                  className="fill-purple"
                  // className={`h-full w-full rounded-full bg-foreground fill-white outline outline-4 outline-offset-[-2px] outline-background ring-purple-50 hover:bg-purple hover:ring`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
