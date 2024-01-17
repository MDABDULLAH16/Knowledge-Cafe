import React from "react";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = ({ blog, handleBookMark }) => {
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
      <div className="user-container flex">
        <div className="flex ">
          <img src={user_img} alt="" />
          <div className="user-name">
            <h3>{user_name}</h3>
            <p>{post_time}</p>
          </div>
        </div>
        <div className="flex read-time ">
          <p>{post_read_time} min read</p>
          <button onClick={() => handleBookMark(blog)} className="book-mark">
            {" "}
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>
      </div>
      <div className="title">
        <div>
          <h1>{title}</h1>
          <p>{tags}</p>
        </div>
        <a className="mark-as-read">Mark as read</a>
      </div>
      <hr />
    </div>
  );
};

export default Blog;
