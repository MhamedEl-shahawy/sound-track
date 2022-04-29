import React,{useState} from 'react'
import Styles from "../../styles/Player.module.css";
import { useSelector,useDispatch } from 'react-redux';
import {getTrackName} from "../../store/tracks/track";

 const Player = () => {
     const track = useSelector((state)=> state.trackPlayer.track);
     const [nextTrack,setNextTrack] = useState("");
     const dispatch = useDispatch();
     const nextPlayer = (e)=>{
      e.target.src = "/tracks/ambiant relax.mp3";
    //  "ambiant relax";
     }
  return (
        <figure className={Styles.player_container}>
            <audio
                className={Styles.player}
                controls
                autoPlay
                onLoadeddata={()=>console.logo("ss")}
                onEnded={()=>dispatch(getTrackName("next"))}
                src={`/tracks/${track}.mp3`}>
                    Your browser does not support the
                    <code>audio</code> element.
            </audio>
            
        </figure>
  )
}
export default Player;