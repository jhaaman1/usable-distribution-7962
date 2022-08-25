import React, { useEffect, useState } from 'react'
import { getMatchesInfo, getNewsData } from '../api/api';
import "./HomePage.css"
import axios from 'axios';

function HomePage() {

  const [data, setData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMatchesInfo()
    .then((res) => {
      return res.json();
    })
    .then((res) => setData(res.data))
    .catch((err) => {
      console.log(err)
    })
  },[])

  console.log(data);

 useEffect(() => {
  getNewsData()
  .then(function (response) {
    setNewsData(response.data);
  }).catch(function (error) {
    console.error(error);
  });
 },[])

//  console.log(newsData);

  return (
    <div className='cricbuzz__home'>
      <div className='cricbuzz__featured'>
        <h3>FEATURED MATCHES</h3>
        {/* <div className='cric__show'>
        {data.map((feature,i) => {
          console.log(feature.score[1].r)
          return <div className='cricbuzz__featured__main' key={feature.id}>
            
                      <div className='cricbuzz__fetured__teamone' key={i}>

                        <div className='cricbuzz__featured__firstcountry'> {feature.teamInfo[0].shortname} </div>
                        <div className='cricbuzz__featured__firstcountry__score'> {feature.score[0].r} </div>
                      </div>
                      <div className='cricbuzz__fetured__teamtwo'>
                        <div className='cricbuzz__featured__secondcountry'> {feature.teamInfo.shortname} </div>
                        <div className='cricbuzz__featured__secondcountry_score'> {feature.score.r} </div>
                      </div>
                      <div className='cricbuzz__featured__stauts'> {feature.status} </div>
                  </div>
        })}
        </div> */}
      </div>

      <div className='cricbuzz__news'>
        <div><h3>LATEST NEWS</h3></div>

        <div className='cricbuzz__newsstory'>
          {data.map((story) => {
            console.log(data);
            return <div className='cricbuzz__storylist'>
              <div><p>{story.coverImage.source}</p></div>
              <div className='news__hline'> <h2> {story.hline} </h2> </div>
              <div className=''> <h5> {story.coverImage.caption} </h5> </div>
              <div className=''> <h5> {story.intro} </h5> </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default HomePage