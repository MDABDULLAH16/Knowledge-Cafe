import React, { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";
import "./Blogs.css";
import BookMarked from "../../BookMarked/BookMarked";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  const handleBookMark = (id) => {
    const exist = blog.find((blog) => blog.id === id.id);
    if (exist) {
      alert("its already added");
    } else {
      const newBlog = [...blog, id];
      setBlog(newBlog);
      // console.log(id, newBlog);
    }
  };
  return (
    <div className="blogs-container">
      <div>
        {blogs.map((blog) => (
          <Blog
            blog={blog}
            handleBookMark={handleBookMark}
            key={blog.id}
          ></Blog>
        ))}
      </div>
      <div className="marked-blog">
        <BookMarked blog={blog}></BookMarked>
      </div>
    </div>
  );
};

export default Blogs;
