import React, { useEffect, useState } from 'react'
import { getPlayerStatus, playerSearh } from '../api/api';

function PlayerSearch() {
  const [playerdata, setPlayerData] = useState([]);

  useEffect(() => {
    playerSearh()
      .then((res) => res.json())
      .then((res) => setPlayerData())
      .catch((err) => console.log(err))
  })
}
console.log((playerdata));
export default PlayerSearch