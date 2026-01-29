import Header from "../components/Header";


import webDesignProject from "../assets/web-design-project.png";
import webDesignProject1 from "../assets/web-design-project1.png";

import mobDesignProject from "../assets/mobile-design-project.png";
import graphicDesigns from "../assets/graphic-designs.png";

import arrowRight from "../assets/arrow-right.png";

export default function () {
  return (
    <>
          
      <main className="font-poppins bg-[#0D1210]  ">
        <Header></Header>

        <section className=" py-6 mb-6  ">
          <div className="">
            <h1 className="text-3xl font-semibold flex justify-center text-white">
              Projects
            </h1>
            {/* Project 1 */}

            <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
              <div className="group p-4 bg-[#182B18]/60 backdrop-blur-md text-[#0D1210]">
                <img
                  className="w-auto object-contain"
                  src={webDesignProject}
                  alt="UI/UX Icon"
                />
              </div>

              <div className="p-4 bg-[#182B18]/60 backdrop-blur-md flex flex-col justify-between space-y-8 px-8 py-16 text-white">
                <p className="text-lg font-semibold">Web Design</p>
                <p className="text-xs font-normal">
                  A modern, user-friendly web designs that are visually
                  appealing, responsive, and easy to navigate.
                </p>

                <div className="flex justify-end">
                  <button className="group">
                    <img
                      className="w-[2rem] object-contain transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:opacity-80 cursor-pointer"
                      src={arrowRight}
                      alt="UI/UX Icon"
                    />
                  </button>
                </div>
              </div>

              <div className="group p-4 bg-[#182B18]/60 backdrop-blur-md text-[#0D1210]">
                <img
                  className=" w-auto object-contain"
                  src={webDesignProject1}
                  alt="UI/UX Icon"
                />
              </div>
            </div>
            {/* End of Project 1 */}

            {/* Project2 */}

            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-[#182B18]/60 backdrop-blur-md flex flex-col justify-between space-y-8 px-8 py-16 text-white">
                <p className="text-lg font-semibold">Mobile Design</p>
                <p className="text-xs font-normal">
                  A modern, user-friendly web designs that are visually
                  appealing, responsive, and easy to navigate.
                </p>

                <div className="flex justify-end">
                  <button className="group">
                    <img
                      className="w-[2rem] object-contain transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:opacity-80 cursor-pointer"
                      src={arrowRight}
                      alt="UI/UX Icon"
                    />
                  </button>
                </div>
              </div>

              <div className="group p-4 bg-[#182B18]/60 backdrop-blur-md text-[#0D1210] rounded-t-l-xl">
                <img
                  className=" w-auto object-contain"
                  src={mobDesignProject}
                  alt="UI/UX Icon"
                />
              </div>

              <div className="bg-[#182B18]/60 backdrop-blur-md flex flex-col justify-between space-y-8 px-8 py-16 text-white">
                <p className="text-lg font-semibold">
                  Prototyping & Wireframing
                </p>
                <p className="text-xs font-normal">
                  A modern, user-friendly web designs that are visually
                  appealing, responsive, and easy to navigate.
                </p>

                <div className="flex justify-end">
                  <button className="group">
                    <img
                      className="w-[2rem] object-contain transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:opacity-80 cursor-pointer"
                      src={arrowRight}
                      alt="UI/UX Icon"
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* End of Project 1 */}
          </div>
        </section>
      </main>
    </>
  );
}
