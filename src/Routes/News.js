import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getNewsInfo } from '../api/api';
import "./News.css"

function News() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoaing] = useState(false)
  const [error, setError] = useState(false);

  useEffect(() => {
    getNewsInfo()
      .then((res) => res.json())
      .then((res) => setNewsData(res.articles))
      .catch((err) => console.log(err));
  },[])

  console.log(newsData);

  return (
    <div className='newsHeading'>
    <div><h1 style={{margin:'2rem'}}>Cricket News and Editorials</h1></div>
    <div>
      {newsData.map((item) => (
        <div key={item.id} className='news__total'>
          <div className='news__two'>
            <div className='news__image'><img src={item.urlToImage} alt=''/></div>
            <div className='news__details'>
              <div className='news__name'><p> {item.source.name} </p> </div>
              <div className='news__description'><h3> {item.description}</h3> </div>
              <div className='news__title'> <p>{item.title}</p> </div>
              <div className='news__content'> {item.content} </div>
              <div className='news__publishedat'><p> {item.publishedAt}</p> </div>
            </div>

            <div className='news__url'>
            {/* <h2>Latest Photos</h2> */}
            {/* <Link>{item.url}</Link> */}
            </div>
          </div>
          
        </div>
      ))}
    </div>
    </div>
  )
}

export default News