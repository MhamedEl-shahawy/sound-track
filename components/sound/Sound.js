import React from 'react'
import Styles from "../../styles/Sound.module.css";
import { FaPlayCircle,FaRandom } from "react-icons/fa";
import { useDispatch,useSelector } from 'react-redux';
import {getTrackName} from "../../store/tracks/track";
// import tracks from "../../data/tracks.json";
 const Sound = () => {
  const track = useSelector((state)=> state.trackPlayer.track);
  const dispatch = useDispatch();
  const tracks = ["always with me","ambiant relax","love song","childhood memories","cinematic fairy","fading of the day","forest story acoustic","inspiring cinematic","in the cave","melody of nature","mindfulness relaxation","motivated","soft daydream","stylish lofi chill"];
  return (
    <section className={Styles.container_tracks}>
    <nav className={Styles.filter}>
        <ul className={Styles.filter_lists}>
         <li className={Styles.filter_title}>
            <a>Relax</a>  
         </li>  
         <li className={Styles.filter_title}>

            <a>PoP</a>  
         </li> 
         <li className={Styles.filter_title}>

            <a>Rock</a>  
         </li> 
         <li className={Styles.filter_title}>

            <a>Piano</a>  
         </li> 
        </ul> 
        <a className={Styles.iconRandom} onClick={()=>dispatch(getTrackName({name:tracks[Math.floor(Math.random() * tracks.length)]})) }><FaRandom/></a>
    </nav>
    <ul className={Styles.conatiner_list}>
      {tracks.map((item,i)=>(
        <li className={`${Styles.list} ${track=== item ? Styles.play:""}`} key={i}>
        <a onClick={()=>dispatch(getTrackName({name:item === track? "":item,index:i}))}>
          
           <span className={Styles.icon}>
           {item[i] != undefined && item[i].toString().trim() != "" ? item[i]:item[3]}   
            </span> 
            <p className={Styles.text}>{item}</p>
        </a>  
        
      </li>
      
      ))}   
           
    </ul>
    </section>
  )
}
export default Sound;