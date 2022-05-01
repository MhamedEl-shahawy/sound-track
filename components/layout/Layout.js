import Header from "../header/Header";
import Footer from "../footer/Footer";
import Model from "../model/Model";
import Player from "../player/Player";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const track = useSelector((state)=> state.trackPlayer.track);
    const router = useRouter();

    return (
      <>
        <Header />
        <main>
          {children}
          <Model/>  
          {router.query.track||track.toString().trim() !== ""?   <Player/>:""}
        </main>
        <Footer />
      </>
    )
  }