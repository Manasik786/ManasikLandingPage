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
    };
    getdata();
  }, []);
  
  return (
    <>
    <div className='missionclass'>
    <div className='destination-main'>
         {
          getlanguage != 'english' ? <> 

      {
       card.map((item) => { 
      return(
        (item.CardType) === 'Mission' ? 
        <>
       
       <div className='destination-cards' key={item._id}>
       <div className='destination-left'>
           <div className='destination-img1'>
           <img src={item.images[0].url}/>
           </div>
          </div>
          <div className='destination-right'>
           <div className='text-dest'>
           <h2>{item.CardDetail}</h2>
            <p>{item.CardDescriptions}</p>
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
          
        
        </>: <>
        <div className='destination-cards cardarabic'>
            <div className='destination-left'>
             <div className='destination-img1'>
             <img src={Img4}/>
             </div>
            </div>
            <div className='destination-right'>
             <div className='text-dest'>
             <h2 className="arabic-align">رؤية</h2>
              <p className="arabic-align">
              لدينا نظام مخطط وجبات مصمم خصيصًا لخطة الطريق المحددة ، مع توفير طعام حلال كامل ، لدينا أفضل خدمة تموين للضيف              </p>

             <p className="arabic-align"> 
             مع الأخذ في الاعتبار الثقافة الجغرافية لوجهتنا ، فقد خصصنا وجبة مع التأكيد على الأطعمة الثقافية مقدمًا ، مما يجعل الضيف أكثر رضا خلال رحلتهم
             </p>

             <p className="arabic-align"> 
             نحن شريك في شركة تموين رائدة في المملكة العربية السعودية ، الهدف هو تقديم أفضل خدمة ممكنة للضيف مع مراعاة الثقافة السعودية والضيافة              </p>
             </div>
            </div>
          </div>
        </>
         }
          
        </div>
    </div>
    </>
  )
}

export default Index