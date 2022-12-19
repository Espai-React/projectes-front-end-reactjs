import { Link } from "react-router-dom";

const NoTrobat = () => {
  return (
    <div classNameName="no-trobat">
      <h2>Ho sentim,</h2>
      <p>Pàgina no trobada</p>
      <Link to="/">Tornar a la pàgina principal...</Link>
    </div>
  );
};

export default NoTrobat;
