import React, { useEffect, useState } from 'react';

const AllAds = () => {
  const [allAds, setAllAds] = useState([]);

  useEffect(() => {
    // Simulating fetching all ads from the database
    const fetchAllAds = async () => {
      // Perform API call or database query here to retrieve all ads
      // For example:
      // const response = await fetch('/api/allAds');
      // const data = await response.json();
      // setAllAds(data);

      // Simulated data
      const allAdsData = [
        { id: 1, title: 'Ad 1', category: 'Category 1' },
        { id: 2, title: 'Ad 2', category: 'Category 2' },
        { id: 3, title: 'Ad 3', category: 'Category 1' },
      ];
      setAllAds(allAdsData);
    };

    fetchAllAds();
  }, []);

  return (
    <div>
      <h2>All Ads</h2>
      <ul>
        {allAds.map((ad) => (
          <li key={ad.id}>
            <h3>{ad.title}</h3>
            <p>Category: {ad.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllAds;
