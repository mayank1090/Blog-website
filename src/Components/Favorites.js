import React from 'react';
import { Link } from 'react-router-dom';
import "./favorite.css"

const Favorites = ({favorites}) => {
  if (favorites.length === 0) {
    return <div className="empty-favorites">No favorite blogs yet.</div>;
  }

  return (
    <div className='wholesome'>
      <h2>Favorite Blogs</h2>
      <ul className="favorites-list">
        {favorites.map(favorite => {
          console.log(favorite)
          return(
          <li key={favorite.id}>
            <h3>
            <Link className='lii' to={`/blog/${favorite.id}`}>{favorite.title}</Link>
          </h3>
            <p>{favorite.author}</p>
            
          </li>)
})}
      </ul>
    </div>
  );
};

export default Favorites;
