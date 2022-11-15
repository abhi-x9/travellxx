import React from "react";
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from "./components/layout/Layout";
import { Loading } from "./components/UI/Loading";
import { useAboutContext } from "./contextApi/clientContext";

const About =  React.lazy(() => import( "../src/components/pages/About"));
const  Contact =   React.lazy(() => import('./components/pages/Contact'));
const  DetailsPage  = React.lazy(() => import("./components/pages/DetailsPage"));
const Home = React.lazy(() => import('./components/pages/Home'));

const  App = () => {
  const { isLoading } = useAboutContext();
  return (
   
    <Layout>
      <React.Suspense fallBack={ isLoading ? <div className='centered'> <Loading /></div> : ""}>
       <Routes>
          <Route path='/' element={ <Home /> } exact/>
          <Route path='/home' element={ <Home />}  exact/>  
          <Route path='/about' element={ <About />} />
          <Route path="/details/:id" element={ <DetailsPage /> } exact/>
          <Route path='/contact' exact element={ <Contact />}/>
       </Routes> 
     </React.Suspense>    
    </Layout>
    
  );
};


export default App;
