import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import axios from "axios";

const API__DATA = "https://travellxx.herokuapp.com/details/";

const  DetailsPage = () => {
    
  const [about, setAbout] = useState([]);
  const params = useParams();

    useEffect(() => {
      getData(params.id);
    })

    const getData = async (id) => {
      
      const res = await axios.get(API__DATA + id);
      
     console.log(res)
      
    }
    console.log(about)

  return (
      <div className='details-info-box'>
        <h1 className='heading'>Details</h1>
      { about.map((data) => {
        return (
          <div  key={data._id}>
          <div className='details-main'>
            <div className='details-image'>
              <img src={`/uploads/${data.image[0]}`} alt='no'/>
            </div>
            <div className='detail-text'>
              <h1>{data.about}</h1>
              <p>{data.aboutParagraph}</p>
              <button className='btn'>Read More...</button>
            </div>
          </div>
          <div className='details-main'>   
          <div className='detail-text'>
            <h1>{data.sessons}</h1>
            <p>{data.info}</p>
            <button className='btn'>Read More...</button>
          </div>
          <div className='details-image'>
            <img src={`/uploads/${data.image[1]}`} alt='no' />
          </div>
        </div>
        </div>
        )
      })
    }
    </div>
  )
};


export default DetailsPage;