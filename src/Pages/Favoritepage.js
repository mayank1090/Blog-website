import React, { useState } from 'react';
import Favorites from '../Components/Favorites';

const FavoritePage = ({favorites}) => {

  return (
    <div style={{textAlign:"center"}}>
      <Favorites
        favorites={favorites}
      />
    </div>
  );
};

export default FavoritePage;
