import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quotes.css'; // Reusing the same styles

function Photography() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [photographyList, setPhotographyList] = useState([]);

  // Fetch photography from backend
  useEffect(() => {
    fetchPhotography();
  }, []);

  const fetchPhotography = () => {
    axios.get('http://localhost:5000/photography')
      .then(response => setPhotographyList(response.data))
      .catch(error => console.error('Error fetching photography:', error));
  };

  // Handle form submission to upload photography and image
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('description', description);
    if (image) formData.append('image', image);

    axios.post('http://localhost:5000/upload-photography', formData)
      .then(() => {
        setDescription('');
        setImage(null);
        fetchPhotography();
      })
      .catch(error => console.error('Error uploading photography:', error));
  };

  return (
    <div className="App">
      <h1>Upload Your Photography</h1>
      <form className='quote-form' onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Upload Photography</button>
      </form>

      <h2>PHOTOGRAPHY LIST</h2>
      <div className="quotes-container">
        {photographyList.map((photoItem) => (
          <div key={photoItem.id} className="quote-item">
            <p>{photoItem.description}</p>
            {photoItem.image && (
              <img
                src={`http://localhost:5000/${photoItem.image}`}
                alt="Photography"
                className="quote-image"
              />
            )}
            {/* Removed delete option from here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photography;
