import React, { useEffect, useState } from "react";
import { getPlayerInfo } from "../api/api";
import SearchIcon from "@mui/icons-material/Search";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import { makeStyles } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '80%',
//   },
//   heading: {
//     fontSize: "1.1rem",
//     fontWeight: "500",
//   },
// }));

function SimpleAccordion({ player }) {
  // const classes = useStyles()
  return (
    <div className="classes.root">
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <div className="player__name">
            <h4>{player.name}</h4>
          </div>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </div>
  );
}

function PlayerSearch() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search)
 

  useEffect(() => {
    if (search !== "") {
      getPlayerInfo(search).then((player) => {
        setPlayers(player.data);
        console.log(player.data);
      });
    }
  }, [search]);

  

  return (
    <>
      <div className="cricbuzz__headerSearch">
        <div className="cricbuzz__headerSearchIcon">
          <SearchIcon
            style={{
              color: "white",
            }}
          />
          <label htmlFor="search-form"/>
          <input
          type='search'
            placeholder="Search"
            id='search-form'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2>Search Player</h2>
        {players?.map((player) => (
          <SimpleAccordion key={player.id} player={player} />
        ))}
      </div>
    </>
  );
}

export default PlayerSearch;
