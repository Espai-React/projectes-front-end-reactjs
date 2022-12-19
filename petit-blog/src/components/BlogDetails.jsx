import { useParams } from "react-router-dom";
import { constants } from "../lib/constants/constants.js";
import useFetch from "../lib/hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    dades: blog,
    carregant,
    error,
  } = useFetch(constants.urlBlogFetch + id);
  const [post, setPost] = useState(false);
  const navega = useNavigate();

  const handleClick = () => {
    setPost(true);
    setTimeout(() => {
      fetch(constants.urlBlogFetch + blog.id, {
        method: "DELETE",
      }).then(() => {
        console.log("Blog esborrat");
        setPost(false);
        navega("/");
      });
    }, 2000);
  };

  return (
    <div classNameName="blog-details">
      {carregant && <div>Carregant dades...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Escrit per {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>
            {post ? "Esborrant..." : "Esborrar"}
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
