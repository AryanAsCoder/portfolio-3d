import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header mt-5">
      <NavLink
        to="/"
        className="w- h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">Aryan</p>
      </NavLink>
      <nav className="flex text-md gap-3 font-medium">
        <NavLink to='/about' className={({ isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
            About
        </NavLink>
        <NavLink to='/projects' className={({ isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
            Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
            Contact
        </NavLink>

      </nav>
    </header>
  );
};

export default Navbar;
