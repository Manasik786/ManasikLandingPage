import React,{useState,useEffect} from 'react'
import Button from "../Button";
import Img4 from "../../assets/images/mission.jpg";
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
    <div className='destination-main'>
          {
            getlanguage != 'english' ? <>

       {
       card.map((item) => { 
      return(
        (item.CardType) === 'aboutpage' ? 
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
            <div className='destination-cards cardarabic'>
          <div className='destination-right'>
              <h2 className="arabic-align">بعثة</h2>
              <p className="arabic-align">
              لدينا نظام مخطط وجبات مصمم خصيصًا لخطة الطريق المحددة ، مع توفير طعام حلال كامل ، لدينا أفضل خدمة تموين للضيف              
               </p>

               <p className="arabic-align"> 
             مع الأخذ في الاعتبار الثقافة الجغرافية لوجهتنا ، فقد خصصنا وجبة مع التأكيد على الأطعمة الثقافية مقدمًا ، مما يجعل الضيف أكثر رضا خلال رحلتهم
             </p>

             <p className="arabic-align"> 
             مع الأخذ في الاعتبار الثقافة الجغرافية لوجهتنا ، فقد خصصنا وجبة مع التأكيد على الأطعمة الثقافية مقدمًا ، مما يجعل الضيف أكثر رضا خلال رحلتهم
             </p>

              
            </div>
            <div className='destination-left'>
              <img src={Img4}/>
            </div>
            
          </div>
            </>
          }
          
        </div>
    </>
  )
}

export default Index