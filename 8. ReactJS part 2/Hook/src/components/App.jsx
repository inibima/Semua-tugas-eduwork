import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsList from './NewsList';
import SearchBar from './SearchBar';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('latest');

  useEffect(() => {
    fetchNews(query);
  }, [query]);

  const fetchNews = (query) => {
    axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=463e32b1c9394f048f24d78466365381`)
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.error("Error fetching the news: ", error);
      });
  };

  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
    <div className="container">
      <h1 className="my-4">News Portal</h1>
      <SearchBar onSearch={handleSearch} />
      <NewsList articles={articles} />
    </div>
  );
};

export default App;
