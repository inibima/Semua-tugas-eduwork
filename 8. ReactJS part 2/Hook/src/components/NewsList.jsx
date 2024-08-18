import React from 'react';
import PropTypes from 'prop-types';

const NewsList = ({ articles }) => {
  return (
    <div className="row">
      {articles.map((article, index) => (
        <div className="col-md-4" key={index}>
          <div className="card mb-4 shadow-sm">
            <img src={article.urlToImage} className="card-img-top" alt={article.title} />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read more</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

NewsList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      urlToImage: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NewsList;

