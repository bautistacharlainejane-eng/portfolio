

export default function Footer (){
    return(
<footer className="bg-[#222831] text-white px-6 py-8 font-poppins">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

    <div className="flex items-center gap-2 w-full md:w-auto">
      <span className="font-bold text-xl text-white">CJNB</span>
    </div>

    <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto justify-end">

      <nav className="flex flex-wrap gap-4 text-sm text-gray-300 justify-end">
        <a href="#" className="hover:text-white">About</a>
        <a href="#" className="hover:text-white">Contact</a>
        <a href="#" className="hover:text-white">Report</a>
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
      </nav>

      <div className="flex items-center gap-4 text-gray-400">
        <a href="#" className="hover:text-white">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="hover:text-white">
          <i className="fab fa-x-twitter"></i>
        </a>
        <a href="#" className="hover:text-white">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#" className="hover:text-white">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </div>

  <div className="mt-6 border-t border-gray-700 pt-6 text-sm flex flex-col md:flex-row justify-between items-center text-gray-400 gap-2">
    <p>©2025, CJNB. All Rights Reserved</p>
  </div>
</footer>


    )
}