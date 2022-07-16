import React,{useState} from 'react'
import Banner from '../components/Banner/Test'
import Cookies from "universal-cookie";
const Term = () => {
    const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));
  return (
    <>
    <Banner/>
    {
        getlanguage != 'english'? <>
        <div className="privacydiv">
        <div className="privacytop">
        <h3>Term & Condition </h3>
        <p>
        Your use of the Manasik web sites and our Company Information is subject to these terms and conditions, and by using our web site, you agree to these terms and conditions. Manasik reserves the right to change these terms and conditions without notice.        </p>
        <p>
        Manasik reserves the right to change this Term and Condition at any time by posting the updated Policy here along with the date on which the Policy was changed. If we make material changes to this Privacy Policy that affect the way we collect, use and/or share your personal information, we will notify you by including a "NEWLY UPDATED" label with the "PRIVACY POLICY" link on manasikaviation.com for 30 days after material changes are made.
        </p>
        </div>
        <div className="privacytop1">
          <h4>Ownership of Company Information</h4>
          <p>
          Information concerning Manasik and its services, including flight schedules, routes, fares, text, graphics, button icons, audio and video clips, digital downloads, data compilations (including Customer and BlueMiles information), logos and information regarding the status of airblue flights, etc. is referred to as "Company Information." airblue owns all copyrights, trademarks, service marks, trade names related to the Company Information and the Company Information is proprietary to Manasik.          </p>
          <ul>
            <li>You, when you voluntarily provide us with information</li>
            <li>Your transactions with Manasik</li>
            <li>Other third-party sources, such as travel agents, other airlines (e.g., code share and alliance partners) and travel and hospitality service providers (e.g., transportation or tour operators).</li>
          </ul>
          <p>If the information is to be collected directly from you, you may in some cases have the option to decline providing that information. However, your choice to not provide information may impact your use of certain features or services.</p>
          <p>The personal information we collect about you through these various sources may include, but is not limited to:</p>
        </div>
        <div className="privacytop2">
          <p>Name, addresses and telephone numbers</p>
          <p>Date of birth and gender</p>
          <p>Email addresses, fax numbers and pager numbers</p>
          <p>Social media handles, including when you communicate with us through social media</p>
          <p>Credit/debit card payment information, including card number(s), associated billing address(es), and expiration date(s)</p>
          <p>Information required to facilitate travel or other services, including travel companion(s) names, emergency contacts, and photographs</p>
          <p>Information about your travel, including booking and itinerary information, requests for assistance, interactions with staff and cabin crew, and dietary restrictions</p>
          <p>Digital identity credentials (such as credentials linked to facial or fingerprint verification, vaccination status, or negative test results) that you provide for specific purposes, such as compliance with customs and immigration requirements during international travel or services in which you choose to participate</p>
          <p>Details of your previous travel, such as previous flights and travel-related issues</p>
          <p>Driver’s license number</p>
          <p>Passport number, nationality and country of residence</p>
          <p>Technical information such as your browser type, IP address, type of operating system you use, your geolocation, the name of your internet service provider, mobile advertising identifiers, and pages visited on our Services</p>
          <p>Information provided via survey, focus group or other marketing research efforts</p>
          <p>When you send us an email or online customer service request, we will retain the content of the message, your email address or any contact information you provide, and our response in order to handle any follow-up questions you may have. We also use this information to measure how effectively we address your concerns.</p>
          <p>Corporate-contract, employer and/or other corporate affiliation (e.g., employer name, title, work address and contact information), including Business Extra account information (e.g., business type, number of employees, number of business travelers, and travel manager information)</p>
        </div>
        <div className="privacytop3">
          <h4>Web Browser Compatibility</h4>
          <p>We recommend you use the latest releaed version of Microsoft Internet Explorer, Google Chrome or FireFox web browsers. </p>
          <p>If you book travel for someone else, we may collect your billing information but may communicate with the passenger directly about their flight.</p>
          <p>If your booking includes emergency contact information, we may share personal information with your emergency contact or attempt to collect information about you from your emergency contact, as appropriate based on the nature of the emergency.</p>
          <p>In the event of a flight delay, cancellation, or other service disruption, we may use the contact information provided in your booking to notify you, and the individuals traveling on the same booking, about the disruption.</p>
        </div>
        <div className="privacytop4">
          <h4>Sensitive personal information</h4>
          <p>To the extent that the personal information we collect constitutes sensitive personal information under applicable law, including where such laws promote a substantial public interest, Manasik will collect and process this sensitive personal information within the limits provided by applicable law. Where required by law, Manasik will seek your specific consent before processing sensitive personal information.</p>

          <p>Some examples of this type of information include:</p>
          <ul>
          <li>You have provided medical information to us (such as information about a disability or medical condition) while requesting specific assistance (such as the provision of wheelchair assistance) from us and/or an airport operator</li>
          <li>You have sought clearance from us to fly with a medical condition or device</li>
          <li>A scan of your face or other biometric identifiers as disclosed to you when you participate in one of our biometric authentication programs</li>
          <li>You have otherwise chosen to provide such information to us or it has been passed onto us by a third party such as the travel agent through which you made your booking or other entity, including information about whether you have symptoms of a communicable disease or virus (such as COVID-19), an appropriate vaccination, or a negative test result.</li>
          </ul>
        <p>In addition, you may have submitted a request for services (such as a meal preference or a request for wheelchair assistance) which is not “sensitive personal information”. Manasik does not consider such data to reliably imply or suggest sensitive personal information.</p>
        </div>
      </div>
        </> : <>
        <div className="privacydiv arabic-banner1">
        <div className="privacytop">
        <h3>حماية خصوصيتك </h3>
        <p>
        توضح سياسة الخصوصية هذه كيفية قيام المناسك ("نحن" ، و "نحن" ، و "خاصتنا") بجمع واستخدام ومشاركة وحماية المعلومات فيما يتعلق بخدماتنا وأنظمتنا ومواقعنا الإلكترونية وتطبيقاتنا التي تشير إلى سياسة الخصوصية هذه أو ترتبط بها (لدينا "الخدمات") ، بما في ذلك على سبيل المثال لا الحصر ، جمع ومعالجة المعلومات الشخصية فيما يتعلق بالحجوزات والسفر معنا أو الرحلات الجوية التي تديرها شركات النقل الإقليمية الخاصة بنا. تنطبق سياسة الخصوصية هذه بغض النظر عن نوع الجهاز أو الوسائل الأخرى التي تستخدمها للوصول إلى خدماتنا.        </p>
        <p>
        تحتفظ المناسك بالحق في تغيير سياسة الخصوصية هذه في أي وقت عن طريق نشر السياسة المحدثة هنا جنبًا إلى جنب مع تاريخ تغيير السياسة. إذا أجرينا تغييرات مادية على سياسة الخصوصية هذه والتي تؤثر على الطريقة التي نجمع بها معلوماتك الشخصية ونستخدمها و / أو نشاركها ، فسنخطرك من خلال تضمين ملصق "محدث حديثًا" مع رابط "سياسة الخصوصية" على manasikaviation.com لمدة 30 بعد أيام من إجراء التغييرات المادية.        </p>
        </div>
        <div className="privacytop1">
          <h4>المعلومات التي نجمعها وكيف نجمعها</h4>
          <p>
          نحن نجمع معلومات شخصية عنك ونحتفظ بها من عدة مصادر لفهم احتياجاتك وتلبية احتياجاتك ، وتسهيل سفرك ، وإدارة أعمالنا ، ولأغراض أخرى يتم الكشف عنها لك. على سبيل المثال ، نجمع معلومات شخصية عنك من:          </p>
          <ul className="arabic-banner1">
            <li>أنت ، عندما تزودنا بمعلومات طواعية</li>
            <li>معاملاتك مع مناسيك</li>
            <li>مصادر الجهات الخارجية الأخرى ، مثل وكلاء السفر وشركات الطيران الأخرى (على سبيل المثال ، شركاء الرمز المشترك والتحالف) ومقدمو خدمات السفر والضيافة (على سبيل المثال ، النقل أو منظمي الرحلات)</li>
          </ul>
          <p>إذا كان سيتم جمع المعلومات منك مباشرةً ، فقد يكون لديك في بعض الحالات خيار رفض تقديم تلك المعلومات. ومع ذلك ، فإن اختيارك لعدم تقديم معلومات قد يؤثر على استخدامك لبعض الميزات أو الخدمات.</p>
          <p>قد تشمل المعلومات الشخصية التي نجمعها عنك من خلال هذه المصادر المختلفة ، على سبيل المثال لا الحصر:</p>
        </div>
        <div className="privacytop2">
          <p>الاسم والعناوين وأرقام الهواتف</p>
          <p>الاسم والعناوين وأرقام الهواتف</p>
          <p>عناوين البريد الإلكتروني وأرقام الفاكس وأرقام النداء</p>
          {/* <p>Social media handles, including when you communicate with us through social media</p>
          <p>Credit/debit card payment information, including card number(s), associated billing address(es), and expiration date(s)</p>
          <p>Information required to facilitate travel or other services, including travel companion(s) names, emergency contacts, and photographs</p>
          <p>Information about your travel, including booking and itinerary information, requests for assistance, interactions with staff and cabin crew, and dietary restrictions</p>
          <p>Digital identity credentials (such as credentials linked to facial or fingerprint verification, vaccination status, or negative test results) that you provide for specific purposes, such as compliance with customs and immigration requirements during international travel or services in which you choose to participate</p>
          <p>Details of your previous travel, such as previous flights and travel-related issues</p>
          <p>Driver’s license number</p>
          <p>Passport number, nationality and country of residence</p>
          <p>Technical information such as your browser type, IP address, type of operating system you use, your geolocation, the name of your internet service provider, mobile advertising identifiers, and pages visited on our Services</p>
          <p>Information provided via survey, focus group or other marketing research efforts</p>
          <p>When you send us an email or online customer service request, we will retain the content of the message, your email address or any contact information you provide, and our response in order to handle any follow-up questions you may have. We also use this information to measure how effectively we address your concerns.</p>
          <p>Corporate-contract, employer and/or other corporate affiliation (e.g., employer name, title, work address and contact information), including Business Extra account information (e.g., business type, number of employees, number of business travelers, and travel manager information)</p> */}
        </div>
        <div className="privacytop3">
          <h4>معلومات الحجز</h4>
          {/* <p>Manasik creates a record for each booking that involves travel on Manasik Aviation, even if the ticket is sold under another airline’s booking code. When you book travel on Manasik, we will collect and store information about your transaction, including whether you booked your flight on manasikaviation.com or through another sales channel (such as a travel agency). Manasik will also collect and store information about changes to your booking, including a cancellation or failure to complete your travel, upgrades, your baggage requirements, airport disruption, and lost baggage.</p>
          <p>If you book travel for someone else, we may collect your billing information but may communicate with the passenger directly about their flight.</p>
          <p>If your booking includes emergency contact information, we may share personal information with your emergency contact or attempt to collect information about you from your emergency contact, as appropriate based on the nature of the emergency.</p>
          <p>In the event of a flight delay, cancellation, or other service disruption, we may use the contact information provided in your booking to notify you, and the individuals traveling on the same booking, about the disruption.</p> */}
        </div>
        <div className="privacytop4">
          {/* <h4>Sensitive personal information</h4>
          <p>To the extent that the personal information we collect constitutes sensitive personal information under applicable law, including where such laws promote a substantial public interest, Manasik will collect and process this sensitive personal information within the limits provided by applicable law. Where required by law, Manasik will seek your specific consent before processing sensitive personal information.</p>

          <p>Some examples of this type of information include:</p>
          <ul>
          <li>You have provided medical information to us (such as information about a disability or medical condition) while requesting specific assistance (such as the provision of wheelchair assistance) from us and/or an airport operator</li>
          <li>You have sought clearance from us to fly with a medical condition or device</li>
          <li>A scan of your face or other biometric identifiers as disclosed to you when you participate in one of our biometric authentication programs</li>
          <li>You have otherwise chosen to provide such information to us or it has been passed onto us by a third party such as the travel agent through which you made your booking or other entity, including information about whether you have symptoms of a communicable disease or virus (such as COVID-19), an appropriate vaccination, or a negative test result.</li>
          </ul>
        <p>In addition, you may have submitted a request for services (such as a meal preference or a request for wheelchair assistance) which is not “sensitive personal information”. Manasik does not consider such data to reliably imply or suggest sensitive personal information.</p> */}
        </div>
      </div>
        </>
      }
    </>
  )
}

export default Term