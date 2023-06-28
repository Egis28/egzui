import React, { useEffect, useState } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Simulating fetching categories from the database
    const fetchCategories = async () => {
      // Perform API call or database query here to retrieve categories
      // For example:
      // const response = await fetch('/api/categories');
      // const data = await response.json();
      // setCategories(data);

      // Simulated data
      const categoriesData = [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
        { id: 3, name: 'Category 3' },
      ];
      setCategories(categoriesData);
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
