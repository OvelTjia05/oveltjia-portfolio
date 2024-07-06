import { GitHubIcon, LinkedInIcon } from "@/assets/icons";
import { Link } from "react-router-dom";

const Footer = () => {
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
  return (
    <div
      id="footer"
      className="shadow-top flex items-center justify-between bg-primary-foreground px-[20%] py-3 max-lg:px-[15%] max-md:flex-col max-sm:px-6"
    >
      <p className="max-w-96 text-muted-foreground max-md:text-center">
        "Programming isn't about what you know; it's about what you can figure
        out."
        <br />
        <span>- Chris Pine</span>
      </p>
      <div
        className="social-icon flex gap-2 py-4"
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
  );
};

export default Footer;
