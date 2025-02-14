import { Poppins, Roboto } from "next/font/google";
const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const robotoFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function AdditionalFeatures() {
  return (
    <section
      className={`w-full bg-[#1C1C1C] py-16 px-4 ${poppinsFont.className}`}
    >
      <h2
        className={`text-gradient text-center text-4xl ${poppinsFont.className} pb-16`}
      >
        ADDITIONAL FEATURES
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-28">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-12">
          {/* Spiritual NFT Moments */}
          <div className="bg-gradient-to-b from-darkGold to-lightGold rounded-2xl p-6 relative group">
            <div className="absolute top-4 right-4 w-20 h-20">
              <img
                src="/images/polygon.png"
                className="absolute left-8 bottom-8"
              />
              <img
                src="/images/spiritual.png"
                alt=""
                className="w-9 h-9 absolute right-[-18] top-[-14] z-10"
              />
            </div>
            <span className="text-xs font-bold text-gray-950 mb-2 block">
              COMMING SOON
            </span>
            <h3 className="font-normal text-2xl text-white mb-4 pr-16">
              Spiritual NFT <br /> Moments
            </h3>
            <div className="space-y-3">
              <div className="bg-[#111111] p-3 rounded-lg max-w-[27rem]">
                <div className="">
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/white-tick.png"
                      alt="tick"
                      className="bg-gradient-to-b from-darkGold to-lightGold border-2 p-[4px] rounded w-4 h-4"
                    />
                    <p className={`text-white ${robotoFont.className}`}>
                      Collect and Trade:{" "}
                    </p>
                  </div>
                  <p
                    className={`text-white text-xs pl-6 pt-1 ${robotoFont.className}`}
                  >
                    Digital assets representing significant islamic moments and
                    teachings.
                  </p>
                </div>
              </div>
              <div className="bg-[#111111] p-3 rounded-lg max-w-[27rem]">
                <div className="">
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/white-tick.png"
                      alt="tick"
                      className="bg-gradient-to-b from-darkGold to-lightGold border-2 p-[4px] rounded w-4 h-4"
                    />
                    <p className={`text-white ${robotoFont.className}`}>
                      Gamified Experience:{" "}
                    </p>
                  </div>
                  <p
                    className={`text-white text-xs pl-6 ${robotoFont.className} pt-1`}
                  >
                    discover and collect spiritual nfts, adding a new dimension
                    to faith.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hajj and Umrah Planner */}
          <div className="bg-gradient-to-b from-darkGold to-lightGold rounded-2xl p-6 relative group">
            <div className="absolute top-4 right-4 w-20 h-20">
              <img
                src="/images/polygon.png"
                className="absolute left-8 bottom-8"
              />
              <img
                src="/images/hajj.png"
                alt=""
                className="w-9 h-9 absolute right-[-18] top-[-14] z-10"
              />
            </div>
            <span className="text-xs font-bold text-gray-950 mb-2 block">
              COMMING SOON
            </span>
            <h3 className="font-normal text-2xl font-bold text-white mb-4 pr-16">
              Hajj and Umrah <br />
              Planner
            </h3>
            <div className="space-y-3">
              <div className="bg-[#111111] p-3 rounded-lg max-w-[27rem]">
                <div className="">
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/white-tick.png"
                      alt="tick"
                      className="bg-gradient-to-b from-darkGold to-lightGold border-2 p-[4px] rounded w-4 h-4"
                    />
                    <p className={`text-white ${robotoFont.className}`}>
                      Plan Your Pilgrimage:{" "}
                    </p>
                  </div>
                  <p
                    className={`text-white text-xs pl-6 ${robotoFont.className} pt-1`}
                  >
                    resources, guides, and tools for hajj
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Ecosystem Development */}
          <div className="bg-gradient-to-b from-darkGold to-lightGold rounded-2xl p-6 relative group">
            <div className="absolute top-4 right-4 w-20 h-20">
              <img
                src="/images/polygon.png"
                className="absolute left-8 bottom-8"
              />
              <img
                src="/images/financial.png"
                alt=""
                className="w-9 h-9 absolute right-[-18] top-[-14] z-10"
              />
            </div>
            <span className="text-xs font-bold text-gray-950 mb-2 block">
              COMMING SOON
            </span>
            <h3 className="font-normal text-2xl font-bold text-white mb-4 pr-16">
              Financial Ecosystem <br />
              Development
            </h3>
            <div className="space-y-3">
              <div className="bg-[#111111] p-3 rounded-lg max-w-[27rem]">
                <div className="">
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/white-tick.png"
                      alt="tick"
                      className="bg-gradient-to-b from-darkGold to-lightGold border-2 p-[4px] rounded w-4 h-4"
                    />
                    <p className={`text-white text-xs ${robotoFont.className}`}>
                      objective: build a robust financial ecosystem for
                    </p>
                  </div>
                  <p
                    className={`text-white text-xs pl-6 ${robotoFont.className} pt-1`}
                  >
                    {" "}
                    transactions within the app
                  </p>
                </div>
              </div>
              <div className="bg-[#111111] p-3 rounded-lg max-w-[27rem]">
                <div className="">
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/white-tick.png"
                      alt="tick"
                      className="bg-gradient-to-b from-darkGold to-lightGold border-2 p-[4px] rounded w-4 h-4"
                    />
                    <p className={`text-white text-xs ${robotoFont.className}`}>
                      {"dex (decentralized exchange)"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <img
                      src="/images/white-tick.png"
                      alt="tick"
                      className="bg-gradient-to-b from-darkGold to-lightGold border-2 p-[4px] rounded w-4 h-4"
                    />
                    <p className={`text-white text-xs ${robotoFont.className}`}>
                      {"cex (centralized exchange)"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-12">
          {/* Hassle-Free Zakat Calculation */}
          <div className="bg-gradient-to-b from-darkGold to-lightGold rounded-2xl p-6 relative group">
            <div className="absolute top-4 right-4 w-20 h-20">
              <img
                src="/images/polygon.png"
                className="absolute left-8 bottom-8"
              />
              <img
                src="/images/hassle.png"
                alt=""
                className="w-9 h-9 absolute right-[-18] top-[-14] z-10"
              />
            </div>
            <span className="text-xs font-bold text-gray-950 mb-2 block">
              COMMING SOON
            </span>
            <h3 className="font-normal text-2xl font-bold text-white mb-4 pr-16">
              Hassle-Free Zakat <br /> Calculation
            </h3>
            <div className="space-y-3">
              <div className="bg-[#111111] p-3 rounded-lg max-w-[27rem]">
                <div className="">
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/white-tick.png"
                      alt="tick"
                      className="bg-gradient-to-b from-darkGold to-lightGold border-2 p-[4px] rounded w-4 h-4"
                    />
                    <p className={`text-white ${robotoFont.className}`}>
                      Easy Management
                    </p>
                  </div>
                  <p
                    className={`text-white text-xs pl-6 ${robotoFont.className} pt-1`}
                  >
                    Built-in calculator for annual zakat contributions.
                  </p>
                </div>
              </div>
              <div className="bg-[#111111] p-3 rounded-lg max-w-[27rem]">
                <div className="">
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/white-tick.png"
                      alt="tick"
                      className="bg-gradient-to-b from-darkGold to-lightGold border-2 p-[4px] rounded w-4 h-4"
                    />
                    <p className={`text-white ${robotoFont.className}`}>
                      Charitable Giving:{" "}
                    </p>
                  </div>
                  <p
                    className={`text-white text-xs pl-6 ${robotoFont.className} pt-1`}
                  >
                    contribute to causes directly through the app.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location-Based Features */}
          <div className="bg-gradient-to-b from-darkGold to-lightGold rounded-2xl p-6 relative group">
            <div className="absolute top-4 right-4 w-20 h-20">
              <img
                src="/images/polygon.png"
                className="absolute left-8 bottom-8"
              />
              <img
                src="/images/location.png"
                alt=""
                className="w-9 h-9 absolute right-[-18] top-[-14] z-10"
              />
            </div>
            <span className="text-xs font-bold text-gray-950 mb-2 block">
              COMMING SOON
            </span>
            <h3 className="font-normal text-2xl font-bold text-white mb-4 pr-16">
              Location-Based <br /> Features
            </h3>
            <div className="space-y-3">
              <div className="bg-[#111111] p-3 rounded-lg max-w-[27rem]">
                <div className="">
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/white-tick.png"
                      alt="tick"
                      className="bg-gradient-to-b from-darkGold to-lightGold border-2 p-[4px] rounded w-4 h-4"
                    />
                    <p className={`text-white ${robotoFont.className}`}>
                      Local Prayer Times:{" "}
                    </p>
                  </div>
                  <p
                    className={`text-white text-xs pl-6 ${robotoFont.className} pt-1`}
                  >
                    access local prayer times, find the nearest mosques, and
                    discover community events specific to your location.
                  </p>
                </div>
              </div>
              <div className="bg-[#111111] p-3 rounded-lg max-w-[27rem]">
                <div className="">
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/white-tick.png"
                      alt="tick"
                      className="bg-gradient-to-b from-darkGold to-lightGold border-2 p-[4px] rounded w-4 h-4"
                    />
                    <p className={`text-white ${robotoFont.className}`}>
                      Geographic Customization:{" "}
                    </p>
                  </div>
                  <p
                    className={`text-white text-xs pl-6 ${robotoFont.className} pt-1`}
                  >
                    experience a hassanat app that adapts to your geographical
                    and cultural context, providing a more personalized
                    spiritual journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Commercial Expansion */}
          <div className="bg-gradient-to-b from-darkGold to-lightGold rounded-2xl p-6 relative group">
            <div className="absolute top-4 right-4 w-20 h-20">
              <img
                src="/images/polygon.png"
                className="absolute left-8 bottom-8"
              />
              <img
                src="/images/commercial.png"
                alt=""
                className="w-9 h-9 absolute right-[-18] top-[-14] z-10"
              />
            </div>
            <span className="text-xs font-bold text-gray-950 mb-2 block">
              COMMING SOON
            </span>
            <h3 className="font-normal text-2xl  text-white mb-4 pr-16">
              Commercial <br /> Expansion
            </h3>
            <div className="space-y-3">
              <div className="bg-[#111111] p-3 rounded-lg max-w-[27rem]">
                <div className="">
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/white-tick.png"
                      alt="tick"
                      className="bg-gradient-to-b from-darkGold to-lightGold border-2 p-[4px] rounded w-4 h-4"
                    />
                    <p className={`text-white text-xs ${robotoFont.className}`}>
                      objective: open avenues for commerce within the app
                      ecosystem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
