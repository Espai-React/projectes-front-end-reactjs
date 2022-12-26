import useFetch from "../lib/hooks/useFetch";
import { constants } from "../lib/constants/constants.js";
import BlogList from "./BlogList";

const Home = () => {
  const peticio = useFetch(constants.urlFetch);
  const { dades: blogs, carregant, error } = peticio;

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {carregant && <p>Carregant dades...</p>}
      {blogs && <BlogList blogs={blogs} blogListTitle="Tots els Blogs!" />}
    </div>
  );
};

export default Home;
