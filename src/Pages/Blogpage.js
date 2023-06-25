import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from '../Components/Postlist';
import BlogDetails from '../Components/Blogdetails';
import HomePage from './Homepage';

const BlogPage = () => {
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
    <div>
      <PostList posts={posts} postsPerPage={10}/>
      <BlogDetails posts={posts}/>
    </div>
  );
};

export default BlogPage;
