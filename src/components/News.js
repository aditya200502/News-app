import React from 'react'
import './News.css';
function News({news}) {
  return (
    <div className='news-card'>
        <img src={news.urlToImage} alt={news.title}/>
        <h2>{news.title}</h2>
        <p>{news.description}</p>
        <button className='readmode' onClick={() => window.open(news.url)}>Read More</button>
    </div>
  )
}

export default News;