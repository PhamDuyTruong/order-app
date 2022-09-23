import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Theme from './utils/CustomUI';
import ApiProvider from './contexts/apiContext';
import AuthProvider from './contexts/authContext';
import PrevFilterProvider from './contexts/PrevFilterContext';
import Routes from './routes/Routes';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { ThemeProvider } from '@material-ui/core/styles';

import Header from './Components/Header';
import Footer from './Components/Footer';
import ScrollButton from './Components/ScrollButton';
import "./App.scss";
function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({
    force3D:true
  });

  return (
    <ThemeProvider theme={Theme}>
        <BrowserRouter>
           <AuthProvider>
               <PrevFilterProvider>
                   <ApiProvider>
                       <Header />
                       <Routes />
                   </ApiProvider>
               </PrevFilterProvider>
           </AuthProvider>
        </BrowserRouter>
        <ScrollButton />
        {/* <Footer /> */}
        <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
