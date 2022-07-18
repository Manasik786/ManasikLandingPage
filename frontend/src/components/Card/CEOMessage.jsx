import React,{useState,useEffect} from 'react'
import axios from 'axios';


const CEOMessage = () => {
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
        (item.CardType) === 'message' ? 
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
   
    </>
  )
}

export default CEOMessage