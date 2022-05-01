import Head from 'next/head'
import Sound from "../components/sound/Sound.js";
import Player from "../components/player/Player.js";
import { useSelector } from 'react-redux';
import tracks from '../data/tracks.json';
import { createClient } from '@supabase/supabase-js';
import Model from '../components/model/Model.js';
export default function Home() {
  const track = useSelector((state)=> state.trackPlayer.track);
  return (
    <div>
      <Head>
        <title>Sound Track</title>
        <meta name="description" content="A simple SoundCloud client" />
      </Head>
      <Sound/>
    </div>
  )
}


