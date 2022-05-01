import React,{useState} from 'react'
import Styles from "../../styles/Sound.module.css";
import { FaPlayCircle,FaRandom } from "react-icons/fa";
import { useDispatch,useSelector } from 'react-redux';
import {getTrackName} from "../../store/tracks/track";
import Link from 'next/link';
import Router from 'next/router';
 const Sound = () => {
  const track = useSelector((state)=> state.trackPlayer.track);
  const dispatch = useDispatch();
  const [allTracks,setAllTracks] = useState([ {
    "name": "always with me",
    "key":2
  },
  {
    "name": "ambiant relax",
    "key":3

  },
  {
    "name": "love song",
    "key":4

  },
  {
    "name": "childhood memories",
    "key":6
  },
  {
    "name": "cinematic fairy",
    "key":9,
    "type":"piano"
  },
  {
    "name": "fading of the day",
    "key":10,
    "type":"pop"
  },
  {
    "name": "forest story acoustic",
    "key":11,
    "type":"rock"
  },
  {
    "name": "inspiring cinematic",
    "key":12,
    "type":"relax"
  },
  {
    "name": "in the cave",
    "key":13,
    "type":"piano"
  },
  {
    "name": "melody of nature",
    "key":14,
    "type":"relax"
  },
  {
    "name": "mindfulness relaxation",
    "key":15,
    "type":"relax"
  },
  {
    "name": "soft daydream",
    "key":16,
    "type":"pop"
  },
  {
    "name": "motivated",
    "key":17,
    "type":"rock"
  },
  {
    "name": "stylish lofi chill",
    "key":18,
    "type":"rock"
  }]);
   const [tracks,setTracks] = useState([
    {
      "name": "always with me",
      "key":2
    },
    {
      "name": "ambiant relax",
      "key":3

    },
    {
      "name": "love song",
      "key":4

    },
    {
      "name": "childhood memories",
      "key":6
    },
    {
      "name": "cinematic fairy",
      "key":9,
      "type":"piano"
    },
    {
      "name": "fading of the day",
      "key":10,
      "type":"pop"
    },
    {
      "name": "forest story acoustic",
      "key":11,
      "type":"rock"
    },
    {
      "name": "inspiring cinematic",
      "key":12,
      "type":"relax"
    },
    {
      "name": "in the cave",
      "key":13,
      "type":"piano"
    },
    {
      "name": "melody of nature",
      "key":14,
      "type":"relax"
    },
    {
      "name": "mindfulness relaxation",
      "key":15,
      "type":"relax"
    },
    {
      "name": "soft daydream",
      "key":16,
      "type":"pop"
    },
    {
      "name": "motivated",
      "key":17,
      "type":"rock"
    },
    {
      "name": "stylish lofi chill",
      "key":18,
      "type":"rock"
    }]);
    const changeTrack = (val)=>{
      if(val !== "all"){
      let filterTarcks = allTracks.filter((item,i)=> item.type === val);
      setTracks(filterTarcks);
    }else{
      setTracks([...allTracks]);
    }
    }
  return (
    <section className={Styles.container_tracks}>
    <nav className={Styles.filter}>
        <ul className={Styles.filter_lists}>
        <li className={Styles.filter_title}>
        <a onClick={(e)=> changeTrack(e.target.innerText.toLowerCase())}>
          All
          </a>  
        </li> 
         <li className={Styles.filter_title}>
         <a onClick={(e)=> changeTrack(e.target.innerText.toLowerCase())}>
              Relax
          </a>  
         </li>  
         <li className={Styles.filter_title}>

         <a onClick={(e)=> changeTrack(e.target.innerText.toLowerCase())}>
              PoP
            </a>  
         </li> 
         <li className={Styles.filter_title}>
         <a onClick={(e)=> changeTrack(e.target.innerText.toLowerCase())}>
              Rock
          </a>  
         </li> 
         <li className={Styles.filter_title}>

         <a onClick={(e)=> changeTrack(e.target.innerText.toLowerCase())}>
          Piano
          </a>  
         </li> 
        </ul> 
        <a className={Styles.iconRandom} onClick={()=>dispatch(getTrackName({name:tracks[Math.floor(Math.random() * tracks.length)].name})) }><FaRandom/></a>
    </nav>
    <ul className={Styles.conatiner_list}>
      {tracks.map((item,i)=>(
        <Link href={"/"+item.name} key={item.key} passHref>
        <li className={`${Styles.list} ${track=== item.name ? Styles.play:""}`}   onClick={()=>dispatch(getTrackName({name:item.name === track? "":item.name,index:i}))}>
        
           <>
           <span className={Styles.icon}>
           {item.name[i] != undefined && item.name[i] != " " ? item.name[i]:item.name[3]}   
            </span> 
            <p className={Styles.text}>{item.name}</p>
          </>

        
      </li>
      </Link>  
      ))}   
           
    </ul>
    </section>
  )
}
export default Sound;