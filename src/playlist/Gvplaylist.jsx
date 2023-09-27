import React from 'react'

import { useEffect, useState } from 'react'
import './playlist.css'
import Footer from './footer'
const Gvplaylist = () => {

  const[like,setLike] = useState(0);
  useEffect(()=>{
    const heart = document.getElementById("heart");
    if(like === 1){
      heart.style.color="green";
      heart.style.transform="scale(1.1)";
    }
  },[like])
  function likes(){
    setLike(like + 1);
  }
  return (
    <div className='playlists-playlist'>
    <div className='playlist-header'>
       <div className='playlist-header-img'>
         <img src="https://i.ibb.co/JrzDzLr/gv.jpg" alt="cd" />
       </div>
       <div className='playlist-header-content'>
         <p>playlist</p>
         <h1>GV prakash Playlist</h1>
         <h3>Jeya prakash . <span>{like} likes </span>. 1songs</h3>
       </div>
    </div>
    <div className="playlist-wrapper">
     <div className="like-play">
     <i class="fa-solid fa-play"></i>
     <i class="fa-regular fa-heart" onClick={likes} id='heart'></i>
     </div>
     <div className="playlist-list">
       <div className='playlist-list-head'>
         <div className='head-no'>
           <p>#</p>
         </div>
         <div className='head-title'>
           <p>Title</p>
         </div>
         <div className='head-album'>
           <p>Album</p>
         </div>
         <div className='head-date'>
           <p>Date Added</p>
         </div>
         <div className='head-time'>
         <i class="fa-solid fa-clock"></i>
         </div>
       </div>
       <div className='playlist-list-body'>
       <div className='body-no'>
           <p>1</p>
         </div>
         <div className='body-title'>
           <img src="https://i.ibb.co/0273Q3v/taal.jpg"  alt="fgf" />
           <p>Taal se Taal-western version</p>
           <br />
         </div>
         <div className='body-album'>
           <p>Tall(origional motion picture sound....</p>
         </div>
         <div className='body-date'>
           <p>sep,19,2023</p>
         </div>
         <div className='body-time'>
          3:43
         </div>
       </div>
       
     </div>
    </div>
    <div className="playlist-footer">
    <Footer />
    </div>
 </div>
  )
}

export default Gvplaylist