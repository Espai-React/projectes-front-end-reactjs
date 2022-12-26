import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>El Petit Blog</h1>
      <div className="links">
        <Link to="/">Inici</Link>
        <Link to="nouBlog">Nou Blog</Link>
      </div>
    </nav>
  );
};

export default NavBar;
