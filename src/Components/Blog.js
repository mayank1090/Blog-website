import React from 'react';

const Blog = ({ blog }) => {
  return (
    <div className="blog">
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
    </div>
  );
};

export default Blog;
