import Footer from "../components/Footer";
import Header from "../components/Header";
import email from "../assets/email.png";
import mobile from "../assets/phone-call.png";
import ig from "../assets/instagram.png";
import myPic from "../assets/laine.png";

export default function () {
  return (
    <>
      <main className="font-poppins bg-[#0D1210]">
        <Header />

        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            {/* HEADER */}
            <div className="mb-16 text-center">
              <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Work with me!
              </h1>
              <div className="mx-auto h-1 w-16 bg-gradient-to-r from-green-600 to-green-300 rounded-full"></div>
            </div>

            {/* PROJECT */}
            <div className="space-y-12">
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center 
                rounded-2xl bg-green-100/10 backdrop-blur-sm 
                border border-green-900/50 
                transition-all duration-500 
                hover:border-green-900/80 hover:bg-green-900/30 
                overflow-hidden"
              >
                {/* TEXT */}
                <div className="flex flex-col space-y-6 p-4 md:p-10 text-white">
                  <p className="text-sm md:text-base text-white/90">
                    I’m currently open to collaborations, freelance work, and
                    new opportunities. If you’re looking for someone to help
                    bring your ideas to life through thoughtful and creative
                    design, feel free to get in touch. I’d be happy to discuss
                    how we can work together.
                  </p>

                  <h3 className="text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Contacts
                  </h3>

                  <div className="space-y-2 text-sm md:text-base">
                    <div className="flex gap-2">
                      <img className=" aspect-auto w-5 h-5 " src={email} />
                      bautistacharlainejane@gmail.com
                    </div>
                  </div>
                  <div className="space-y-2 text-sm md:text-base">
                    <div className="flex gap-2">
                      <img className=" aspect-auto w-5 h-5 " src={mobile} />
                      +639209858350
                    </div>
                  </div>
                  <div className="space-y-2 text-sm md:text-base">
                    <div className="flex gap-2">
                      <img className=" aspect-auto w-5 h-5 " src={ig} />
                      @lainebautista
                    </div>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="flex items-center justify-center p-4 md:p-0">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      className="w-full max-h-[250px] sm:max-h-[300px] md:max-h-[340px] object-cover"
                      src={myPic}
                      alt="UI/UX Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
