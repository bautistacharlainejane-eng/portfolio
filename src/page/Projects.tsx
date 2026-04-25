import Header from "../components/Header";
import Footer from "../components/Footer";


import webDesignProject from "../assets/web-design-project.png";

import mobDesignProject from "../assets/mobile-design-project.png";

export default function () {
  return (
    <>
      <main className="font-poppins bg-[#0D1210]  ">
        <Header></Header>

        <section className=" py-6 mb-6  ">
          <div className="px-12">
            <h1 className="text-3xl font-semibold flex justify-center text-white">
              Projects
            </h1>
            {/* Project 1 */}

            <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
              <div className="p-4 flex flex-col space-y-8 px-8 py-16 text-white">
                <p className="text-2xl font-semibold">Website Design</p>
                <p className="text-md font-normal">
                  By focusing on user needs, visual consistency, and usability.
                  Start with user research and planning, then design wireframes
                  and layouts that are both functional and visually appealing.
                  Ensuring the design is responsive, and aligned with the
                  brand’s goals, creating a seamless experience across different
                  devices.
                </p>
                <ul className="space-y-2">
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

              <div className="group p-4 text-[#0D1210]">
                <img
                  className="w-auto object-contain"
                  src={webDesignProject}
                  alt="UI/UX Icon"
                />
              </div>
            </div>
            {/* End of Project 1 */}

            {/* Project 1 */}

            <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
              <div className="group p-4 text-[#0D1210]">
                <img
                  className="w-auto object-contain"
                  src={mobDesignProject}
                  alt="UI/UX Icon"
                />
              </div>

              <div className="p-4 flex flex-col space-y-8 px-8 py-16 text-white">
                <p className="text-2xl font-semibold">Mobile Design</p>
                <p className="text-md font-normal">
                  Creates mobile designs by focusing on simplicity, usability,
                  and accessibility.Ensuring smooth navigation, clear visual
                  hierarchy, and responsive interactions. The process includes
                  creating wireframes, mock-ups, and prototypes to deliver a
                  consistent and user-friendly experience across different
                  mobile devices.
                </p>
                <ul className="space-y-2">
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
            </div>
            {/* End of Project 1 */}
          </div>
        </section>

        <Footer></Footer>
      </main>
    </>
  );
}
