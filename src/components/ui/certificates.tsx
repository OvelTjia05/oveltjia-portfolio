import {
  GCCF1Img,
  GCCF2Img,
  GCCF3Img,
  GCCF4Img,
  GCCF5Img,
  GCCF6Img,
  GCCF7Img,
  GCCF8Img,
  HackerankJavascriptBasicImg,
  HackerRankFrontEndReactImg,
  HackerRankJavascriptIntermediate,
  HackerRankReactBasicImg,
  SummaImg,
  TotalGrdImg,
  UNBKImg,
} from "@/assets/images";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type Certificate = { name: string; image: string; url: string | null };

const CERTIFICATELIST = [
  {
    name: "summa",
    image: SummaImg,
    url: null,
  },
  {
    name: "hackerRank front-end react",
    image: HackerRankFrontEndReactImg,
    url: "https://www.hackerrank.com/certificates/0d1ba290ee38",
  },
  {
    name: "hackerRank react basic",
    image: HackerRankReactBasicImg,
    url: "https://www.hackerrank.com/certificates/4585baf1777a",
  },
  {
    name: "hackerRank javascript intermediate",
    image: HackerRankJavascriptIntermediate,
    url: "https://www.hackerrank.com/certificates/ed6c55391087",
  },
  {
    name: "hackerRank javascript basic",
    image: HackerankJavascriptBasicImg,
    url: "https://www.hackerrank.com/certificates/786921d0e305",
  },
  {
    name: "gccf1",
    image: GCCF1Img,
    url: "https://www.cloudskillsboost.google/public_profiles/d89da420-48dd-4da4-9740-8f9a129822f8/badges/3654407",
  },
  {
    name: "gccf2",
    image: GCCF2Img,
    url: "https://www.cloudskillsboost.google/public_profiles/d89da420-48dd-4da4-9740-8f9a129822f8/badges/3653873",
  },
  {
    name: "gccf3",
    image: GCCF3Img,
    url: "https://www.cloudskillsboost.google/public_profiles/d89da420-48dd-4da4-9740-8f9a129822f8/badges/3409162",
  },
  {
    name: "gccf4",
    image: GCCF4Img,
    url: "https://www.cloudskillsboost.google/public_profiles/d89da420-48dd-4da4-9740-8f9a129822f8/badges/3408514",
  },
  {
    name: "gccf5",
    image: GCCF5Img,
    url: "https://www.cloudskillsboost.google/public_profiles/d89da420-48dd-4da4-9740-8f9a129822f8/badges/3401735",
  },
  {
    name: "gccf6",
    image: GCCF6Img,
    url: "https://www.cloudskillsboost.google/public_profiles/d89da420-48dd-4da4-9740-8f9a129822f8/badges/3268646",
  },
  {
    name: "gccf7",
    image: GCCF7Img,
    url: "https://www.cloudskillsboost.google/public_profiles/d89da420-48dd-4da4-9740-8f9a129822f8/badges/3265400",
  },
  {
    name: "gccf8",
    image: GCCF8Img,
    url: "https://www.cloudskillsboost.google/public_profiles/d89da420-48dd-4da4-9740-8f9a129822f8/badges/3227839",
  },
  {
    name: "unbk",
    image: UNBKImg,
    url: null,
  },
  {
    name: "total grade",
    image: TotalGrdImg,
    url: null,
  },
];
const Certificates = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedImg, setSelectedImg] = useState<Certificate | null>(null);
  const startIndex = selectedImg
    ? CERTIFICATELIST.findIndex((c) => c === selectedImg)
    : 0;

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="columns-2 gap-4 md:columns-3 2xl:columns-4">
      <Dialog>
        {CERTIFICATELIST.map((item, index) => (
          // <div>
          <DialogTrigger asChild key={item.image}>
            <div
              onClick={() => setSelectedImg(item)}
              className="mb-4 animate-slide-up break-inside-avoid overflow-hidden rounded-lg opacity-0"
              style={{
                animationDelay: `${index * 50}ms`,
                animationDuration: "800ms",
              }}
            >
              <img
                src={item.image}
                className="h-auto w-full object-cover duration-200 hover:scale-105"
                alt="Certificate"
              />
            </div>
          </DialogTrigger>
          // </div>
        ))}
        <DialogContent className="rounded-xl p-0 px-12 max-xs:px-10">
          <DialogTitle hidden></DialogTitle>
          <DialogDescription asChild>
            <div className="inline-flex flex-col">
              <Carousel
                setApi={setApi}
                opts={{ startIndex: startIndex }}
                className="w-full"
              >
                <CarouselContent className="">
                  {selectedImg &&
                    CERTIFICATELIST.map((item) => (
                      <CarouselItem key={item.image}>
                        <Link
                          to={item.url ? item.url : item.image}
                          target="_blank"
                          className="relative self-center"
                        >
                          <img
                            src={item.image}
                            className="h-auto w-full rounded-xl object-cover"
                            alt="Certificate"
                          />
                        </Link>
                      </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="text-purple max-xs:-left-10" />
                <CarouselNext className="text-purple max-xs:-right-10" />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                Image {current} of {count}
              </div>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Certificates;
