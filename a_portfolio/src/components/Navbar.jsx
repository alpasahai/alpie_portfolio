import { Link } from "react-router-dom";

const links = [
  { name: "Main", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center gap-10 py-8 font-nav text-blush text-lg tracking-wide">
      {links.map((link, index) => (
        <div key={link.name} className="flex items-center gap-10">
          <Link
            to={link.path}
            className="transition-opacity duration-300 hover:opacity-40"
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