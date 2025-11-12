import homeBg from "../assets/home-bg.jpg";
import figmaIcon from "../assets/figma.png";
import visual from "../assets/visual.png";
import adobe from "../assets/adobe-illustrator.png";
import design from "../assets/design.png";
import code from "../assets/code.png";
import market from "../assets/marketing.png";
import webBg from "../assets/webBg.png";

import Header from "../components/Header";
import Footer from "../components/Footer";
import heroBg from "../assets/bg-images/hero-bg.png";
import iDo from "../assets/bg-images/what-i-do-bg.png";
import getTouch from "../assets/bg-images/get-touch-bg.png";

export default function Homepage() {
  return (
    <>
      <main className="font-poppins bg-[#0D1210]">
        {/* Hero Layout */}

        <div
          className="bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <Header></Header>

          <section className="relative min-h-screen flex flex-col items-center bg-cover bg-center justify-center bg-no-repeat">
            <div className="absolute inset-0 bg-black/40 -z-10"></div>

            <div className="backdrop-blur-md bg-white/10 shadow-2xl md:w-3xl my-6 md:my-0 rounded-2xl px-16 py-12 md:px-24 md:py-12 mx-4 text-center justify-center">
              <p className="text-lg mb-2 text-white">Hi, I'm Laine!</p>

              <h1 className="text-3xl md:text-4xl font-bold transition-all duration-300 hover:scale-105 text-[#B2D3C2] hover:text-gray-200">
                UI/UX Designer & Frontend Developer
              </h1>

              <p className="mt-6 max-w-2xl mx-auto text-gray-100 leading-relaxed">
                Proficient in design, web development, and project execution.
                Skilled in UI/UX, branding, agile management, and building web
                and mobile interfaces. Passionate about creating visually
                compelling and user-friendly digital experiences.
              </p>

              {/* Icons */}
              <div className="flex space-x-3 mt-6 justify-center">
                <img
                  className="w-[28px] h-[28px] object-contain"
                  src={figmaIcon}
                  alt="Figma Icon"
                />
                <img
                  className="w-[28px] h-[28px] object-contain"
                  src={visual}
                  alt="Visual Studio Icon"
                />
                <img
                  className="w-[28px] h-[28px] object-contain"
                  src={adobe}
                  alt="Adobe Icon"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <button className="py-2 px-6 bg-[#333533] text-[#f8f9fa] rounded-full text-sm font-medium hover:bg-[#4b4d4b] transition-colors">
                  Get in touch
                </button>
                <button className="py-2 px-6 border border-[#f8f9fa] text-[#f8f9fa] rounded-full text-sm font-medium hover:bg-[#f8f9fa] hover:text-[#333533] transition-colors">
                  Download CV
                </button>
              </div>
            </div>
          </section>

          {/* End of Hero Layout */}

          {/* What I do */}

          <section
            className="px-6 py-12 mb-6 md:py-20 md:px-16 bg-[#0D1210]"
            style={{ backgroundImage: `url(${iDo})` }}
          >
            <h1 className="text-3xl font-semibold flex justify-center text-white">
              What I Do
            </h1>
            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-12 md:gap-y-12 mt-12 ">
              <div className="group border-t border-l backdrop-blur-md bg-white/10 shadow-2xl rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 text-gray-100">
                <div className="md:mb-4 inline-flex items-center p-4 rounded-full w-fit bg-[#c9e4da] group-hover:bg-[#fdfdfd] transition-colors duration-300">
                  <img
                    className="w-[25px] h-[25px] object-contain"
                    src={design}
                    alt="Code Icon"
                  />
                </div>

                <p>
                  I'm skilled on creating clean, intuitive, and user-centered
                  digital experiences. I combine research, design, and usability
                  to build interfaces that are both functional and visually
                  engaging.
                </p>

                <div className="w-full mt-4 align-text-bottom">
                  <div className="flex justify-between mb-1">
                    <p className="text-lg font-semibold">UI/UX Design</p>
                    <span className="text-lg font-semibold">100%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div
                      className="bg-gray-100 h-3 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="group backdrop-blur-md border-t bg-white/10 shadow-2xl rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 text-gray-100">
                <div className="md:mb-4 inline-flex items-center p-4 rounded-full w-fit bg-[#c9e4da] group-hover:bg-[#fdfdfd] transition-colors duration-300">
                  <img
                    className="w-[25px] h-[25px] object-contain"
                    src={code}
                    alt="Code Icon"
                  />
                </div>
                <p>
                  I'm competent in building user-friendly websites and
                  applications. I specialize in turning designs into clean,
                  interactive code using Tailwind, JavaScript, and modern
                  frameworks like React.
                </p>
                <div className="w-full mt-4 align-text-bottom">
                  <div className="flex justify-between mb-1">
                    <p className="text-lg font-semibold">
                      Frontend Development
                    </p>
                    <span className="text-lg font-semibold">90%</span>
                  </div>
                  <div className="w-full bg-gray-500 rounded-full h-3">
                    <div
                      className="bg-gray-100 h-3 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="group backdrop-blur-md border-t border-r bg-white/10 shadow-2xl rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 text-gray-100">
                <div className="md:mb-4 inline-flex items-center p-4 rounded-full w-fit bg-[#c9e4da] group-hover:bg-[#fdfdfd] transition-colors duration-300">
                  <img
                    className="w-[25px] h-[25px] object-contain"
                    src={design}
                    alt="Code Icon"
                  />
                </div>

                <p>
                  I'm skilled on creating clean, intuitive, and user-centered
                  digital experiences. I combine research, design, and usability
                  to build interfaces that are both functional and visually
                  engaging.
                </p>

                <div className="w-full mt-4 align-text-bottom">
                  <div className="flex justify-between mb-1">
                    <p className="text-lg font-semibold">Technical Support</p>
                    <span className="text-lg font-semibold">80%</span>
                  </div>
                  <div className="w-full bg-gray-500 rounded-full h-3">
                    <div
                      className="bg-gray-100 h-3 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="group backdrop-blur-md border-b border-l bg-white/10 shadow-2xl rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 text-gray-100">
                <div className="md:mb-4 inline-flex items-center p-4 rounded-full w-fit bg-[#c9e4da] group-hover:bg-[#fdfdfd] transition-colors duration-300">
                  <img
                    className="w-[25px] h-[25px] object-contain"
                    src={design}
                    alt="Code Icon"
                  />
                </div>

                <p>
                  I'm skilled on creating clean, intuitive, and user-centered
                  digital experiences. I combine research, design, and usability
                  to build interfaces that are both functional and visually
                  engaging.
                </p>

                <div className="w-full mt-4 align-text-bottom">
                  <div className="flex justify-between mb-1">
                    <p className="text-lg font-semibold">Graphic Design</p>
                    <span className="text-lg font-semibold">80%</span>
                  </div>
                  <div className="w-full bg-gray-500 rounded-full h-3">
                    <div
                      className="bg-gray-100 h-3 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="group backdrop-blur-md border-b bg-white/10 shadow-2xl rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 text-gray-100">
                <div className="md:mb-4 inline-flex items-center p-4 rounded-full w-fit bg-[#c9e4da] group-hover:bg-[#fdfdfd] transition-colors duration-300">
                  <img
                    className="w-[25px] h-[25px] object-contain"
                    src={design}
                    alt="Code Icon"
                  />
                </div>

                <p>
                  I'm skilled on creating clean, intuitive, and user-centered
                  digital experiences. I combine research, design, and usability
                  to build interfaces that are both functional and visually
                  engaging.
                </p>

                <div className="w-full mt-4 align-text-bottom">
                  <div className="flex justify-between mb-1">
                    <p className="text-lg font-semibold"> Media Management</p>
                    <span className="text-lg font-semibold">100%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div
                      className="bg-gray-100 h-3 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="group backdrop-blur-md border-b border-r bg-white/10 shadow-2xl rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 text-gray-100">
                <div className="md:mb-4 inline-flex items-center p-4 rounded-full w-fit bg-[#c9e4da] group-hover:bg-[#fdfdfd] transition-colors duration-300">
                  <img
                    className="w-[25px] h-[25px] object-contain"
                    src={market}
                    alt="Marketing Icon"
                  />
                </div>
                <p>
                  I'm proficient in creating data-driven campaigns that boost
                  brand visibility and drive engagement. I focus on social media
                  promotions, email marketing to deliver measurable results.
                </p>
                <div className="w-full mt-4 align-text-bottom">
                  <div className="flex justify-between mb-1">
                    <p className="text-lg font-semibold">Digital Marketing</p>
                    <span className="text-lg font-semibold">80%</span>
                  </div>
                  <div className="w-full bg-gray-500 rounded-full h-3">
                    <div
                      className="bg-gray-100 h-3 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*End of What I do */}

          {/* Academic Background */}

          <section className="px-6 py-8 md:py-12 md:px-12 space-y-6 text-gray-100">
            <h1 className="text-3xl font-semibold flex justify-center">
              Academic Background
            </h1>

            <div className="md:flex md:justify-between py-4 md:py-8 space-x-4">
              <p className="md:w-1/2">
                Graduated as Bachelor of Science in Computer Science (2021–2025)
                at PHINMA University of Pangasinan College of Urdaneta. During
                her studies, she have taken on leadership roles such as being
                elected Mayor of the Computer Science Society Department. She
                also showcased her creativity and skills by becoming the
                Champion of PUCU-Graphy 2022 (Photography Contest) and was
                honored as the Outstanding Officer of the Year 2022.
              </p>

              <div className="max-w-xl mx-auto pt-4 md:p-0 ">
                <div className="border-l-4 border-gray-300 pl-6 space-y-10">
                  <div className="relative">
                    <p className="text-sm text-gray-300">2025</p>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">
                        {" "}
                        PHINMA University of Pangasinan College or Urdaneta
                      </h3>
                      <p className="text-sm text-gray-300">
                        Graduate of Bachelor of Sscience in Computer Science
                      </p>
                      <p className="text-sm text-gray-300">
                        Selected Mayor of the Compuetr Science Society
                        Department
                      </p>
                      <p className="text-sm text-gray-300">
                        Champion in PUCU-Graphy 2022 (Photography Contest)
                      </p>
                      <p className="text-sm text-gray-300">
                        Awarded as Outstanding Officer of the Year 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End of Academic Background */}

          {/* Start of Work Experience */}

          <section className="px-6 py-8 md:py-12 md:px-12 space-y-6 text-gray-100">
            <h1 className="text-3xl font-semibold flex justify-center">
              Work Experience
            </h1>

            <div className="max-w-xl mx-auto pt-4 md:p-0 ">
              <div className="border-l-4 border-gray-300 pl-6 space-y-10">
                <div className="relative">
                  <p className="text-sm text-gray-300">2025</p>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">
                      {" "}
                      PHINMA University of Pangasinan College or Urdaneta
                    </h3>
                    <p className="text-sm text-gray-300">
                      Graduate of Bachelor of Sscience in Computer Science
                    </p>
                    <p className="text-sm text-gray-300">
                      Selected Mayor of the Compuetr Science Society Department
                    </p>
                    <p className="text-sm text-gray-300">
                      Champion in PUCU-Graphy 2022 (Photography Contest)
                    </p>
                    <p className="text-sm text-gray-300">
                      Awarded as Outstanding Officer of the Year 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* End Start of Work Experience */}

          <section
            className="relative flex flex-col justify-center py-14 px-8 mb-6 md:py-36 "
            style={{ backgroundImage: `url(${getTouch})` }}
          >
            <div className="md:flex md:flex-col md:justify-center md:items-center">
              <h1 className="text-[#f7f7f7] text-3xl md:text-4xl font-bold mb-2 md:text-center">
                Creating Digital Solutions That Connect, Engage, and Inspire
              </h1>
              <p className="text-[#f7f7f7] text-lg md:text-xl">
                Specialized in design, development, and strategic marketing.
              </p>

              <button className="py-2 px-4 bg-[#333533] text-[#f8f9fa] rounded-full text-sn md:text-md mt-6">
                Get in touch
              </button>
            </div>
          </section>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
