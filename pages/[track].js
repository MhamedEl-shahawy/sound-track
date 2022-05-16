import { createClient } from '@supabase/supabase-js';
import { useDispatch } from 'react-redux';
import {changeTimeRange} from  "../store/tracks/track";
import Head from 'next/head';
import { useRouter } from 'next/router';
export default function Track({comments}){
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <ul>
        <Head>
        <title>{router.query.track}</title>
        <meta name="description" content="A simple SoundCloud client" />
      </Head>
       {comments != undefined && comments.map((db,i)=>(
        <li key={db.id}>
            <a>{db.name} at <span onClick={()=>dispatch(changeTimeRange(db.commentTime))}>{db.commentTime}</span></a>
            <p>{db.description}</p>
        </li>
        ))} 
    </ul>
  )
}


  export const getStaticPaths = async () => {
    const data = [
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
      }];
  
    const paths = data.map(item => {
      return {
        params: { track: item.name }
      }
    })
  
    return {
      paths,
      fallback: true
    }
  }
  
  export const getStaticProps = async ({ params }) => {
    const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL||"",process.env.NEXT_PUBLIC_SUPABASE_SECRET||"")
    const {data} = await supabaseAdmin.from("comments").select("*").order("id");
    const trackFilter = data.filter((track,i)=> track.trackName === params.track);
    return {
      props: {
           comments: trackFilter,
           track:  params.track
      },
      revalidate: 30
    }
  }