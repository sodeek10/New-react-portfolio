import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex navbar">
      <Link to="/">
        <h5>Home</h5>
      </Link>

      <a href="#abouts">
        <h5>About</h5>
      </a>

      <a href="#projects">
        <h5>Project</h5>
      </a>
      <a href="#contact">
        <h5>Contact</h5>
      </a>
    </div>
  );
};

export default Navbar;
