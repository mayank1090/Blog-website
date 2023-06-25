import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./BlogDetails.css"

const BlogDetails = ({ handleAddToFavorite, handleRemoveFromFavorite, favorites }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    if (favorites.find((favorite) => favorite.id === blog.id)) {
      handleRemoveFromFavorite(blog.id);
    } else {
      handleAddToFavorite(blog);
    }
    setIsFavorite(!isFavorite);
  };

  const fetchBlogDetails = async () => {
    try {
      const blogResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const authorResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${blogResponse.data.userId}`
      );
      const commentsResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      );


      setBlog(blogResponse.data);
      setAuthor(authorResponse.data);
      setComments(commentsResponse.data);
    } catch (error) {
      console.error('Error fetching blog details:', error);
    }
  };

  useEffect(() => {
    fetchBlogDetails();
    setIsFavorite(favorites && favorites.some((favorite) => favorite.id === blog?.id));
  }, [id, favorites, blog]);
  ;

  if (!blog || !author) {
    return <div></div>;
  }

  return (
    <div className="blog-details">
      <img className='imageone' src='https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000'/>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
      <button onClick={handleToggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <div className='below-parent'>
      <div className='commentparent'>
      <h3>Comments:{comments.length}</h3>
      <ul className="comments">
        {comments.map((comment) => (
          <li key={comment.id} className="letbe">
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
            <hr></hr>
          </li>
        ))}
      </ul>
      </div>
      <div className="author-info">
        <h3>Author: {author.name}</h3>
        <p>Email: {author.email}</p>
        <p>Website: {author.website}</p>
      </div>

      </div>
    </div>
  );
};

export default BlogDetails;
