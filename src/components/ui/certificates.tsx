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
import { Link } from "react-router-dom";

const Certificates = () => {
  const certificateList = [
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
  return (
    <div className="columns-2 gap-4 md:columns-3 2xl:columns-4">
      {certificateList.map((item, index) => (
        <Link
          to={item.url ? item.url : item.image}
          target="_blank"
          key={item.name}
          className="mb-4 block animate-slide-up break-inside-avoid overflow-hidden rounded-lg opacity-0"
          style={{
            animationDelay: `${index * 0.2}s`,
            animationDuration: "800ms",
          }}
        >
          <img
            src={item.image}
            className="h-auto w-full object-cover duration-200 hover:scale-105"
            alt="Certificate"
          />
        </Link>
      ))}
    </div>
  );
};

export default Certificates;
