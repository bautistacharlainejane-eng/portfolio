import Header from "../components/Header";
import Footer from "../components/Footer";

import irpmi from "../assets/irpmi-mockup.png";
import propsuite from "../assets/propsuite-ili-mockup.png";

export default function () {
  return (
    <>
      <main className="font-poppins bg-[#0D1210]  ">
        <Header></Header>

        <section className=" py-6 mb-6  ">
          <div className="">
            <div className="mb-20 text-center">
              <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Featured Projects
              </h1>
              <div className="mx-auto h-1 w-16 bg-gradient-to-r from-green-600 to-green-300  rounded-full"></div>
              <p className="mt-6 text-lg text-slate-400">
                Innovative design solutions crafted with precision and purpose
              </p>
            </div>

            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 mt-12 px-4 md:px-8 gap-6 group/project relative overflow-hidden rounded-2xl bg-green-300/10 backdrop-blur-sm border border-green-900/50 transition-all duration-500 hover:border-green-900/80 hover:bg-green-900/30 mx-4 md:mx-12">
                {/* TEXT SECTION */}
                <div className="flex flex-col space-y-6 md:space-y-8 p-6 md:p-12 text-white">
                  <div>
                    <span className="inline-block rounded-full bg-green-100/70 px-3 md:px-4 py-2 text-xs md:text-sm font-semibold text-green-700 border border-green-700 backdrop-blur-sm">
                      Website Design
                    </span>
                  </div>

                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                    Property Management
                  </p>

                  <div className="h-1 w-10 md:w-12 bg-gradient-to-r from-green-600 to-green-300 rounded-full"></div>

                  <p className="text-sm md:text-md font-normal text-white/90">
                    Ensuring the design is responsive, and aligned with the
                    brand’s goals, creating a seamless experience across
                    different devices.
                  </p>

                  <h3 className="text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Key Deliverables
                  </h3>

                  <ul className="space-y-2 text-sm md:text-base">
                    <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-green-500 before:font-bold">
                      Wireframes
                    </li>
                    <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-green-500 before:font-bold">
                      Mock-ups
                    </li>
                    <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-green-500 before:font-bold">
                      Prototypes
                    </li>
                  </ul>
                </div>

                {/* IMAGE SECTION */}
                <div className="flex items-center justify-center p-4 md:p-0">
                  <img
                    className="w-full max-h-[300px] sm:max-h-[450px] md:max-h-[650px] rounded-xl object-contain"
                    src={irpmi}
                    alt="UI/UX Icon"
                  />
                </div>
              </div>
              {/* End of Project 1 */}

              <div className="grid grid-cols-1 md:grid-cols-2 mt-12 px-4 md:px-8 gap-6 group/project relative overflow-hidden rounded-2xl bg-green-300/10 backdrop-blur-sm border border-green-900/50 transition-all duration-500 hover:border-green-900/80 hover:bg-green-900/30 mx-4 md:mx-12">
                {/* TEXT SECTION */}
                <div className="flex flex-col space-y-6 md:space-y-8 p-6 md:p-12 text-white">
                  <div>
                    <span className="inline-block rounded-full bg-green-100/70 px-3 md:px-4 py-2 text-xs md:text-sm font-semibold text-green-700 border border-green-700 backdrop-blur-sm">
                      Website Design
                    </span>
                  </div>

                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                    Community Management
                  </p>

                  <div className="h-1 w-10 md:w-12 bg-gradient-to-r from-green-600 to-green-300 rounded-full"></div>

                  <p className="text-sm md:text-md font-normal text-white/90">
                    Streamlined community management interface designed for ease
                    of use. Ensuring the design is responsive, and aligned with
                    the brand's goals, creating a seamless experience across
                    different devices.
                  </p>

                  <h3 className="text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Key Deliverables
                  </h3>

                  <ul className="space-y-2 text-sm md:text-base">
                    <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-green-500 before:font-bold">
                      Wireframes
                    </li>
                    <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-green-500 before:font-bold">
                      Mock-ups
                    </li>
                    <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-green-500 before:font-bold">
                      Prototypes
                    </li>
                  </ul>
                </div>

                {/* IMAGE SECTION */}
                <div className="flex items-center justify-center p-4 md:p-0">
                  <img
                    className="w-full max-h-[300px] sm:max-h-[450px] md:max-h-[650px] rounded-xl object-contain"
                    src={propsuite}
                    alt="UI/UX Icon"
                  />
                </div>
              </div>
              
            </div>

            {/* Project 1 */}
          </div>
        </section>

        <Footer></Footer>
      </main>
    </>
  );
}
