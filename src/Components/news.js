import React from 'react'
import "./news.css"

function News2({news}) {
  return (<div className='news-card'>
    <img src={news.urlToImage} alt={news.title}/>
      <h2>{news.title}</h2>
      <p>{news.description}</p>
      <button onClick={()=>window.open(news.url)}>read more</button>
  </div>
  )
}

export default News2