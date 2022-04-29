import React from 'react'
import Styles from "../../styles/Sound.module.css";
import { FaPlayCircle } from "react-icons/fa";
import { useDispatch,useSelector } from 'react-redux';
import {getTrackName} from "../../store/tracks/track";
 const Sound = () => {
  const track = useSelector((state)=> state.trackPlayer.track);
  const dispatch = useDispatch();
  return (
    <ul className={Styles.conatiner_list}>
      {["always with me","ambiant relax","love song","childhood memories","cinematic fairy","fading of the day","forest story acoustic","inspiring cinematic","in the cave","melody of nature","mindfulness relaxation","motivated","soft daydream","stylish lofi chill"].map((item,i)=>(
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
  )
}
export default Sound;