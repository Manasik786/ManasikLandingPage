import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Test = () => {
    const [data, setData] = useState();
  const [card, setCard] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/CardItems`);
      setCard(data.data);
      console.log("New Data",card)
    };
    getdata();
  }, []);

  // function isCategory(item) {
  //   return item.CardType === 'Vission';
  // }
  // const Category1 = card.find(isCategory)
  // card = Category1
  // console.log("Category is",card);
  
  return (
    <>
     {
       card.map((item) => { 
      return(
        (item.CardType) === 'About Manasik' ? 
        <>
        <p>{item.CardType}</p>
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

export default Test