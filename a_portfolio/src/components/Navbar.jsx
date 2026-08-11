import { Link } from "react-router-dom";

const links = [
  { name: "Main", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-10 py-6 font-nav text-blush text-lg">
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className="transition-opacity duration-300 hover:opacity-40"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}