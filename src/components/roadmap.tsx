import { Poppins } from "next/font/google";
const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "800"],
});
export default function Roadmap() {
  return (
    <section className="w-full bg-[#1C1C1C] py-16 px-4">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-gradient text-4xl ${poppinsFont.className} pb-8`}
          >
            Our Roadmap to Enriching Your
            <br />
            Spiritual Journey
          </h2>
          <p className="text-white/90 max-w-3xl mx-auto text-lg">
            Embark on Hasanat&apos;s ambitious journey to blend Islamic values
            with cutting-edge technology, enhancing both your spiritual and
            daily life across a comprehensive digital ecosystem.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex justify-center">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#8B5E12]"></div>

          {/* Content Container */}
          <div className="relative w-full">
            {/* Q1 2024 */}
            <div className="flex items-start justify-center mb-24">
              <div className="w-1/2"></div>
              <div className="relative px-[6px] flex items-center justify-center">
                {/* Number 1 on right */}
                <div className="absolute -right-24 top-1/2 -translate-y-1/2 z-0 flex items-center">
                  <div className="flex justify-center items-center">
                    <span className="text-gradient font-bold text-xl mr-10 w-56">
                      Q1 2024
                    </span>
                    <img src="/images/one.png" alt="1" className="h-16" />
                  </div>
                </div>
              </div>
              <div className="w-1/2 pl-48">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#B87F1C] flex items-center justify-center">
                    <img
                      src="/images/foundation.png"
                      alt=""
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-[#B87F1C] text-2xl font-semibold">
                    Foundation of Spiritual Habits
                  </h3>
                </div>
                <div className="text-white mt-6">
                  <p className="font-semibold mb-2">Features:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B87F1C]"></div>
                      Prayer Tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B87F1C]"></div>
                      Quran Reading Tracker
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B87F1C]"></div>
                      Quran Listening Tracker
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Q2 2024 */}
            <div className="flex items-start justify-center mb-24">
              <div className="w-1/2 pr-20 text-left">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#B87F1C] flex items-center justify-center">
                    <img
                      src="/images/engagement.png"
                      alt=""
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-[#B87F1C] text-2xl font-semibold">
                    Engagement and Reward System
                  </h3>
                </div>
                <p className="text-white mb-4">
                  Objective: Encourage and incentivize user participation and
                  engagement
                </p>
                <div className="text-white">
                  <p className="font-semibold mb-2">Feature:</p>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B87F1C]"></div>
                    <p>
                      Introduction of the Hasanat coin for rewarding user
                      activities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative px-6 flex items-center justify-center">
                {/* Number 2 on left */}
                <div className="absolute -right-[154px] top-1/2 -translate-y-1/2 z-0 flex items-center">
                  <img src="/images/two.png" alt="2" className="h-16" />
                  <span className="text-[#B87F1C] ml-16 w-56 text-xl font-bold">
                    Q2 2024
                  </span>
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>

            {/* Q3 2024 */}
            <div className="flex items-start justify-center">
              <div className="w-1/2"></div>
              <div className="relative px-6 flex items-center justify-center">
                {/* Number 3 on right */}
                <div className=" absolute -right-[76px] top-1/2 -translate-y-1/2 z-0 flex items-center">
                  <span className="text-[#B87F1C] mr-8 w-56 text-xl font-bold">
                    Q3 2024
                  </span>
                  <img src="/images/three.png" alt="3" className="h-16" />
                </div>
              </div>
              <div className="w-1/2 pl-44">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full px-2 bg-[#B87F1C] flex items-center justify-center">
                    <img
                      src="/images/community1.png"
                      alt=""
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-[#B87F1C] text-2xl font-semibold">
                    Community Building and Enhanced Interaction
                  </h3>
                </div>
                <p className="text-white mb-4">
                  Objective: Strengthen community bonds through competition and
                  shared experiences.
                </p>
                <p className="text-white font-semibold">Features:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//    {/* Q1 2024 */}
//    <div className="flex items-start justify-center mb-24">
//    <div className="w-1/2"></div>
//    <div className="relative px-[6px] flex items-center justify-center">
//      {/* Number 1 on right */}
//      <div className="absolute -right-24 top-1/2 -translate-y-1/2 z-0 flex items-center">
//        <div className="flex justify-center items-center">
//          <span className="text-[#B87F1C] mr-28 w-56">Q1 2024</span>
//          <img src="/images/one.png" alt="1" className="h-16" />
//        </div>
//      </div>
//    </div>
//    <div className="w-1/2 pl-20">
//      <div className="flex items-center gap-4 mb-4">
//        <div className="w-16 h-16 rounded-full bg-[#B87F1C] flex items-center justify-center">
//          <img
//            src="/images/foundation.png"
//            alt=""
//            className="w-8 h-8"
//          />
//        </div>
//        <h3 className="text-[#B87F1C] text-2xl font-semibold">
//          Foundation of Spiritual Habits
//        </h3>
//      </div>
//      <div className="text-white mt-6">
//        <p className="font-semibold mb-2">Features:</p>
//        <ul className="space-y-2">
//          <li className="flex items-center gap-2">
//            <div className="w-1.5 h-1.5 rounded-full bg-[#B87F1C]"></div>
//            Prayer Tracking
//          </li>
//          <li className="flex items-center gap-2">
//            <div className="w-1.5 h-1.5 rounded-full bg-[#B87F1C]"></div>
//            Quran Reading Tracker
//          </li>
//          <li className="flex items-center gap-2">
//            <div className="w-1.5 h-1.5 rounded-full bg-[#B87F1C]"></div>
//            Quran Listening Tracker
//          </li>
//        </ul>
//      </div>
//    </div>
//  </div>

// before

// export default function Roadmap() {
//     return (
//       <section className="w-full bg-[#1C1C1C] py-16 px-4">
//         <div className="max-w-[1300px] mx-auto">
//           {/* Header */}
//           <div className="text-center mb-20">
//             <h2 className="text-4xl font-bold text-[#B87F1C] uppercase tracking-wide mb-6">
//               Our Roadmap to Enriching Your
//               <br />
//               Spiritual Journey
//             </h2>
//             <p className="text-white/90 max-w-3xl mx-auto text-lg">
//               Embark on Hasanat&apos;s ambitious journey to blend Islamic values
//               with cutting-edge technology, enhancing both your spiritual and
//               daily life across a comprehensive digital ecosystem.
//             </p>
//           </div>

//           {/* Timeline */}
//           <div className="relative flex justify-center">
//             {/* Vertical Line */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#8B5E12]"></div>

//             {/* Content Container */}
//             <div className="relative w-full">
//               {/* Q1 2024 */}
//               <div className="flex items-start justify-center mb-24">
//                 <div className="w-1/2"></div>
//                 <div className="relative px-[6px] flex items-center justify-center">
//                   {/* Number 1 on right */}
//                   <div className="absolute -right-24 top-1/2 -translate-y-1/2 z-0 flex items-center">
//                     <div className="flex justify-center items-center">
//                       <span className="text-[#B87F1C] mr-28 w-56">Q1 2024</span>
//                       <img src="/images/one.png" alt="1" className="h-16" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="w-1/2 pl-20">
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="w-16 h-16 rounded-full bg-[#B87F1C] flex items-center justify-center">
//                       <img
//                         src="/images/foundation.png"
//                         alt=""
//                         className="w-8 h-8"
//                       />
//                     </div>
//                     <h3 className="text-[#B87F1C] text-2xl font-semibold">
//                       Foundation of Spiritual Habits
//                     </h3>
//                   </div>
//                   <div className="text-white mt-6">
//                     <p className="font-semibold mb-2">Features:</p>
//                     <ul className="space-y-2">
//                       <li className="flex items-center gap-2">
//                         <div className="w-1.5 h-1.5 rounded-full bg-[#B87F1C]"></div>
//                         Prayer Tracking
//                       </li>
//                       <li className="flex items-center gap-2">
//                         <div className="w-1.5 h-1.5 rounded-full bg-[#B87F1C]"></div>
//                         Quran Reading Tracker
//                       </li>
//                       <li className="flex items-center gap-2">
//                         <div className="w-1.5 h-1.5 rounded-full bg-[#B87F1C]"></div>
//                         Quran Listening Tracker
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               {/* Q2 2024 */}
//               <div className="flex items-start justify-center mb-24">
//                 <div className="w-1/2 pr-20 text-left">
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="w-16 h-16 rounded-full bg-[#B87F1C] flex items-center justify-center">
//                       <img
//                         src="/images/engagement.png"
//                         alt=""
//                         className="w-8 h-8"
//                       />
//                     </div>
//                     <h3 className="text-[#B87F1C] text-2xl font-semibold">
//                       Engagement and Reward System
//                     </h3>
//                   </div>
//                   <p className="text-white mb-4">
//                     Objective: Encourage and incentivize user participation and
//                     engagement
//                   </p>
//                   <div className="text-white">
//                     <p className="font-semibold mb-2">Feature:</p>
//                     <div className="flex items-center gap-2">
//                       <div className="w-1.5 h-1.5 rounded-full bg-[#B87F1C]"></div>
//                       <p>
//                         Introduction of the Hasanat coin for rewarding user
//                         activities.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="relative px-6 flex items-center justify-center">
//                   <div className="w-4 h-4 bg-[#B87F1C] rounded-full z-10"></div>
//                   {/* Number 2 on left */}
//                   <div className="absolute -left-24 top-1/2 -translate-y-1/2 z-0 flex items-center">
//                     <img src="/images/two.png" alt="2" className="h-16" />
//                     <span className="text-[#B87F1C] ml-4">Q2 2024</span>
//                   </div>
//                 </div>
//                 <div className="w-1/2"></div>
//               </div>

//               {/* Q3 2024 */}
//               <div className="flex items-start justify-center">
//                 <div className="w-1/2"></div>
//                 <div className="relative px-6 flex items-center justify-center">
//                   <div className="w-4 h-4 bg-[#B87F1C] rounded-full z-10"></div>
//                   {/* Number 3 on right */}
//                   <div className="absolute -right-24 top-1/2 -translate-y-1/2 z-0 flex items-center">
//                     <span className="text-[#B87F1C] mr-4">Q3 2024</span>
//                     <img src="/images/three.png" alt="3" className="h-16" />
//                   </div>
//                 </div>
//                 <div className="w-1/2 pl-20">
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="w-16 h-16 rounded-full bg-[#B87F1C] flex items-center justify-center">
//                       <img
//                         src="/images/community1.png"
//                         alt=""
//                         className="w-8 h-8"
//                       />
//                     </div>
//                     <h3 className="text-[#B87F1C] text-2xl font-semibold">
//                       Community Building and Enhanced Interaction
//                     </h3>
//                   </div>
//                   <p className="text-white mb-4">
//                     Objective: Strengthen community bonds through competition and
//                     shared experiences.
//                   </p>
//                   <p className="text-white font-semibold">Features:</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//    {/* Q1 2024 */}
//    <div className="flex items-start justify-center mb-24">
//    <div className="w-1/2"></div>
//    <div className="relative px-[6px] flex items-center justify-center">
//      {/* Number 1 on right */}
//      <div className="absolute -right-24 top-1/2 -translate-y-1/2 z-0 flex items-center">
//        <div className="flex justify-center items-center">
//          <span className="text-[#B87F1C] mr-28 w-56">Q1 2024</span>
//          <img src="/images/one.png" alt="1" className="h-16" />
//        </div>
//      </div>
//    </div>
//    <div className="w-1/2 pl-20">
//      <div className="flex items-center gap-4 mb-4">
//        <div className="w-16 h-16 rounded-full bg-[#B87F1C] flex items-center justify-center">
//          <img
//            src="/images/foundation.png"
//            alt=""
//            className="w-8 h-8"
//          />
//        </div>
//        <h3 className="text-[#B87F1C] text-2xl font-semibold">
//          Foundation of Spiritual Habits
//        </h3>
//      </div>
//      <div className="text-white mt-6">
//        <p className="font-semibold mb-2">Features:</p>
//        <ul className="space-y-2">
//          <li className="flex items-center gap-2">
//            <div className="w-1.5 h-1.5 rounded-full bg-[#B87F1C]"></div>
//            Prayer Tracking
//          </li>
//          <li className="flex items-center gap-2">
//            <div className="w-1.5 h-1.5 rounded-full bg-[#B87F1C]"></div>
//            Quran Reading Tracker
//          </li>
//          <li className="flex items-center gap-2">
//            <div className="w-1.5 h-1.5 rounded-full bg-[#B87F1C]"></div>
//            Quran Listening Tracker
//          </li>
//        </ul>
//      </div>
//    </div>
//  </div>
