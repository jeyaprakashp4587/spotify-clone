// import { useRef } from 'react'
import { useEffect, useState} from 'react'
import './playlist.css'
import Footer from './footer'
import { useSongData } from './Songexport'
import Songlist from './Songs.json'


const Jpplaylist = () => {

  const [datas, setDatas] = useState([]);

  const {setSelectedSong}  = useSongData();
  const {playAudio} = useSongData();

  // const audioRef = useRef(null);

  useEffect(() => {
     setDatas(Songlist.songslist);

  }, [datas]);

 
  function playsong(song){
     console.log(playAudio);
     setSelectedSong(song);
  };

  const [like,setLike] = useState(0);
  const [LikeTrue,setLikeTrue] = useState(true);

  useEffect( () => {
    const heart = document.getElementById("heart");
    if(like === 1){
      heart.style.color="green";
      heart.style.transform="scale(1.1)";
    }
    else{
      heart.style.color= "rgb(141, 134, 134)";
      heart.style.transform="scale(1.1)";
    }
  },[like]);

  function likes() {
    if(LikeTrue){
    setLike(like + 1);
    }
    else{
      setLike(like - 1);
    }
    setLikeTrue((cli) => !cli);
  }
  return (
    <div className='playlists-playlist'>
      
    <div className='playlist-header'>
       <div className='playlist-header-img'>
         <img src="https://i.ibb.co/PYPsSrT/HD-wallpaper-vibe-iphone-phone.jpg" alt="cd" />
       </div>
       <div className='playlist-header-content'>
         <p>playlist</p>
         <h1>jp Playlist</h1>
         <h3>Jeya prakash . <span>{like} likes </span>. {datas.length} songs</h3>
       </div>
    </div>
    <div className="playlist-wrapper">
     <div className="like-play">
     <i class="fa-solid fa-play"></i>
     <i class="fa-regular fa-heart" onClick={likes} id='heart'></i>
     </div>
    <div className="playlist-list" >
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
       {
      datas.map((song)=>(
        
       <div key={song.id} className='playlist-list-body' onClick={ () => playsong(song)}>
       <div className='body-no'>
           <p>{song.id}</p>
         </div>
         <div className='body-title'>
           <img src={song.img}  alt="fgf" />
           <p>{song.name}</p>
           <br />
         </div>
         <div className='body-album'>
           <p>Tallorigional motion picture sound....</p>
         </div>
         <div className='body-date'>
           <p>sep,19,2023</p>
         </div>
         <div className='body-time'>
          3:43
         </div>
         {/* <audio ref={audioRef}></audio> */}
       </div>
        )) }
    </div>
     </div>
     
    <div className="playlist-footer">
    <Footer />
    </div>
 </div>
 
  )
}


export default Jpplaylist