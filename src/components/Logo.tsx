import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/" className="font-josefin text-xl font-bold">
      <span className="hidden uppercase tracking-widest sm:inline">Wise</span>
      <span className="sm:hidden">W</span>
    </NavLink>
  );
}

export default Logo;
