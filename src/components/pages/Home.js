import React,{  Fragment,  } from 'react';
import { Link } from 'react-router-dom';
import SliderMain from '../SlickSlider/SliderMain';
import './Home.css';
import { Loading } from '../UI/Loading';
import { useAboutContext } from '../../contextApi/clientContext';


const Home = () => {

  const { home, isLoading, isError } = useAboutContext();
  
  if(isLoading) {
    return <div className='centered'><Loading /></div>
  }
  if(isError) {
    return <h1>There was an err</h1>
  }
  
 
    return (
    <Fragment>
      <SliderMain />
    <div className="container-homee">  
      
       { home.map((data) => {
       return (
        <div className="main" key={data._id}>
        <div className="img">
         <img className="img-home" src={`/uploads/${data.image}`}   alt="non"/>
        </div>
        <div className="info">
          <h2>{data.text}</h2>
          <Link to={data.link} className="button" >Learn More!!</Link>
          </div>
        </div>
       ) 
       })
       }
      </div>
    </Fragment>
 
  )
}

export default Home;
