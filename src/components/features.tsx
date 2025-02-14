import React from "react";
import { Poppins } from "next/font/google";
import { FeatureCardProps } from "./feature-card";
import FeatureCard from "./feature-card";
const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "800"],
});

const featureCards: FeatureCardProps[] = [
  {
    image: "islamic.png", // Replace with actual image path
    title: "ISLAMIC ACTIVITIES",
    subtitle: "TRACKING",
    paragraph:
      "Daily Prayers and Devotion: Lay your fine daily prayers, Quran readings, and religious observances. Automated Teaching: Smart technology keeps track of your religious activities effortlessly.",
  },
  {
    image: "pray.png", // Replace with actual image path
    title: "PRAY TO EARN",
    subtitle: "A REVOLUTIONARY CONCEPT",
    paragraph:
      "I am rewards: gain heart tokens for devotion and participation in Islamic activities. Anklingers and achievements: special challenges to earn rewards and achieve spiritual mission.",
  },
  {
    image: "community.png", // Replace with actual image path
    title: "COMMUNITY",
    subtitle: "ENGAGEMENT",
    paragraph:
      "Join a global Muslim network, share insights, and grow in faith together. Community challenges: participate in communal activities to strengthen the bonds of the umrshh.",
  },
  {
    image: "educational.png", // Replace with actual image path
    title: "EDUCATIONAL RESOURCES",
    subtitle: "COMMING SOON",
    paragraph:
      "Islamic Knowledge: Access a library of Islamic teachings, history, and cultural insights. Interactive Learning: Engage with content in an interactive and immersive way, deepening your understanding and appreciation of Islamic traditions and practices.",
  },
  {
    image: "privacy.png", // Replace with actual image path
    title: "PRIVACY AND",
    subtitle: "SECURITY",
    paragraph:
      "Top-notch data security and privacy measures to protect your information. Customizable settings: control your sharing preferences for a secure experience.",
  },
  {
    image: "holistic.png", // Replace with actual image path
    title: "HOLISTIC LIFESTYLE",
    subtitle: "INTEGRATION",
    paragraph:
      "Timely reminders for prayers, fasting, and religious observances. Seamless integration: integrate spiritual practices into daily life with intuitive age design.",
  },
];
function Features() {
  return (
    <div className="bg-[#231C1C]">
      <div className="flex flex-col gap-2 justify-center items-center w-[80%] mx-auto pt-16">
        <h1 className={`text-gradient text-4xl ${poppinsFont.className} pb-8`}>
          CORE FEATURES
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-20">
          {featureCards.map(
            ({ image, title, subtitle, paragraph }: FeatureCardProps) => (
              <FeatureCard
                key={title} // or use a unique identifier
                image={image}
                title={title}
                subtitle={subtitle}
                paragraph={paragraph}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Features;
