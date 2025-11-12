import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-md bg-white/10"
          : "bg-transparent backdrop-blur-0 border-none"
      }`}
    >
      <nav className="h-16 flex gap-x-6 justify-center items-center text-white">
        {["Profile", "Projects", "Contacts"].map((item, index) => (
          <a
            key={index}
            href={item === "Profile" ? "/" : `/${item.toLowerCase()}`}
            className="relative group text-sm transition-colors duration-300 hover:text-[#B2D3C2]"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#B2D3C2] transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>
    </header>
  );
}
