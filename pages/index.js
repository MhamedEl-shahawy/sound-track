import Head from 'next/head'
import Image from 'next/image'
import Sound from "../components/sound/Sound.js";
import Player from "../components/player/Player.js";
import { useSelector } from 'react-redux';
import tracks from '../data/tracks.json';
import { createClient } from '@supabase/supabase-js';
import Model from '../components/model/Model.js';
export default function Home({comments}) {
  console.log(comments);
  const track = useSelector((state)=> state.trackPlayer.track);
  return (
    <div>
      <Head>
        <title>Sound Track</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Sound/>
      <Model/>
      {track.toString().trim() !== ""?   <Player/>:""}
    </div>
  )
}


export async function getStaticProps(){
  const supabaseAdmin = createClient(process.env.NEXT_SUPABASE_URL||"",process.env.NEXT_SUPABASE_SECRET||"")
  const {data} = await supabaseAdmin.from("comments").select("*").order("id");


  return{
   props:{
     comments:data
   }
  }
}