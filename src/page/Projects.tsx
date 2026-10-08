import Header from "../components/Header";
import Footer from "../components/Footer";

import irpmi from "../assets/irpmi-mockup.png";

import graphicDesign from "../assets/graphic-designs.png";

import beanie from "../assets/beanie-ads.png";
import maison from "../assets/perfume-ads.png";
import landingImg from "../assets/landing-one.png";
import landingImg1 from "../assets/landing-two.png";

import arrowUp from "../assets/arrow.png";

export default function Projects() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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

              <div className="flex gap-2 w-full items-center justify-center mt-8">
                <button
                  onClick={() => scrollToSection("web-design")}
                  className="px-6 py-3 rounded-full bg-green-700/40 text-white text-sm md:text-base font-medium 
                  border border-green-900 shadow-md 
                  hover:bg-green-900/20 hover:shadow-lg 
                  transition-all duration-300 
                  backdrop-blur-sm cursor-pointer"
                >
                  UI/UX Design
                </button>

                <button
                  onClick={() => scrollToSection("graphic-design")}
                  className="px-6 py-3 rounded-full bg-green-700/40 text-white text-sm md:text-base font-medium 
                  border border-green-900 shadow-md 
                  hover:bg-green-900/20 hover:shadow-lg 
                  transition-all duration-300 
                  backdrop-blur-sm cursor-pointer"
                >
                  Graphic Design
                </button>
              </div>
            </div>

            <div className="space-y-12">
              <div
                id="web-design"
                className="grid grid-cols-1 md:grid-cols-2 mt-12 px-4 md:px-8 gap-6 group/project relative overflow-hidden rounded-2xl bg-green-300/10 backdrop-blur-sm border border-green-900/50 transition-all duration-500 hover:border-green-900/80 hover:bg-green-900/30 mx-4 md:mx-12"
              >
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

              <div className="mx-4 mt-12 grid overflow-hidden rounded-3xl border border-green-900/50 bg-green-300/10 backdrop-blur-sm transition-all duration-500 hover:border-green-900/80 hover:bg-green-900/30 md:mx-12 md:grid-cols-[0.85fr_1.15fr]">
                {/* TEXT SECTION */}
                <div className="flex flex-col justify-center p-7 text-white sm:p-8 md:p-10 lg:p-12">
                  <span className="mb-6 w-fit rounded-full border border-green-700 bg-green-100/70 px-4 py-2 text-xs font-semibold text-green-700 backdrop-blur-sm">
                    Website Design
                  </span>

                  <h2 className="max-w-lg text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    Community Management
                  </h2>

                  <div className="my-6 h-1 w-10 rounded-full bg-gradient-to-r from-green-600 to-green-300 md:w-12" />

                  <p className="max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
                    Streamlined community management interface designed for ease
                    of use. Ensuring the design is responsive and aligned with
                    the brand&apos;s goals, creating a seamless experience
                    across different devices.
                  </p>

                  <div className="mt-8">
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40 md:text-sm">
                      Key Deliverables
                    </h3>

                    <ul className="space-y-3 text-sm text-white/90 sm:text-base">
                      <li className="flex items-center gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-xs text-green-400">
                          ✓
                        </span>
                        Wireframes
                      </li>

                      <li className="flex items-center gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-xs text-green-400">
                          ✓
                        </span>
                        Mock-ups
                      </li>

                      <li className="flex items-center gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-xs text-green-400">
                          ✓
                        </span>
                        Prototypes
                      </li>
                    </ul>
                  </div>
                </div>

                {/* IMAGE SECTION */}
                <div className="relative flex h-full items-center justify-center overflow-hidden p-4 sm:p-6 md:p-6 lg:p-8">
                  {/* DOTTED BACKGROUND */}
                  <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle,rgba(134,239,172,0.35)_1px,transparent_1px)] [background-size:22px_22px]" />

                  {/* SOFT GLOW */}
                  <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-green-500/10 blur-3xl" />

                  <div className="relative z-10 grid h-full w-full grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* IMAGE 1 — TOP */}
                    <div className="flex h-fit self-start items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-black/10 p-2 backdrop-blur-sm">
                      <img
                        src={landingImg}
                        alt="Community Management website design"
                        className="h-auto max-h-[600px] w-full object-contain transition-transform duration-500 group-hover/project:scale-[1.03]"
                      />
                    </div>

                    {/* IMAGE 2 — BOTTOM */}
                    <div className="flex h-fit self-end items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-black/10 p-2 backdrop-blur-sm">
                      <img
                        src={landingImg1}
                        alt="Community Management website design mockup"
                        className="h-auto max-h-[600px] w-full object-contain transition-transform duration-500 group-hover/project:scale-[1.03]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div id="graphic-design" className="relative mt-12">
                {/* LEFT FADE */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#0D1210] to-transparent md:w-16" />

                {/* RIGHT FADE */}
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#0D1210] to-transparent md:w-16" />

                {/* SCROLL CONTAINER */}
                <div className="flex gap-5 overflow-x-auto overflow-y-hidden px-5 pb-4 pt-2 scrollbar-hide snap-x snap-mandatory scroll-smooth overscroll-x-contain [-webkit-overflow-scrolling:touch] md:gap-6 md:px-12">
                  {/* PROJECT 1 */}
                  <div className="group/project w-[85vw] max-w-[760px] shrink-0 snap-center overflow-hidden rounded-3xl border border-green-900/40 bg-green-300/[0.08] backdrop-blur-md transition-all duration-500 hover:border-green-700/60 hover:bg-green-900/[0.14]">
                    <div className="grid min-h-[420px] grid-cols-1 md:grid-cols-[0.9fr_1.1fr]">
                      {/* TEXT */}
                      <div className="flex flex-col justify-center p-7 sm:p-8 md:p-10 lg:p-12">
                        <span className="mb-5 w-fit rounded-full border border-green-700/60 bg-green-100/10 px-4 py-2 text-xs font-semibold text-green-300 backdrop-blur-sm">
                          Graphic Design
                        </span>

                        <h3 className="max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                          Marketing, Advertisement, and Branding
                        </h3>

                        <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-green-600 to-green-300" />

                        <div className="mt-8">
                          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                            Key Deliverables
                          </p>

                          <ul className="space-y-3 text-sm text-white/80 sm:text-base">
                            <li className="flex items-center gap-3">
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-xs text-green-400">
                                ✓
                              </span>
                              <span>Product Advertisement</span>
                            </li>

                            <li className="flex items-center gap-3">
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-xs text-green-400">
                                ✓
                              </span>
                              <span>Digital Marketing</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* IMAGE */}
                      <div className="flex min-h-[260px] items-center justify-center p-6 md:min-h-full md:p-8">
                        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-black/10 p-3">
                          <img
                            src={beanie}
                            alt="Marketing, Advertisement, and Branding"
                            className="max-h-[280px] w-full object-contain transition-transform duration-500 group-hover/project:scale-[1.03] md:max-h-[340px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* PROJECT 2 */}
                  <div className="group/project w-[85vw] max-w-[760px] shrink-0 snap-center overflow-hidden rounded-3xl border border-green-900/40 bg-green-300/[0.08] backdrop-blur-md transition-all duration-500 hover:border-green-700/60 hover:bg-green-900/[0.14]">
                    <div className="grid min-h-[420px] grid-cols-1 md:grid-cols-[0.9fr_1.1fr]">
                      {/* TEXT */}
                      <div className="flex flex-col justify-center p-7 sm:p-8 md:p-10 lg:p-12">
                        <span className="mb-5 w-fit rounded-full border border-green-700/60 bg-green-100/10 px-4 py-2 text-xs font-semibold text-green-300 backdrop-blur-sm">
                          Graphic Design
                        </span>

                        <h3 className="max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                          Social Media Advertisement
                        </h3>

                        <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-green-600 to-green-300" />

                        <div className="mt-8">
                          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                            Key Deliverables
                          </p>

                          <ul className="space-y-3 text-sm text-white/80 sm:text-base">
                            <li className="flex items-center gap-3">
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-xs text-green-400">
                                ✓
                              </span>
                              <span>Product Advertisement</span>
                            </li>

                            <li className="flex items-center gap-3">
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-xs text-green-400">
                                ✓
                              </span>
                              <span>Digital Marketing</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* IMAGE */}
                      <div className="flex min-h-[260px] items-center justify-center p-6 md:min-h-full md:p-8">
                        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-black/10 p-3">
                          <img
                            src={maison}
                            alt="Social Media Advertisement"
                            className="max-h-[280px] w-full object-contain transition-transform duration-500 group-hover/project:scale-[1.03] md:max-h-[340px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SCROLL HINT */}
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/40">
                  <span>Scroll to explore</span>
                  <span className="text-green-400">→</span>
                </div>
              </div>
              <div
                id="graphic-design"
                className="grid grid-cols-1 md:grid-cols-2 mt-12 px-4 md:px-8 gap-6 group/project relative overflow-hidden rounded-2xl bg-green-300/10 backdrop-blur-sm border border-green-900/50 transition-all duration-500 hover:border-green-900/80 hover:bg-green-900/30 mx-4 md:mx-12"
              >
                {/* TEXT SECTION */}
                <div className="flex flex-col space-y-6 md:space-y-8 p-6 md:p-12 text-white">
                  <div>
                    <span className="inline-block rounded-full bg-green-100/70 px-3 md:px-4 py-2 text-xs md:text-sm font-semibold text-green-700 border border-green-700 backdrop-blur-sm">
                      Graphic Design
                    </span>
                  </div>

                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                    Posters, Banners, and Advertisements
                  </p>

                  <div className="h-1 w-10 md:w-12 bg-gradient-to-r from-green-600 to-green-300 rounded-full"></div>

                  <p className="text-sm md:text-md font-normal text-white/90">
                    Visually engaging graphic designs created to communicate
                    ideas clearly and effectively. Focused on consistency, brand
                    identity, and creating eye-catching visuals across different
                    platforms.
                  </p>

                  <h3 className="text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Key Deliverables
                  </h3>

                  <ul className="space-y-2 text-sm md:text-base">
                    <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-green-500 before:font-bold">
                      Posters
                    </li>
                    <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-green-500 before:font-bold">
                      Banners
                    </li>
                    <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-green-500 before:font-bold">
                      Advertisements
                    </li>
                  </ul>
                </div>

                {/* IMAGE SECTION */}
                <div className="flex items-center justify-center p-4 md:p-0">
                  <img
                    className="w-full max-h-[300px] sm:max-h-[450px] md:max-h-[650px] rounded-xl object-contain"
                    src={graphicDesign}
                    alt="UI/UX Icon"
                  />
                </div>
              </div>
            </div>

            {/* Project 1 */}
          </div>
        </section>
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 
  bg-green-100/40 hover:bg-green-800 
  text-white w-14 h-14 flex items-center justify-center 
  rounded-full shadow-lg 
  transition-all duration-300 
  backdrop-blur-md cursor-pointer"
        >
          <img
            className=" aspect-auto w-6 rounded-xl object-contain"
            src={arrowUp}
            alt="Arrow"
          />
        </button>

        <Footer></Footer>
      </main>
    </>
  );
}
