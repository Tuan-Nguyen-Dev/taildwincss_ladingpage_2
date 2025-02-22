import { Link } from "react-router";
import MenuDesktop from "./MenuDesktop";
import { Button } from "./ui/button";
import MenuMobile from "./MenuMobile";

const Navbar = () => {
  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 border-b-gray-300">
      <nav className="container mx-auto px-4 py-2 sm:px-6 md:px-5">
        <div className="flex justify-between items-center h-16">
          <div>
            {/* Logo */}
            <Link to={"/"} className="text-xl font-bold">
              Landing Page <span className="text-blue-400">UI</span>
            </Link>
          </div>
          {/* Menu Destop */}
          <MenuDesktop />

          {/* Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link to={"/"} className="hover:text-gray-300 p-3 hidden xl:block">
              Login
            </Link>
            <Link to={"/"} className="hover:text-gray-300 p-3 hidden xl:block">
              Contact to sales
            </Link>
            <Link to={"/"} className="hover:text-gray-300">
              <Button
                variant={"outline"}
                className="bg-blue-400 border-none hover:bg-blue-80000"
              >
                Get Stated It's free
              </Button>
            </Link>
          </div>

          {/* Menu Mobile */}
          <MenuMobile />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
