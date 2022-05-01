import React,{useState} from 'react';
import { nanoid } from 'nanoid';
import { useSelector,useDispatch } from 'react-redux';
import styles from "../../styles/Model.module.css";
import {MdClose} from "react-icons/md";
import { model } from '../../store/tracks/track';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
const Model = () => {
    const dispatch = useDispatch();
    const [comment,setComment] = useState("");
    const [name,setName] = useState("");
    const modelStatus = useSelector((state)=>state.trackPlayer.modelStatus);
    const track = useSelector((state)=>state.trackPlayer.track);
    const time = useSelector((state)=>state.trackPlayer.time);
   const router = useRouter();

    const handleComment = async (e)=>{
      e.preventDefault();
      const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL||"",process.env.NEXT_PUBLIC_SUPABASE_SECRET||"")
         const { data, error } = await supabaseAdmin
              .from('comments')
              .insert([
                { id: nanoid(), name:name,description:comment,trackName:track.toString().trim() !== ""? track:router.query.track ,commentTime:time },
              ])
    }
  return (
    <>{modelStatus&&
      <div className={styles.model_container}>
        <div className={styles.form_container}>
        <form className={styles.modelForm}>
        <a className={styles.icon_close} onClick={()=> dispatch(model())}><MdClose/></a>  

          <div className={styles.user_name}>
            <input type="text" onChange={(e)=>setName(e.target.value)} className={styles.input} placeholder="Enter Your Name" />  
          </div>
          <div className={styles.user_comment}>
            <textarea onChange={(e)=>setComment(e.target.value)} className={styles.textarea} placeholder="Leave Your Comment"></textarea>  
          </div>  
          <div className={styles.form_btn}>
            <input type="submit" onClick={(e)=> handleComment(e)}  className={styles.btn_submit} value="Leave A Note"></input>  
          </div>   
        </form>
        </div>
      </div>}
    </>
  )
}
export default Model;