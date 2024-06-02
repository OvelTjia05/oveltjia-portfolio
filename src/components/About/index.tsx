import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Timeline from "../ui/timeline";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center px-[20%] py-8 max-lg:px-[15%] max-sm:px-6"
    >
      <Tabs
        defaultValue="timeline"
        className="flex w-full flex-col rounded-3xl bg-muted-foreground/30 p-4 backdrop-blur"
      >
        <h1 className="mb-4 text-center text-5xl font-medium">About</h1>
        <TabsList className="">
          <TabsTrigger value="timeline" className="hover:scale-105">
            Timeline
          </TabsTrigger>
          <TabsTrigger value="education" className="hover:scale-105">
            Education
          </TabsTrigger>
          <TabsTrigger value="certificate" className="hover:scale-105">
            Certificate
          </TabsTrigger>
        </TabsList>
        <TabsContent value="timeline">
          <Timeline />
        </TabsContent>
        <TabsContent value="education">Change your password here.</TabsContent>
        <TabsContent value="certificate">
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default About;
