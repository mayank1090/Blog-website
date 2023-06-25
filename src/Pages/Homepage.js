import React from 'react';
import './HomePage.css';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomePage() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setPosts(response.data);
        console.log(posts)
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <>
    <div className="home-page">
    <div className='homparent'>
    <h2 className='head'>Recent Posts</h2>
        <div className="recent-posts">
         
          {posts.map((post) => {

            if(post.id<4){
              return(
              <div className="post-preview" key={post.id}>
              <img className='imageone' src='https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000'/>
              <h3>
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h3>
              <p>{post.body}</p>
            </div>)
            }
       
          })}
          
        </div>
        <div className="centered-button">
    <Link to={"/blog"}>
      <button className='navigator'>Read More Blogs</button>
    </Link>
  </div>
        </div>
        <div>
      <section className="featured-posts">
      <h2>Featured Posts</h2>
      <div className="post">
        <h3>Post Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum risus nec justo efficitur volutpat.
        </p>
        <a href="#">Read More</a>
      </div>
      <div className="post">
        <h3>Post Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum risus nec justo efficitur volutpat.
        </p>
        <a href="#">Read More</a>
      </div>
    </section>
    </div>
      </div>
      <footer>
        <p>&copy; 2023 Blog Website. All rights reserved.</p>
      </footer>
      </>
    
  );
}

export default HomePage;
