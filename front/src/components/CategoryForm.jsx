import React, { useState } from 'react';

const CategoryForm = () => {
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform category submission logic here, such as sending data to a server
    console.log('Category form submitted');
    console.log('Category:', category);
    // Reset form field
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
