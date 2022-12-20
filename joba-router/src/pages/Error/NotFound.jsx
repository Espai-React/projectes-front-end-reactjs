import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h2>Page not found!</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quos
      praesentium voluptate? Velit nulla aliquam asperiores id cum amet deleniti
      animi cumque officia, ipsa dolor expedita minima error fugiat magnam sed!
      Quam mollitia cumque pariatur odit hic beatae provident inventore illo?
      Quam accusantium officiis inventore blanditiis quidem, minus aspernatur
      eaque.
    </p>
    <p>
      Go to <Link to="/">Homepage</Link>
    </p>
  </div>
);

export default NotFound;
