import design from "../assets/design.png";
import tech from "../assets/tech.png";
import website_design from "../assets/website-design.png";
import media from "../assets/media.png";

import figma from "../assets/figma.png";
import vs from "../assets/vs.png";
import adobe from "../assets/adobe.png";
import github from "../assets/github.png";

import code from "../assets/code.png";
import market from "../assets/marketing.png";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <>
      <main className="font-poppins">
        {/* Hero Layout */}

        <div className=" bg-[radial-gradient(circle_at_top,_#3f5f46_0%,_#0D1210_60%)]">
          <Header></Header>

          <section
            className="relative pb-16 min-h-screen justify-center flex flex-col overflow-hidden space-y-16
"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 items-center px-12 gap-x-12 md:gap-8">
              <div className="flex flex-col gap-4 ">
                <p className="text-lg text-gray-100 pt-12 md:pt-0">
                  Hey, I am Laine!
                </p>
                <div>
   <h1 className="text-4xl flex flex-col md:text-5xl font-bold transition-all duration-300 hover:scale-105 text-[#B2D3C2] hover:text-gray-200">
                  UI/UX & Graphic Designer 
                </h1>
                <h1 className="text-4xl flex flex-col md:text-5xl font-bold transition-all duration-300 hover:scale-105 text-[#B2D3C2] hover:text-gray-200">Frontend Developer</h1>
                </div>

             
              </div>

              <div className="space-y-2">
                <p className=" mx-auto text-gray-50 leading-relaxed">
                  Proficient in design, web development, and project execution.
                </p>
                <p className="mx-auto text-gray-300 leading-relaxed">
                  Skilled in UI/UX, branding, agile management, and building web
                  and mobile interfaces. Passionate about creating visually
                  compelling and user-friendly digital experiences.
                </p>
                <div className="flex flex-col md:flex-row gap-3 mt-6">
                  <button className="py-2 px-6 bg-[#486948] text-[#f8f9fa] rounded-full text-sm font-medium hover:bg-[#243c24] transition-colors">
                    Get in touch
                  </button>
                  <a
                    href="/projects/cjnb-cv.pdf"
                    download
                    className="py-2 px-6 text-center border border-[#f8f9fa] text-[#f8f9fa] rounded-full text-sm font-medium hover:bg-[#f8f9fa] hover:text-[#333533] transition-colors"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 px-8 md:px-12 md:pt-24 justify-between w-full">
              <div className="text-gray-50 text-lg space-y-2">
                <p className="text-green-500">
                  # <span className="text-gray-50">01</span>
                </p>
                <div className="h-1 w-10 md:w-12 bg-gradient-to-r from-green-600 to-green-300 rounded-full"></div>

                <p> Web & Mobile Design</p>
              </div>
              <div className="text-gray-50 text-lg space-y-2">
                <p className="text-green-500">
                  # <span className="text-gray-50">02</span>
                </p>
                <div className="h-1 w-10 md:w-12 bg-gradient-to-r from-green-600 to-green-300 rounded-full"></div>

                <p> Graphic Design</p>
              </div>
              <div className="text-gray-50 text-lg space-y-2">
                <p className="text-green-500">
                  # <span className="text-gray-50">03</span>
                </p>
                <div className="h-1 w-10 md:w-12 bg-gradient-to-r from-green-600 to-green-300 rounded-full"></div>

                <p> Frontend Development</p>
              </div>
              <div className="text-gray-50 text-lg space-y-2">
                <p className="text-green-500">
                  # <span className="text-gray-50">04</span>
                </p>
                <div className="h-1 w-10 md:w-12 bg-gradient-to-r from-green-600 to-green-300 rounded-full"></div>

                <p> Technical Assistant</p>
              </div>
              <div className="text-gray-50 text-lg space-y-2">
                <p className="text-green-500">
                  # <span className="text-gray-50">05</span>
                </p>
                <div className="h-1 w-10 md:w-12 bg-gradient-to-r from-green-600 to-green-300 rounded-full"></div>

                <p> Project Research</p>
              </div>
            </div>
          </section>

          {/* End of Hero Layout */}

          {/* What I do */}

          <section className="px-6 py-12 mb-6 md:py-20 md:px-16   ">
            <h1 className="text-3xl font-semibold flex justify-center text-white">
              What I Do
            </h1>
            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-12 md:gap-y-12 mt-12 ">
              <div className="group space-y-4 border-t border-l backdrop-blur-md bg-white/10 shadow-2xl rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 text-gray-100">
                <div className="md:mb-4 inline-flex items-center p-4 rounded-full w-fit bg-[#c9e4da] group-hover:bg-[#fdfdfd] transition-colors duration-300">
                  <img
                    className="w-[25px] h-[25px] object-contain"
                    src={website_design}
                    alt="UI/UX Icon"
                  />
                </div>
                <p className="text-lg font-semibold">UI/UX Design</p>

                <p>
                  I'm skilled on creating clean, intuitive, and user-centered
                  digital experiences. I combine research, design, and usability
                  to build interfaces.
                </p>
              </div>

              <div className="group space-y-4 backdrop-blur-md border-t bg-white/10 shadow-2xl rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 text-gray-100">
                <div className="md:mb-4 inline-flex items-center p-4 rounded-full w-fit bg-[#c9e4da] group-hover:bg-[#fdfdfd] transition-colors duration-300">
                  <img
                    className="w-[25px] h-[25px] object-contain"
                    src={code}
                    alt="Code Icon"
                  />
                </div>
                <p className="text-lg font-semibold">Frontend Development</p>
                <p>
                  I specialize in turning designs into clean, interactive code
                  using Tailwind, JavaScript, Laravel and modern frameworks like
                  React.
                </p>
              </div>

              <div className="group space-y-4 backdrop-blur-md border-t border-r bg-white/10 shadow-2xl rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 text-gray-100">
                <div className="md:mb-4 inline-flex items-center p-4 rounded-full w-fit bg-[#c9e4da] group-hover:bg-[#fdfdfd] transition-colors duration-300">
                  <img
                    className="w-[25px] h-[25px] object-contain"
                    src={tech}
                    alt="Technical Support Icon"
                  />
                </div>
                <p className="text-lg font-semibold">Technical Support</p>

                <p>
                  I provide efficient technical assistance by maintaining system
                  performance, and ensuring smooth operation of hardware and
                  software
                </p>
              </div>

              <div className="group space-y-4 backdrop-blur-md border-b border-l bg-white/10 shadow-2xl rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 text-gray-100">
                <div className="md:mb-4 inline-flex items-center p-4 rounded-full w-fit bg-[#c9e4da] group-hover:bg-[#fdfdfd] transition-colors duration-300">
                  <img
                    className="w-[25px] h-[25px] object-contain"
                    src={design}
                    alt="Graphic Design Icon"
                  />
                </div>
                <p className="text-lg font-semibold">Graphic Design</p>

                <p>
                  From logos and branding to digital, I focus on combining
                  creativity and strategy to deliver impactful visuals that
                  engage audiences.
                </p>
              </div>

              <div className="group space-y-4 backdrop-blur-md border-b bg-white/10 shadow-2xl rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 text-gray-100">
                <div className="md:mb-4 inline-flex items-center p-4 rounded-full w-fit bg-[#c9e4da] group-hover:bg-[#fdfdfd] transition-colors duration-300">
                  <img
                    className="w-[25px] h-[25px] object-contain"
                    src={media}
                    alt="Media Management Icon"
                  />
                </div>

                <p className="text-lg font-semibold"> Media Management</p>

                <p>
                  I handle and organize digital content across various
                  platforms, ensuring consistent branding and effective audience
                  engagement.
                </p>
              </div>

              <div className="group space-y-4 backdrop-blur-md border-b border-r bg-white/10 shadow-2xl rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 text-gray-100">
                <div className="md:mb-4 inline-flex items-center p-4 rounded-full w-fit bg-[#c9e4da] group-hover:bg-[#fdfdfd] transition-colors duration-300">
                  <img
                    className="w-[25px] h-[25px] object-contain"
                    src={market}
                    alt="Marketing Icon"
                  />
                </div>
                <p className="text-lg font-semibold"> Digital Marketing</p>

                <p>
                  I create engaging promotional content that captures audience
                  attention and drives brand growth
                </p>
              </div>
            </div>
          </section>

          {/* Start of Work Experience */}
          <section className="py-12 px-6 md:px-16 space-y-12 text-gray-100">
            <h1 className="text-3xl font-semibold flex justify-center">
              Work Experience
            </h1>

            <div className="max-w-5xl mx-auto">
              {/* Timeline */}
              <div
                className="relative flex flex-col gap-12 md:gap-16 
      before:hidden md:before:block before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-px before:bg-gray-300"
              >
                {/* Item 1 */}
                <div className="relative flex flex-col md:flex-row md:justify-between md:items-center">
                  {/* Left side */}
                  <div className="md:w-1/2 md:pr-8 text-right">
                    <h3 className="text-lg font-semibold text-gray-300">
                      The PMO Co.
                    </h3>
                    <p className="text-sm text-gray-500">
                      June, 2025 - Present
                    </p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#44594e] border-4 border-white rounded-full shadow"></div>

                  {/* Right side */}
                  <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
                    <h4 className="text-gray-100 font-semibold mb-1">
                      UI/UX Designer and Frontend Developer
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Improving an existing website by developing new features,
                      creating and refining user interfaces to enhance overall
                      functionality, usability, and performance.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative flex flex-col md:flex-row md:justify-between md:items-center">
                  {/* Left side */}
                  <div className="md:w-1/2 md:pr-8 text-right">
                    <h3 className="text-lg font-semibold text-gray-300">
                      Cura Property Management Corp.
                    </h3>
                    <p className="text-sm text-gray-500">
                      December, 2024 - March, 2025
                    </p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#44594e] border-4 border-white rounded-full shadow"></div>

                  {/* Right side */}
                  <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
                    <h4 className="text-gray-100 font-semibold mb-1">
                      IT Intern
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Enhancing an existing website by adding new features to
                      improve functionality, user experience, and performance.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative flex flex-col md:flex-row md:justify-between md:items-center">
                  {/* Left side */}
                  <div className="md:w-1/2 md:pr-8 text-right">
                    <h3 className="text-lg font-semibold text-gray-300">
                      Commission Project
                    </h3>
                    <p className="text-sm text-gray-500">2024</p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#44594e] border-4 border-white rounded-full shadow"></div>

                  {/* Right side */}
                  <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
                    <h4 className="text-gray-100 font-semibold mb-1">
                      Poster Advertisements and Website Design
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Utilized Figma and Adobe Illustrator for high-quality
                      graphic design and user interface solutions.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="relative flex flex-col md:flex-row md:justify-between md:items-center">
                  {/* Left side */}
                  <div className="md:w-1/2 md:pr-8 text-right">
                    <h3 className="text-lg font-semibold text-gray-300">
                      Municipality of Sison Pangasinan
                    </h3>
                    <p className="text-sm text-gray-500">June-July, 2024</p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#44594e] border-4 border-white rounded-full shadow"></div>

                  {/* Right side */}
                  <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
                    <h4 className="text-gray-100 font-semibold mb-1">
                      Special Program Employment for Students
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Conducted hazard mapping to support safety and risk
                      management initiatives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* End Start of Work Experience */}

          <section className="relative flex flex-col">
            <div className="md:flex md:flex-col md:justify-center md:items-center py-8 px-8 md:py-14">
              <h1 className="text-[#f7f7f7] text-2xl md:text-3xl font-bold mb-2 md:text-center">
                Creating Digital Solutions That Connect, Engage, and Inspire
              </h1>
              <p className="text-[#f7f7f7] text-lg md:text-xl">
                Specialized in design, development, and strategic marketing.
              </p>

              <button className="py-2 px-4 bg-[#486948] text-[#f8f9fa] rounded-full text-sn md:text-md mt-6">
                Get in touch
              </button>
            </div>

            <div className="backdrop-blur-sm mb-12 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-12 md:space-y-0 py-8 px-8">
              {/* Figma */}
              <div className="flex items-center space-x-2">
                <img
                  className="aspect-ratio h-[20px] md:h-[30px] object-contain"
                  src={figma}
                  alt="Figma Icon"
                />
                <p className="text-[#F7F7F7] text-xl sm:text-2xl font-medium">Figma</p>
              </div>

              {/* Visual Studio Code */}
              <div className="flex items-center space-x-2">
                <img
                  className="aspect-ratio h-[20px] md:h-[30px] object-contain"
                  src={vs}
                  alt="Visual Studio Code Icon"
                />
                <p className="text-[#F7F7F7] text-xl sm:text-2xl font-medium">
                  Visual Studio Code
                </p>
              </div>

              {/* GitHub */}
              <div className="flex items-center space-x-2">
                <img
                  className="aspect-ratio h-[20px] md:h-[30px] object-contain"
                  src={github}
                  alt="GitHub Icon"
                />
                <p className="text-[#F7F7F7] text-xl sm:text-2xl font-medium">GitHub</p>
              </div>

              {/* Adobe Illustrator */}
              <div className="flex items-center space-x-2">
                <img
                  className="aspect-ratio h-[20px] md:h-[30px] object-contain"
                  src={adobe}
                  alt="Adobe Illustrator Icon"
                />
                <p className="text-[#F7F7F7] text-xl sm:text-2xl font-medium">
                  Adobe Illustrator
                </p>
              </div>
            </div>
          </section>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
