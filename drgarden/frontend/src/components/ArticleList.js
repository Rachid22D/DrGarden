import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/articles/')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the articles!', error);
      });
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
