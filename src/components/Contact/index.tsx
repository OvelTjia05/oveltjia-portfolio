import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";
import { MailIcon, PhoneIcon } from "lucide-react";
import axios from "axios";
import { FacebookIcon, InstagramIcon } from "@/assets/icons";
import { Link } from "react-router-dom";
import { useToast } from "../ui/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = z.object({
    username: z
      .string()
      .min(1, { message: "Name is required" })
      .max(50, { message: "Maximum length reached" }),
    email: z.string().email(),
    message: z
      .string()
      .min(5, { message: "Message must be at least 5 characters" })
      .max(2000, { message: "Maximum length reached" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      const formData = {
        service_id: import.meta.env.VITE_SERVICE_ID,
        template_id: import.meta.env.VITE_TEMPLATE_ID,
        user_id: import.meta.env.VITE_USER_ID,
        template_params: values,
      };
      const response = await axios.post(
        `https://api.emailjs.com/api/v1.0/email/send`,
        formData,
      );

      const { status } = response;
      if (status === 200) {
        toast({
          title: "Message sent",
          description: "Thankyou for reaching out ^_^",
        });
        form.reset();
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("error send email", error);
      toast({
        variant: "destructive",
        title: "Something went wrong :(",
        description: "Please try again later",
      });
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center px-[20%] py-8 max-lg:px-[15%] max-sm:px-6"
    >
      <h1 className="mb-8 text-5xl font-medium">Contact</h1>
      <div className="grid w-full grid-rows-1 gap-4 xs:grid-cols-2">
        <div className="mb-2 flex flex-col gap-2 xs:order-1">
          <div className="flex gap-2">
            <PhoneIcon className="h-6 w-6 stroke-purple" />
            <p>+6282193311282</p>
          </div>
          <div className="flex gap-2">
            <MailIcon className="h-6 w-6 stroke-purple" />
            <p>oveltjia05@gmail.com</p>
          </div>
          <div className="mt-6">
            <h4 className="text-lg font-medium">Let's Connect</h4>
            <h6 className="mb-4 text-sm text-muted-foreground">
              Know more about me and what I'm up to on my social media
            </h6>
            <Link
              to="https://web.facebook.com/ovel.richy"
              target="_blank"
              rel="noreferrer"
              className="mb-2 flex items-center gap-2"
            >
              <FacebookIcon className="h-6 w-6" />
              <p className="transition-colors hover:text-purple dark:hover:text-purple-50">
                Ovel Tjia
              </p>
            </Link>
            <Link
              to="https://www.instagram.com/ovel_tjia"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <InstagramIcon className="h-6 w-6" />
              <p className="transition-colors hover:text-purple dark:hover:text-purple-50">
                ovel_tjia
              </p>
            </Link>
          </div>
        </div>
        <Card className="mx-auto w-full border-2 border-purple shadow-md shadow-purple-50 xs:max-w-xs">
          <CardContent className="py-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col space-y-5"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your name..."
                          className="focus-visible:ring-purple"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your email..."
                          className="focus-visible:ring-purple"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="your message..."
                          className="focus-visible:ring-purple"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="self-end bg-purple text-white hover:bg-violet-800 dark:hover:bg-purple-50"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
