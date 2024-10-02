import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex items-center justify-between border border-b-slate-950/10 px-6 py-3 font-semibold text-black-secondary lg:border-0 lg:px-20 lg:py-6">
      <Logo />

      <nav className="flex gap-8">
        <ul className="hidden gap-1 md:flex">
          <li>
            <a
              href="#"
              className="px-2 py-1.5 hover:rounded-full hover:bg-stone-200/50"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-2 py-1.5 hover:rounded-full hover:bg-stone-200/50"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-2 py-1.5 hover:rounded-full hover:bg-stone-200/50"
            >
              Help
            </a>
          </li>
        </ul>

        <ul className="flex gap-3">
          <li>
            <a
              href="#"
              className="px-2 py-1.5 hover:rounded-full hover:bg-stone-200/50"
            >
              Log in
            </a>
          </li>
          <li>
            <NavLink
              to="/get-otp"
              className="rounded-full bg-green-primary px-4 py-1.5"
            >
              Start Here
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
