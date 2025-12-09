import Header from "../components/Header";

export default function () {
  return (
    <>
      <main className="font-poppins bg-[#0D1210]">
        <Header></Header>

        <section className="px-6 py-6 mb-6 md:py-16 md:px-16 ">
          <div className="space-y-18">
            <h1 className="text-3xl font-semibold flex justify-center text-white">
              Projects
            </h1>
            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-4 md:gap-x-12 md:gap-y-12 mt-12">
              {/* Projec 1 */}
              {/* <div className="md:mb-4 inline-flex flex-col space-y-2 group w-fit backdrop-blur-md border-t bg-white/10 shadow-2xl rounded-xl py-2 transition-all duration-300 hover:shadow-lg hover:scale-105 text-gray-100">
                <p className="flex justify-center">Management System</p>
                <div className="border-t border-gray-50 opacity-15"></div>

                <img
                  className="w-[500] aspect-auto"
                  src={prop}
                  alt="Propsuite Project"
                />
              </div> */}

    

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
