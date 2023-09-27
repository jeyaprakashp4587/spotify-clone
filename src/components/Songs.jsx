import './songs.css'
import { useSongData , } from '../playlist/Songexport'
import { useEffect, useRef } from 'react';

const Songs = () => {

  const { selectedSong, isclick ,setIsclick} = useSongData();

  const audioRef = useRef(null);
 
  const play = () => {
    setIsclick(((ok) => !ok));
    if (isclick) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
 };

  useEffect(() => {
    if (selectedSong) {
      audioRef.current.src = selectedSong.audio;
      setIsclick(false);
      audioRef.current.play();
    }
  }, [selectedSong]);

  
  return (
     <div className='songs-wrapper'>
    <div className='songs-details'>
      <div className='songs-details-img'>
         {
          selectedSong ? (
             <img src={selectedSong.img} alt="vdg" />
             
          ) : (
            <p>vdf</p>
          )
         }
      </div>
         <div className='songs-details-content'> 
         {
          selectedSong ? (
            <div>
              <p>{selectedSong.name}</p>
              <p>{selectedSong.artist}</p>
              
            </div>
          ) : (
            <div>
              <p>song name</p>
              <p>Artist</p>
            </div>
          )
         }
         </div>
         <div className='songs-details-like'>
         <i class="fa-regular fa-heart"></i>
         </div>
     </div>

     <div className='songs-controls'>
         <div className="controls-div">
          <i class="fa-solid fa-shuffle"></i>
          <i class="fa-solid fa-backward" id='backward'></i>
          <div className='play-pause'>
            { isclick? (<i class="fa-solid fa-play" onClick={play}></i>):(<i onClick={play} class="fa-solid fa-pause"></i>)}
          </div>
          <i class="fa-solid fa-forward" id='forward'></i>
          <i class="fa-solid fa-expand"></i>
         </div>
            
              {/* <button onClick={pausesong}>pause</button> */}
              <audio ref={audioRef}></audio>
    </div>

     <div className='songs-side'>
     <i class="fa-solid fa-play"></i>
     <i class="fa-solid fa-microphone"></i>
     <i class="fa-solid fa-bars"></i>
     <i class="fa-solid fa-computer"></i>
     <i class="fa-solid fa-volume-high"></i>
     <i class="fa-solid fa-expand"></i>
     </div>
    </div>
    
  )
}

export default Songs