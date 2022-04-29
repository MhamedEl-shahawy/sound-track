import '../styles/globals.css'
import {configureStore} from "@reduxjs/toolkit";
import { Provider} from "react-redux";
import trackPlayer from "../store/tracks/track";
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function MyApp({ Component, pageProps }) {
  const store = configureStore({
    reducer:{
      trackPlayer
    }
  })
  return <Provider store={store}>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </Provider>;
}

export default MyApp
