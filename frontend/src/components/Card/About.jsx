import React,{useState,useEffect} from 'react'
import Button from "../Button";
import Img3 from "../../assets/images/airplane1.jpg";
import Img4 from "../../assets/images/Makkah.jpg";
import Form from '../AmbulanceBook/index'
import Cookies from "universal-cookie";
import axios from 'axios';

const Index = () => {
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));

  const [card, setCard] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/CardItems`);
      setCard(data.data);
      console.log("New Data",card)
    };
    getdata();
  }, []);
  
  return (
    <>
    {
       card.map((item) => { 
      return(
        (item.CardType) === 'about' ? 
        <>
       <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-11 " key={item._id}>
                    <h2>{item.CardDetail}</h2>
                    <p>{item.CardDescriptions}</p>
                  </div>
        </>
         : 
         <>
          
         </>
      )  
      })
      }
    </>
  )
}

export default Index