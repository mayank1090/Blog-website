import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./Postlist.css"

const PostList = ({ posts, postsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  

  return (
    <>
    <h2 className='heading' style={{textAlign:"center"}}>Blog Posts</h2>
    <div className='parent'>
     
      {currentPosts.map((post) => (
        <div className="post-preview" key={post.id}>
          <img className='imageone' src='https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000'/>
          <h3>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.body}</p>
        </div>
      ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            className={pageNumber === currentPage ? 'active' : ''}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </>
  );
};

export default PostList;
