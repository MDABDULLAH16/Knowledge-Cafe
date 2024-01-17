import React from "react";

const Marked = ({ blog }) => {
  return (
    <div>
      <div className="blog-title">
        <h2>{blog.title}</h2>
      </div>
    </div>
  );
};

export default Marked;
