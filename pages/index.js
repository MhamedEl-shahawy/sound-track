import Head from 'next/head'
import Image from 'next/image'
import Sound from "../components/sound/Sound.js";
import Player from "../components/player/Player.js";
import { useSelector } from 'react-redux';
export default function Home() {
  const track = useSelector((state)=> state.trackPlayer.track);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Sound/>
      {track.toString().trim() !== ""?   <Player/>:""}
    
     
    </div>
  )
}
