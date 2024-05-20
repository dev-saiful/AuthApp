import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" bg-teal-300">
      <div className="relative w-[1080px] mx-auto flex items-center justify-between">
        <Link to="/">
          <img 
          src="./public/vite.svg" alt="logo"
          className="cursor-pointer py-7 pr-7"
           />
        </Link>
        <ul className="flex gap-4">
        <li className=" py-7 hover:text-orange-400 cursor-pointer transition-all duration-200 relative group">
          <NavLink  to="/">
            Home
          </NavLink>
          <div className=" absolute bottom-0 w-full h-1 bg-orange-400 hidden group-hover:block transition-all duration-200"></div>
        </li>
        <li className=" py-7 hover:text-orange-400 cursor-pointer transition-all duration-200 relative group">
          <NavLink  to="/login">
            Login
          </NavLink>
          <div className=" absolute bottom-0 w-full h-1 bg-orange-400 hidden group-hover:block transition-all duration-200"></div>
        </li>
        <li className=" py-7 hover:text-orange-400 cursor-pointer transition-all duration-200 relative group">
          <NavLink  to="/register">
            Register
          </NavLink>
          <div className=" absolute bottom-0 w-full h-1 bg-orange-400 hidden group-hover:block transition-all duration-200"></div>
        </li>
        </ul>
        <div className="flex gap-4">
          <button className="py-3 px-5 bg-orange-400 border rounded-sm text-sm">Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
