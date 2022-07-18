import React,{useState,useEffect} from 'react'
import axios from 'axios';
const WhyManasik = () => {
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
    
    <div className="whymanasik">
    {
       card.map((item) => { 
      return(
        (item.CardType) === 'whymanasik' ? 
        <>
       <div className="whymanasikleft" key={item._id}>
          <h2>{item.CardDetail}</h2>
          <p>{item.CardDescriptions}</p>
          </div>
        <div className="whymanasikright">
          <div className="blackdiv"></div>
        </div>
        </>
         : 
         <>
         </>
      )  
      })
      }
        
       </div>
    </>
  )
}

export default WhyManasik