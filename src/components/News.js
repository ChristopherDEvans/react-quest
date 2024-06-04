import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import styles from '../styles/News.module.css';
import Hints from './Hints';

const newsHints = {
  DataFetching: 'The news data is fetched from an external API when the component mounts.',
  DataDisplay: 'Each news item is displayed with a title and content.',
  NewsItem: 'Hover over the news item to see more details.'
};

function News() {
  const { news } = useContext(DataContext);

  return (
    <div className={styles.news}>
      <h1>News</h1>
      <Hints hints={newsHints} />
      {news.length > 0 ? (
        news.map((item, index) => (
          <div key={index} className={styles.newsItem}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default News;
