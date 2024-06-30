import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Timeline from "../ui/timeline";
import Education from "../ui/education";
import Certificates from "../ui/certificates";

const About = () => {
  const tabList = ["timeline", "education", "certificate"];

  return (
    <div
      id="about"
      className="flex flex-col items-center px-[20%] py-8 max-lg:px-[15%] max-sm:px-6"
    >
      <Tabs
        defaultValue={tabList[0]}
        className="flex w-full flex-col rounded-3xl bg-muted-foreground/30 p-4 backdrop-blur"
      >
        <h1 className="mb-4 text-center text-5xl font-medium">About</h1>
        <TabsList className="my-2">
          {tabList.map((item) => (
            <div key={item} className="relative">
              <TabsTrigger
                value={item}
                className={`tab-button after:from-purple after:bg-gradient-to-r after:to-blue-400 data-[state=active]:bg-transparent data-[state=active]:text-white`}
              >
                <span className="z-10">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </TabsTrigger>
            </div>
          ))}
        </TabsList>
        <TabsContent value="timeline">
          <Timeline />
        </TabsContent>
        <TabsContent value="education">
          <Education />
        </TabsContent>
        <TabsContent value="certificate">
          <Certificates />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default About;
