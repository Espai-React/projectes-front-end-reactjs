import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => (
  <div className="help-layout">
    <h2>Website Help</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
      expedita.
    </p>
    <nav>
      <NavLink to="faq">View the FAQ</NavLink>
      <NavLink to="contact">Contact Us</NavLink>
    </nav>
    <Outlet />
  </div>
);

export default HelpLayout;
