import React, { useEffect, useState } from 'react'
import { getCricketScore, getMatchesInfo } from '../api/api';
import "./HomePage.css"
import axios from 'axios';

function HomePage() {

  const [data, setData] = useState([]);
  const [scoreData, setScoreData] = useState([]);
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

  useEffect(() => {
    getCricketScore()
      .then((res) => res.json())
      .then((response) =>setScoreData( response.data))
      .catch((err) => console.log(err))
  },[])

  // console.log(scoreData);

  // console.log(data);
  return (
    <div className='cricbuzz__home'>
      <div className='cricbuzz__featured'>
        <h3 className='heading__feature'>FEATURED MATCHES</h3>
        <div className='cric__show'>
        {data.map((feature) => {
        
          return <div className='cricbuzz__featured__main' key={feature.id}>
            
                      <div className='cricbuzz__fetured__teamone' >

                        <div className='cricbuzz__featured__firstcountry'>{feature.teamInfo[0].shortname}  </div>
                        <div className='cricbuzz__featured__firstcountry__score'> {feature.score[0].r}-{feature.score[0].w} </div>
                      </div>
                      <div className='cricbuzz__fetured__teamtwo'>
                        <div className='cricbuzz__featured__secondcountry'> {feature.teamInfo[1].shortname} </div>
                        <div className='cricbuzz__featured__secondcountry_score'> {feature.score[1].r}-{feature.score[1].w} </div>
                      </div>
                      <div className='cricbuzz__featured__stauts'><small> {feature.status} </small></div>
                  </div>
        })}
        </div>
      </div>

      <div className='cricbuzz__listCard'>

          {scoreData.map((detail) => {
            return <div className='listcard__main'>
                      <div className='listcard__head'>
                          <div className='matchType'> <h4>{detail.matchType}</h4> </div>
                          <div className='matchinfo'><h4>{detail.ms} </h4></div>
                      </div>
                      <div className='date'>{new Date(detail.dateTimeGMT).toLocaleString()}</div>
                      <div className='country__info'>
                        <div className='countryonename__and__img'>
                          <div className='countryone__img'><img src={detail.t1img} alt=''/></div>
                          <div><h3> {detail.t1} </h3></div>
                        </div>
                        <div className='verses'> <img src='https://i.pinimg.com/736x/5e/8e/e2/5e8ee2377be528c940da84012a165e4b.jpg' alt='' /></div>
                        <div className='countrytwoname__and__img'>
                          <div className='countrytwo__img' > <img src={detail.t2img} alt='' /></div>
                          <div><h3>{detail.t2}</h3> </div>
                        </div>
                      </div>

                      <div className='country__scorecard'>
                        <div>
                          <div>{detail.t1}</div>
                          <div>{detail.t1s}</div>
                        </div>
                        <div>
                          <div>{detail.t2}</div>
                          <div>{detail.t2s}</div>
                        </div>
                      </div>

                      <div className='status'>
                        <h2>Status:{detail.status}</h2>
                      </div>
                    </div>
          })}

          
      </div>
      
    </div>
  )
}

export default HomePage