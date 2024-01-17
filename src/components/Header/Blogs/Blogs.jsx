import React, { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";
import "./Blogs.css";
import BookMarked from "../../BookMarked/BookMarked";
import ReadTime from "../../ReadTime/ReadTime";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState([]);
  const [time, setTime] = useState(0);

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
  //set spent read time
  const handleReadTime = (times) => {
    // const newTime = [...time, times];
    setTime(time + times);
    // console.log(times);
  };
  return (
    <div className="blogs-container">
      <div>
        {blogs.map((blog) => (
          <Blog
            blog={blog}
            handleBookMark={handleBookMark}
            handleReadTime={handleReadTime}
            key={blog.id}
          ></Blog>
        ))}
      </div>
      <div className="marked-blog-container">
        <div className="post-read-time">
          <ReadTime time={time}></ReadTime>
        </div>
        <div className="marked-blog">
          <BookMarked blog={blog}></BookMarked>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
