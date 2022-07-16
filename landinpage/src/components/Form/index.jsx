import React,{useState} from 'react'
import Button from "../Button/large";
import Cookies from "universal-cookie";
import BackArrow from "../Button/ArabicLarge";

const Index = () => {
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));
  return (
    <>
     <div className='form-destination'>
     {
      getlanguage != 'english' ? <>
      <form>
     <div className="grid-container">
        <div>
        <input type='text' placeholder='Name' />
        </div>
        <div>
        <input type='text' placeholder='Family Name' />
        </div>
        <div>
        <input id="date" type="date" required placeholder="Date"/>  
        </div>  
        <div>
        <input type='text' placeholder='Email' />
        </div>
        <div>
        <input type='text' placeholder='Country' />
        </div>
        <div>
        <input type='text' placeholder='Mobile' />
        </div>
        <div>
        <input type='text' placeholder='Passport Number' />
        </div>
        <div><input type='text' placeholder='National ID#' /></div>
        <div>
        <input type='text' placeholder='Upload Document' />
        </div>
        <div>
        <input type='text' placeholder='Stay Period' />
        </div>
        <div>
          <input type='text' placeholder='Have you visited KSA before?' />
          </div>
        <div><input type='text' placeholder='Relative contact in KSA' /></div>
        
      </div>
      <div className='largeItem'><input type='text' placeholder='Reason to visit Saudi Arabia' /></div>
      <div className='smallItem'><input type='text' placeholder='Religion' /></div>
      <Button text={"Submit"}/>
     </form>
      </> : <>
      <form className="arabicplaceholder">
     <div className="grid-container">
        <div>
        <input type='text' placeholder='اسم' />
        </div>
        <div>
        <input type='text' placeholder='اسم العائلة' />
        </div>
        <div>
        <input id="date" type="date" required placeholder="تاريخ"/>  
        </div>  
        <div>
        <input type='text' placeholder='البريد الإلكتروني' />
        </div>
        <div>
        <input type='text' placeholder='دولة' />
        </div>
        <div>
        <input type='text' placeholder='التليفون المحمول' />
        </div>
        <div>
        <input type='text' placeholder='رقم جواز السفر' />
        </div>
        <div><input type='text' placeholder='الهوية الوطنية#' /></div>
        <div>
        <input type='text' placeholder='تحميل المستند' />
        </div>
        <div>
        <input type='text' placeholder='فترة البقاء' />
        </div>
        <div>
          <input type='text' placeholder='هل زرت المملكة العربية السعودية من قبل؟' />
          </div>
        <div><input type='text' placeholder='الاتصال النسبي في المملكة العربية السعودية' /></div>
        
      </div>
      <div className='largeItem'><input type='text' placeholder='سبب زيارة المملكة العربية السعودية' /></div>
      <div className='smallItem'><input type='text' placeholder='دِين' /></div>
      <BackArrow text={"يُقدِّم"}/>
     </form>
      </>
     }
     </div>
    </>
  )
}

export default Index