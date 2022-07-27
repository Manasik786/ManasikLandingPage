import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Cookies from "universal-cookie";


const CEOMessage = () => {
    const [card, setCard] = useState([]);
    
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));

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
    <div className='destination-main'>
          {
            getlanguage != 'english' ? <>

       {
       card.map((item) => { 
      return(
        (item.CardType) === 'Ceomessage' ? 
        <>
       
       <div className='destination-cards mappingstyabout' key={item._id}>
          <div className='destination-right'>
              <h2>{item.CardTitle}</h2>
              <p>{item.CardDescriptions}</p>
              
            </div>
            <div className='destination-left'>
              <img src={item.images[0].url}/>
            </div>
            
          </div>
        </>
         : 
         <>
          
         </>
      )  
      })
      }


            </>: <>
            {
       card.map((item) => { 
      return(
        (item.CardType) === 'Ceomessage' ? 
        <>
       
       <div className='destination-cards mappingstyabout' key={item._id}>
       <div className='destination-left'>
              <img src={item.images[0].url}/>
            </div>
          <div className='destination-right'>
              <h2 className='arabic-align'>{item.CardTitlear}</h2>
              <p className='arabic-align'> {item.CardDescriptionsar}</p>
              
            </div>
            
            
          </div>
        </>
         : 
         <>
          
         </>
      )  
      })
      }
            </>
          }
          
        </div>
    </>
  )
}

export default CEOMessage