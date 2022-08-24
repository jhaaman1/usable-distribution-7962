import React, { useEffect, useState } from 'react'
import { getMatchesInfo } from '../api/api';

function HomePage() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getMatchesInfo()
    .then((res) => {
      // console.log(res);
    })
  },[])

  return (
    <div>HomePage</div>
  )
}

export default HomePage