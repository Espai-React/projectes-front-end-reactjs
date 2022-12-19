import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { constants } from "../lib/constants/constants.js";

const NouBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [post, setPost] = useState(false);
  const navega = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouBlog = { title, body, author };
    setPost(true);
    setTimeout(() => {
      fetch(constants.urlFetch, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(nouBlog),
      }).then(() => {
        console.log("Blog afegit");
        setPost(false);
        navega("/");
      });
    }, 2000);
  };

  return (
    <div classNameName="create">
      <h2>Afegir un nou blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Títol:</label>
        <input
          type="text"
          placeholder="Títol Blog"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Text:</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required></textarea>
        <label>Autor:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="" disabled></option>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>
        {post ? (
          <button disabled>Carregant...</button>
        ) : (
          <button>Afegeix</button>
        )}
      </form>
    </div>
  );
};

export default NouBlog;
