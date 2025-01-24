import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Stories.css'; // Ensure your CSS file is styled appropriately

function Stories() {
  const [story, setStory] = useState('');
  const [storiesList, setStoriesList] = useState([]);

  // Fetch stories from backend
  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = () => {
    axios.get('http://localhost:5000/stories')
      .then(response => setStoriesList(response.data))
      .catch(error => console.error('Error fetching stories:', error));
  };

  // Handle form submission to upload a story
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/upload-story', { story })
      .then(() => {
        setStory('');
        fetchStories();
      })
      .catch(error => console.error('Error uploading story:', error));
  };

  return (
    <div className="App">
      <h1>Write a Stories</h1>
      <form className='story-form' onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your story"
          value={story}
          onChange={(e) => setStory(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit Story</button>
      </form>

      <h2>STORIES LIST</h2>
      <div className="stories-container">
        {storiesList.map((storyItem) => (
          <div key={storyItem.id} className="story-item">
            <p>{storyItem.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
