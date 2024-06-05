import useTypewriter from "@/hooks/useTypewriter";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ProfileImg } from "@/assets/images";

const Banner = () => {
  const textList = ["Front-End Developer", "Mobile App Developer"];
  const typingText = useTypewriter(textList);

  return (
    <div
      className="banner min-h-[65vh] pb-12 pt-44 max-lg:px-[15%] max-sm:px-6 max-sm:pb-6 max-sm:pt-36 max-xs:pt-28 lg:px-[20%]"
      id="home"
    >
      <div className="lg:h-[460px]">
        <Avatar className="mb-6 h-[400px] w-[400px] shadow max-lg:h-[300px] max-lg:w-[300px] max-md:h-[250px] max-md:w-[250px] max-xs:h-full max-xs:w-full xs:float-right xs:ml-4">
          <AvatarImage src={ProfileImg} className="object-cover" />
          <AvatarFallback>OT</AvatarFallback>
        </Avatar>
        <div className="overflow-clip break-words max-xs:text-center [&>*]:text-secondary-foreground">
          <h1 className="mb-3 text-4xl font-extrabold lg:text-5xl">
            Hi! I'm Ovel
          </h1>
          <h2 className="min-h-10 text-3xl font-semibold max-2xs:min-h-20 lg:text-4xl">
            {typingText}
          </h2>
        </div>
        <p className="mt-10 text-muted-foreground max-xs:text-center max-2xs:mt-2 md:text-lg lg:w-[700px]">
          A passionate developer based in Manado, Sulawesi Utara, Indonesia, who
          loves coding and problem solving. Dedicated to building interactive,
          effective web and mobile applications.
        </p>
      </div>
    </div>
  );
};

export default Banner;
