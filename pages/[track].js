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
    const supabaseAdmin = createClient(process.env.NEXT_SUPABASE_URL||"",process.env.NEXT_SUPABASE_SECRET||"")
    const {data} = await supabaseAdmin.from("comments").select("*").order("id");
  
    const paths = data.map(item => {
      return {
        params: { track: item.trackName }
      }
    })
  
    return {
      paths,
      fallback: true
    }
  }
  
  export const getStaticProps = async ({ params }) => {
    const supabaseAdmin = createClient(process.env.NEXT_SUPABASE_URL||"",process.env.NEXT_SUPABASE_SECRET||"")
    const {data} = await supabaseAdmin.from("comments").select("*").order("id");
    const trackFilter = data.filter((track,i)=> track.trackName === params.track)
    return {
      props: {
           comments: trackFilter,
           track:  params.track
      },
      revalidate: 1
    }
  }