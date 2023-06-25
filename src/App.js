import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter , Route, Routes,} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/Homepage';
import BlogPage from './Pages/Blogpage';
import FavoritePage from './Pages/Favoritepage';
import BlogDetails from './Components/Blogdetails';

function App() {

  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorite = (blog) => {
    if (!favorites.find((favorite) => favorite.id === blog.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, blog]);
    }
  };
  

  const handleRemoveFromFavorite = (blogId) => {
    setFavorites(prevFavorites => prevFavorites.filter(blog => blog.id !== blogId));
  };

  return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage handleAddToFavorite={handleAddToFavorite}/>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/blog/:id" element={<BlogDetails handleAddToFavorite={handleAddToFavorite} handleRemoveFromFavorite={handleRemoveFromFavorite} favorites={favorites}/>} />
          <Route path="/favorites" element={<FavoritePage favorites={favorites}/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
