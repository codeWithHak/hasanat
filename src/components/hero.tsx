import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Poppins, Monoton } from "next/font/google";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["700", "400"],
});
const monotonFont = Monoton({
  subsets: ["latin"],
  weight: "400",
});
export function Hero() {
  return (
    <section className="relative pt-20">
      <div className="hidden lg:absolute inset-0 right-0 z-0 ">
        <Image
          src="/images/hero.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className=" ">
        <Image
          src="/images/hero.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-[60%]"
        />
      </div>
      <div className="container mx-auto px-0 relative z-10 w-[90%] lg:w-[80%]">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          <div className="space-y-4 md:space-y-8">
            <h1
              className={`text-xl md:text-[35px] xl:text-[40px] font-bold text-white max-w-2xl sm:leading-tight lg:leading-tight  ${poppinsFont.className}`}
            >
              NURTURING FAITH THROUGH TECHNOLOGY.
            </h1>
            <div className="space-y-4">
              <h2
                className={`features-font text-5xl md:text-7xl text-white leading-tight ${monotonFont.className}`}
              >
                FEATURES
              </h2>
              <p
                className={`text-4xl md:text-5xl text-white font-light ${poppinsFont.className} `}
              >
                OF HASANAT
              </p>
            </div>
            <p className="text-lg text-white/80 max-w-xl">
              Empowering Your Spiritual Journey with Advanced Features
            </p>
            <Button
              className="relative overflow-hidden bg-[#814E00]
 text-white font-semibold px-6 py-6  rounded-full flex items-center gap-2 group"
            >
              <span className="m-1 absolute inset-y-0 left-0 w-1/2 bg-primary  rounded-full transition-all duration-300 group-hover:w-full  "></span>

              <Image
                src={`/images/play.png`}
                alt="play"
                width={50}
                height={50}
                className="relative z-10 h-5 w-5 transition-transform group-hover:scale-110"
              />

              <span className="relative z-10">WATCH OUR VIDEO</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
