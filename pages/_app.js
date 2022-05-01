import '../styles/globals.css'
import {configureStore} from "@reduxjs/toolkit";
import { Provider} from "react-redux";
import trackPlayer from "../store/tracks/track";
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Layout from '../components/layout/Layout';
function MyApp({ Component, pageProps }) {
  const store = configureStore({
    reducer:{
      trackPlayer
    }
  })
  return <Provider store={store}>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </Provider>;
}

export default MyApp
