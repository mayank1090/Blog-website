import React, { useState } from 'react';
import Favorites from '../Components/Favorites';

const FavoritePage = ({favorites}) => {

  return (
    <div style={{textAlign:"center"}}>
      <h1>Welcome to the Favorites Page</h1>
      <Favorites
        favorites={favorites}
      />
    </div>
  );
};

export default FavoritePage;
