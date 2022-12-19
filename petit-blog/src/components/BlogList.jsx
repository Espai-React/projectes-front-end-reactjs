import { Link } from "react-router-dom";

const BlogList = ({ blogs, blogListTitle }) => {
  return (
    <div classNameName="blogList">
      <h2>{blogListTitle}</h2>
      {blogs.map((blog) => (
        <div classNameName="blog-preview" key={blog.id}>
          <Link to={`blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Escrit per: {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
