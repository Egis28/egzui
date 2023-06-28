import React from 'react';

const AdsCard = ({ ad }) => {
  return (
    <div className="ad-card">
      <h3>{ad.title}</h3>
      <p>Category: {ad.category}</p>
      <p>Description: {ad.description}</p>
    </div>
  );
};

export default AdsCard;
