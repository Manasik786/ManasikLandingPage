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
    {
      getlanguage != "english" ? <>
      {
       card.map((item) => { 
      return(
        (item.CardType) === 'Ceomessage' ? 
        <>
        <div className="warning-section newceo" key={item._id}>
             <h2>{item.CardTitle}</h2>
            {item.CardDescriptions}
              <h6>Yousef A. AlJehani</h6>
           </div>
        </>
         : 
         <> 
         </>
      )  
      })
      }
      </> : <>
      {
       card.map((item) => { 
      return(
        (item.CardType) === 'Ceomessage' ? 
        <>
        <div className="warning-section newceo" key={item._id}>
             <h2 className='arabic-align'>{item.CardTitlear}</h2>
             <p className='arabic-align'>{item.CardDescriptionsar}</p>
            
              {/* <h6>Yousef A. AlJehani</h6> */}
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
   
    </>
  )
}

export default CEOMessage