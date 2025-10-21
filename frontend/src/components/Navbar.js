import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 flex gap-4">
    <Link to="/">Projects</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

export default Navbar;
