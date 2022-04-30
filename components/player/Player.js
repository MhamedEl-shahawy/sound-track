import React, { useState, useRef, useEffect } from 'react'
import styles from "../../styles/Player.module.css";
import { MdForward30,MdReplay30,MdChatBubbleOutline } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs"
import { FaPlay,FaPause,FaFastBackward,FaFastForward,FaVolumeUp } from "react-icons/fa"
import { useSelector,useDispatch } from 'react-redux';
import {getTrackName,model} from "../../store/tracks/track"
const Player = () => {
  // state
  const track = useSelector((state)=> state.trackPlayer.track);
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const [muteStatus, setMuteStatus] = useState(false);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // references
  const audioPlayer = useRef();   // reference our audio component
  const progressBar = useRef();   // reference our progress bar
  const animationRef = useRef();  // reference the animation
 
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }
  const mute=()=>{
    const muted = !muteStatus;
    audioPlayer.current.muted = muted;
    setMuteStatus(muted);
  };
  const togglePlayPause = (playStatus=false) => {
    const prevValue = playStatus;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
   if(track.toString().trim() !== "" && audioPlayer.current != null){
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
   }
 
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  }

  const forwardThirty = () => {
    progressBar.current.value = Number(+progressBar.current.value + 30);
    changeRange();
  }

  return (
    <div className={styles.audioPlayer}>
      <audio ref={audioPlayer}
       autoPlay
       onPlay={()=>togglePlayPause()}
       onEnded={()=>dispatch(getTrackName("next"))}
       src={`/tracks/${track}.mp3`}
      preload="metadata"></audio>
      <button className={`${styles.forwardBackward} ${styles.bg}`} onClick={()=>dispatch(getTrackName("previous"))}><FaFastBackward /></button>
      <button className={styles.forwardBackward} onClick={backThirty}><MdReplay30 /></button>
      <button  className={styles.playPause}>
        {isPlaying ? <FaPause onClick={()=>togglePlayPause(true)} /> : <FaPlay onClick={()=>togglePlayPause(false)} className={styles.play} />}
      </button>
      <button className={styles.forwardBackward} onClick={forwardThirty}> <MdForward30 /></button>
      <button className={`${styles.forwardBackward} ${styles.bg}`} onClick={()=>dispatch(getTrackName("next"))}> <FaFastForward /></button>

      {/* current time */}
      <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

      {/* progress bar */}
      <div className={styles.progressBar_container}>
        <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange} />
      </div>

      {/* duration */}
      <div className={styles.duration}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
      <button className={`${styles.forwardBackward} ${styles.bg}`} onClick={()=>mute()}> <FaVolumeUp /></button>
      <button className={`${styles.forwardBackward} ${styles.bg}`} onClick={()=>dispatch(model())}> <MdChatBubbleOutline /></button>

    </div>
  )
}

export default  Player;