import React, { useEffect,  useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';
import Liked from './liked.jpg';
import Jsonplaylist from '../routers/json/playlist.json'


const Sidebar = () => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(()=>{

   setPlaylist(Jsonplaylist.playlists);

  },[playlist]);

  const [click, setClick] = useState(false);

  useEffect(()=>{
    
  },[click]);
  
  function dropdown_open(e){
    e.preventDefault();
    setClick((click) => !click);
  }

  return (
   
    <div className='sidebar-wrapper'>
      <div className='sidebar-wrapper-top-wrapper'>
       <div>
       <i class="fa-solid fa-house"></i>
       <h2><Link to='/' className='link'>Home</Link></h2>
       </div>
       <div>
       <i class="fa-solid fa-magnifying-glass"></i>
       <h2>Search</h2>
       </div>
      </div>

      <div className='sidebar-wrapper-bottom-wrapper'>
       <div className='sidebar-wrapper-bottom-wrapper-top-wrapper'>
         <div className='sidebar-wrapper-bottom-wrapper-top-wrapper-top'>
         <i class="fa-solid fa-book"></i>
         <p>Your Library</p>
         <i class="fa-solid fa-plus"></i>
         <i class="fa-solid fa-arrow-right"></i>
         </div>
         <div className='sidebar-wrapper-bottom-wrapper-top-wrapper-bottom'>
           <button>Playlists</button>
           <button>Artists</button>
         </div>
       </div>
       <div className='sidebar-wrapper-bottom-wrapper-bottom-wrapper'>
          <div className='sidebar-wrapper-bottom-wrapper-bottom-search'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <p>Recent<i class="fa-solid fa-caret-down" onClick={dropdown_open} id='dropdown-open' style={{transform: click ? 'rotate(-180deg)' : 'rotate(0deg)'}}></i></p>
            <div className="recent-dropdown" id='dropdown' style={{display: click ? "block" : "none"}}>
                <li>Sort by</li>
                <li>Recents</li>
                <li>Recently added</li>
                <li>Creator</li>
            </div>
          </div>
          <div className='sidebar-wrapper-bottom-wrapper-bottom-wrapper-scroll'>
           <div className='liked-songs'>
            <div className='liked-songs-img'>
              <img src={Liked} alt="" />
            </div>
            <div className='liked-songs-content'>
              <h3>Liked songs</h3>
              <p><i class="fa-solid fa-thumbtack"></i> Playlist.<span>3 songs</span></p>
            </div>
           </div>
           <div className='bottom-wrapper-playlist'>
            {playlist.map((play)=>(
              <Link className='link' to={play.route}>
              <div key={play.id} className='playlist'>
               <img src={play.img} alt={play.name} />
               <div className='playlist-content'>
                <h4>{play.name}</h4>
                <p>{play.role}</p>
               </div>
              </div>
              </Link>
            ))}
           </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Sidebar