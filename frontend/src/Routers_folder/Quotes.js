import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Signup from './Signup';
import './Quotes.css';

function Quotes() {
  const [quote, setQuote] = useState('');
  const [image, setImage] = useState(null);
  const [quotesList, setQuotesList] = useState([]);

  // Fetch quotes from backend
  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = () => {
    axios.get('http://localhost:5000/quotes')
      .then(response => setQuotesList(response.data))
      .catch(error => console.error('Error fetching quotes:', error));
  };

  // Handle form submission to upload quote and image
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('quote', quote);
    if (image) formData.append('image', image);

    axios.post('http://localhost:5000/upload', formData)
      .then(() => {
        setQuote('');
        setImage(null);
        fetchQuotes();
      })
      .catch(error => console.error('Error uploading quote:', error));
  };

  return (
    <div className="App">
      <h1>Upload Your Quotes</h1>
      <form className='quote-form' onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your quote"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          required
        ></textarea>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Upload Quote</button>
      </form>

      <h2>QUOTES LIST</h2>
      <div className="quotes-container">
        {quotesList.map((quoteItem) => (
          <div key={quoteItem.id} className="quote-item">
            <p>{quoteItem.quote}</p>
            {quoteItem.image && (
              <img
                src={`http://localhost:5000/${quoteItem.image}`}
                alt="Quote"
                className="quote-image"
              />
            )}
            {/* Remove delete button from here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quotes;
