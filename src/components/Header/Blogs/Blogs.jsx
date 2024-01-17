import React, { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="blogs-container">
      <div>
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id}></Blog>
        ))}
      </div>
      <div className="marked-blog">
        <h2>Book Marks</h2>
      </div>
    </div>
  );
};

export default Blogs;
