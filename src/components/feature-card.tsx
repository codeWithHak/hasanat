import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "800"],
});
const robotoFont = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export type FeatureCardProps = {
  image: string; // Assuming this is a URL or path to an image
  title: string;
  subtitle?: string; // Optional in case some cards don't have a subtitle
  paragraph: string;
};

function FeatureCard({ image, title, subtitle, paragraph }: FeatureCardProps) {
  return (
    <div
      className="flex flex-col gap-2 p-3 max-w-xs rounded-md border border-transparent" // Added rounded-md
      style={{
        borderImage:
          "linear-gradient(to top right, rgba(224, 224, 224, 1) 50%, rgba(255, 255, 255, 0) 100%)", // Adjusted gradient
        borderImageSlice: 1,
      }}
    >
      <Image
        src={`/images/${image}`}
        height={100}
        width={100}
        alt={`${title}`}
        className="object-contain w-full"
        quality={100}
      />
      <h2
        className={`text-gradient ${poppinsFont.className} font-bold text-xl`}
      >
        {title}
      </h2>
      <h3
        className={`text-[#C07F00] ${poppinsFont.className} font-bold text-xl`}
      >
        {subtitle}
      </h3>
      <p
        className={`text-white ${robotoFont.className} text-[15px] leading-relaxed`}
      >
        {paragraph}
      </p>
    </div>
  );
}

export default FeatureCard;
