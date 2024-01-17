import React from "react";
import "./Blog.css";

const Blog = ({ blog }) => {
  const {
    banner_img,
    title,
    user_name,
    user_img,
    post_time,
    post_read_time,
    tags,
  } = blog;
  return (
    <div className="blog">
      <img src={banner_img} alt="" />
    </div>
  );
};

export default Blog;
