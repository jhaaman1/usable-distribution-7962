import React, { useEffect, useState } from 'react'
import { getMatchesInfo } from '../api/api';

function HomePage() {

  const [data, setData] = useState([]);
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

  return (
    <div className='cricbuzz_home'>
      
    </div>
  )
}

export default HomePage