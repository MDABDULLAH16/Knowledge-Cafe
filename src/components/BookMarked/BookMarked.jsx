import React from "react";
import "./BookMarked.css";
import Marked from "../Marked/Marked";
import { Toaster } from "react-hot-toast";
const BookMarked = ({ blog }) => {
  return (
    <div className="blog-title-length">
      <h1>BookMarked Blogs: {blog.length}</h1>
      {blog.map((blog) => (
        <Marked key={blog.id} blog={blog}></Marked>
      ))}
      <Toaster></Toaster>
    </div>
  );
};

export default BookMarked;
