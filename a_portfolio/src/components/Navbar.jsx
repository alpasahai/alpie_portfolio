import { Link } from "react-router-dom";

const links = [
  { name: "Main", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center gap-3 py-5 text-base md:gap-10 md:py-8 md:text-2xl font-nav text-blush tracking-wide">
      {links.map((link, index) => (
        <div key={link.name} className="flex items-center gap-3 md:gap-10">
          <Link
            to={link.path}
            className="whitespace-nowrap transition-opacity duration-300 hover:opacity-40"
          >
            {link.name}
          </Link>
          {index !== links.length - 1 && (
            <span className="text-blush opacity-50">|</span>
          )}
        </div>
      ))}
    </nav>
  );
}