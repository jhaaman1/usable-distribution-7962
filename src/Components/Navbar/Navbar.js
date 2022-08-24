import React from 'react';
import "./Navbar.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import PersonPinIcon from '@mui/icons-material/PersonPin';

function Navbar() {
  return (
    <div className="cricbuzz">
      <div className="cricbuzz__header">
        <div className="cricbuzz__headerImage">
          <Link to='/' >
          <img src="https://www.cricbuzz.com/images/cbz-logo.png" alt="" />
          </Link>
        </div>
        <div className="cricbuzz__headerOptions">
          <div className="cricbuzz__headerOption">
            <Link to="/">
              <h4>Live Scores</h4>
            </Link>
          </div>
          <div className="cricbuzz__headerOption">
            <h4>Schedule</h4>
          </div>
          <div className="cricbuzz__headerOption">
            <Link to="playersearch">
              <h4>Player Search</h4>
            </Link>
          </div>
          <div className="cricbuzz__headerOption">
            <Link to="sportsnews">
              <h4>News</h4>
              <ArrowDropDownIcon />
            </Link>
          </div>
          <div className="cricbuzz__headerOption">
            <Link to='series'>
            <h4>Series</h4>
            <ArrowDropDownIcon />
            </Link>
          </div>
          <div className="cricbuzz__headerOption">
            <Link to='teams'>
            <h4>Teams</h4>
            <ArrowDropDownIcon />
            </Link>
          </div>
          <div className="cricbuzz__headerOption">
            <Link to='videos'>
            <h4>Videos</h4>
            <ArrowDropDownIcon />
            </Link>
          </div>
          <div className="cricbuzz__headerOption">
            <Link to='rankings'>
            <h4>Rankings</h4>
            <ArrowDropDownIcon />
            </Link>
          </div>
          <div className="cricbuzz__headerOption">
            <Link to='more'>
            <h4>More</h4>
            <ArrowDropDownIcon />
            </Link>
          </div>
        </div>
        <div className='cricbuzz__button'>
        <Button variant="cricbuzz__button__round">Cricbuzz Plus</Button>
        </div>

        <div className="cricbuzz__headerSearch">
          <div className="cricbuzz__headerSearchIcon">
            <SearchIcon
              style={{
                color: "white",
              }}
            />
            <input placeholder="Search" />
          </div>
        </div>

        <div className='login' >
              <PersonPinIcon/>
        </div>
        
      </div>

      <div className="cricbuzz__matchStrip">
        <div className="cricbuzz__matchStripLeft">
          <div className="cricbuzz__matchStripLeftMatch">
            <p>MATCHES</p>
          </div>
          <div className="cricbuzz__matchStrip-LeftMatchOptions">
            {/* {match.map((doc) => (
              <div className="cricbuzz__matchStrip-LeftMatchOption" key={doc['unique_id']}>
                <p>{doc["team-1"]}</p>
                <small>vs</small>
                <p>{doc["team-2"]}</p>
              </div>
            ))} */}
          </div>
        </div>
        <div className="cricbuzz__all">
          <p>ALL</p>
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  )
}

export default Navbar