import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import styles from "../../styles/Model.module.css";
import {MdClose} from "react-icons/md";
import { model } from '../../store/tracks/track';
const Model = () => {
    const dispatch = useDispatch();
    const [comment,setComment] = useState("");
    const [name,setName] = useState("");
    const modelStatus = useSelector((state)=>state.trackPlayer.modelStatus);
    const handleComment = (e)=>{
         e.preventDefault();
    }
  return (
    <>{modelStatus&&
      <div className={styles.model_container}>
        <div className={styles.form_container}>
        <form className={styles.modelForm}>
        <a className={styles.icon_close} onClick={()=> dispatch(model())}><MdClose/></a>  

          <div className={styles.user_name}>
            <input type="text" onChange={setName} className={styles.input} placeholder="Enter Your Name" />  
          </div>
          <div className={styles.user_comment}>
            <textarea onChange={setComment} className={styles.textarea} placeholder="Leave Your Comment"></textarea>  
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