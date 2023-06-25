import React from 'react';

const Post = ({ post, addToFavorites }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => addToFavorites(post)}>Add to Favorites</button>
    </div>
  );
};

export default Post;
