import React, { useEffect, useState } from 'react'
import './homepage.css'
import { Link } from 'react-router-dom';
import Homelist from '../routers/json/Homelaylists.json'

const Homepage = () => {
  let now = new Date().getHours;
  
  const [whattime,setwhattime] = useState(true);
  useEffect(()=>{
    if(now >= 12){
      setwhattime(false);
    }
  },[now]);

  const [homelist,setHomelist] = useState([]);
  useEffect(()=>{
   setHomelist(Homelist.homelist);
  },[homelist]);
  return (
    <div className='homepage'>
      <div className='morning-message'>
      {whattime ? (<h2>
        Good morning
       </h2>) : (<h2>
        Good Evening
       </h2>)}
      </div>
      <div className="homepage-playlists">
         {homelist.map((list)=>(
          <Link className='homepage-playlist' to={list.route}>
          <div key={list.id} className='homepage-playlisting' >
             <img src={list.img} alt="fgd"/>
             <h3>{list.name}</h3>
          </div>
          </Link>
         ))
         }
          
      </div>
    </div>
  )
}

export default Homepage