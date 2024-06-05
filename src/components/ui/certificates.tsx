import {
  GCCF1Img,
  GCCF2Img,
  GCCF3Img,
  GCCF4Img,
  GCCF5Img,
  GCCF6Img,
  GCCF7Img,
  GCCF8Img,
  Hackerank1Img,
} from "@/assets/images";
import { Link } from "react-router-dom";

const Certificates = () => {
  const certificateList = [
    {
      name: "hacker rank",
      image: Hackerank1Img,
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
  ];
  return (
    <div className="columns-2 gap-4 md:columns-3 2xl:columns-4">
      {certificateList.map((item, index) => (
        <Link
          to={item.url}
          target="_blank"
          key={item.name}
          className="animate-slide-up mb-4 block break-inside-avoid overflow-hidden rounded-lg opacity-0"
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
