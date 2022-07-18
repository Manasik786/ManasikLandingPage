import React,{useEffect,useState} from 'react'
import axios from 'axios';

const WarningCard = () => {
    
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
        (item.CardType) === 'Recruitment Fraud Warning' ? 
        <>
        <div className="career-warning">
       <div className="warning-card">
         <div className="warning-left">
           <div className="img1">
             
           </div>
         </div>
         <div className="warning-right">
           <div className="warning-section">
             <h2>{item.CardType}</h2>
             <p>{item.CardDescriptions}</p>
           </div>
         </div>
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
  )
}

export default WarningCard