import React, { useContext } from 'react';
import logo1 from '../assets/istockphoto-2188401754-612x612.jpg';
import logo2 from '../assets/istockphoto-951500192-612x612.jpg';
import logo3 from '../assets/istockphoto-1873970852-612x612.jpg';
import logo4 from '../assets/istockphoto-472266310-612x612.jpg';
import logo5 from '../assets/IMG-20250218-WA0021-removebg-preview_LE_upscale_magic_x4_strength_75_similarity_50.jpg';
import logo8 from '../assets/480226080_122106288194766303_965468602806826678_n.jpg';
import logo6 from '../assets/IMG-20250218-WA0035_LE_upscale_magic_x4_strength_71_similarity_60.jpg';
import logo7 from '../assets/IMG-20250218-WA0039_LE_upscale_balanced_x4.jpg';
import logo9 from '../assets/480544996_122106314588766303_103176654868698083_n.jpg';
import logo10 from '../assets/480278418_122106314330766303_6392446340667160171_n.jpg';
import logo11 from '../assets/480664925_122106312632766303_8802519795906309508_n.jpg';
import logo12 from '../assets/480812090_122106314282766303_4415994457690408724_n.jpg';
import logo13 from '../assets/480920092_122106314432766303_8148684479146586381_n.jpg';
import logo14 from '../assets/WhatsApp Image 2025-02-19 at 15.51.37_c16c145e.jpg';
import logo15 from '../assets/480553227_122106314378766303_3341960769889635617_n.jpg';
import vid1 from '../assets/WhatsApp Video 2025-02-19 at 15.51.37_cf388fd5.mp4';
import vid2 from '../assets/WhatsApp Video 2025-02-19 at 15.51.38_1f8b44e3.mp4';
import vid3 from '../assets/WhatsApp Video 2025-02-19 at 15.51.38_5a122658.mp4';

import { FaWhatsapp, FaFacebook,FaInstagram } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { Langcontext } from '../pages/Home';

export default function Navpar() {
   const { lang, setlang } = useContext(Langcontext);

 
   const text = lang === 'عربي' ? {
     contactUs: 'اتصل بنا',
     phone: '+20 115 821 8598',
     email: 'Contact@GuitaraAgenCy.com',
     location: 'المعصره ',
     name:'نهى لأظافر ورموش الجمال',
     aboutTitle: 'يبدأ جمالك مع الأظافر والرموش – حيث يلتقي السحر مع الأناقة',
     aboutDesc: 'في Noha’s Glam Nails & Lashes نقدم خدمات متميزة للأظافر الاصطناعية والرموش لمساعدتك في الحصول على مظهر أنيق وجميل. نفخر باستخدام أحدث التقنيات والمواد عالية الجودة لإضفاء لمسة من الجمال الفاخر. سواء كنتِ تبحثين عن أظافر مشكَّلة بدقة أو رموش ساحرة، نحن هنا لنجعل كل لحظة تعكس جمالك الطبيعي.',
     contactTitle: 'اتصل بنا',
     footerText: '©2025 GuitaraGroup | جميع الحقوق محفوظة'
   } : {
     contactUs: 'Contact Us',
     phone: '+20 115 821 8598',
     email: 'Contact@GuitaraAgenCy.com',
     location: '1 elmasara, Cairo',
     name:'Noha’s Glam Nails & Lashes',
     aboutTitle: 'Your Beauty Begins with Nails & Lashes – Where Glamour Meets Elegance',
     aboutDesc: 'At Noha’s Glam Nails & Lashes, we offer top-tier services for artificial nails and lashes to help you achieve a stunning and elegant look. We take pride in using the latest techniques and high-quality materials to give you a touch of luxurious beauty. Whether you\'re looking for perfectly shaped nails or mesmerizing lashes, we’re here to make every moment reflect your natural beauty.',
     contactTitle: 'Contact Us',
     footerText: '©2025 GuitaraGroup | All Rights Reserved'
   };

  return (
    <div className='w-full flex items-center flex-col gap-[50px] bg-gradient-to-r from-pink-400 to-pink-600'>

      <div className='bg-blue-900 w-full text-white p-[10px] flex flex-row-reverse items-center justify-between'>
        <div className='flex flex-row-reverse gap-5 items-center'>
          <select
          onClick={(e) => setlang(e.target.value)}
          className='text-white outline-none bg-transparent font-semibold text-xs '>
            <option onClick={() => setlang('عربي')} className='bg-blue-900'>عربي</option>
            <option onClick={() => setlang('الانجليزيه')} className='bg-blue-900'>English</option>
          </select>
          <div className='bg-gray-400 w-[0.5px] opacity-50 h-[12px]'></div>
        </div>
        <div className='flex flex-row-reverse text-xs items-center gap-[20px] pl-[100px] font-semibold xs:pl-3'>
          <p>{text.contactUs}</p>
          <div className='bg-gray-400 w-[0.5px] opacity-50 h-[12px]'></div>
          <p>{text.phone}</p>
        </div>
      </div> 

      <div className='bg-white p-[50px]
       w-[1100px] shadow-lg rounded-lg 
       flex items-center justify-center
        gap-[150px] xs:flex-col xs:w-[95%] xs:gap-[50px]'>
        <img src={logo1} className='size-[350px] xs:size-[250px] rounded' />
        <div className='flex flex-col gap-[20px]'>
          <h1 className='poppins-thin'>{text.name}</h1>
          <div className='bg-gray-200 h-[0.5px] w-full '></div>
          <h1 className='poppins-thinn'>{text.aboutTitle}</h1>
          <h1 className='text-xs'>{text.aboutDesc}</h1>
        </div>
      </div>

      <div className='p-1 w-full
        flex xs:flex-col xs:items-center
       flex-row-reverse justify-center gap-[40px]  '>
        <div >
          <img src={logo4} alt="" className='rounded-lg w-[700px] hover:-translate-y-1 duration-200' />
        </div>
        <div className=' flex justify-center flex-col gap-2'>
          <img src={logo3}  className='rounded-lg w-[330px] hover:-translate-y-1 duration-200' />
          <img src={logo2}  className='rounded-lg w-[330px] hover:-translate-y-1 duration-200 ' />
        </div>
      </div>

      <div className=' w-full flex justify-center gap-[30px] flex-wrap  '>

        
       
          <img src={logo5} className='w-[250px] xs:w-[98%] rounded-lg hover:-translate-y-1 duration-200' />
       
        <div className='flex flex-col gap-[10px]'>

    
          <img src={logo6} className='w-[300px] rounded-lg hover:-translate-y-1 duration-200' />
          <img src={logo7} className='w-[300px] rounded-lg hover:-translate-y-1 duration-200' />
       
       

        </div>
        <div className=' xs:flex-col xs:items-center flex gap-[20px]'>
        <div className='w-[200px] xs:w-[98%]'>
          <img src={logo8} className=' rounded-lg hover:-translate-y-1 duration-200' />
        </div>
        </div>
       
  
        <img src={logo9} className='w-[120px] xs:w-[150px]  rounded-lg hover:-translate-y-1 duration-200' />
        <img src={logo10} className='w-[200px] xs:w-[150px]  rounded-lg hover:-translate-y-1 duration-200' />
        <img src={logo11} className='w-[200px] xs:w-[150px]  rounded-lg hover:-translate-y-1 duration-200' />
        <img src={logo12} className='w-[200px] xs:w-[150px]  rounded-lg hover:-translate-y-1 duration-200' />
        <img src={logo13} className='w-[200px] xs:w-[150px]  rounded-lg hover:-translate-y-1 duration-200' />
        <img src={logo14} className='w-[200px] xs:w-[150px]  rounded-lg hover:-translate-y-1 duration-200' />
        <img src={logo15} className='w-[200px] xs:w-[150px]  rounded-lg hover:-translate-y-1 duration-200' />
       <video src={vid1} className='w-[300px]' controls />
       <video src={vid2} className='w-[300px]' controls />
       <video src={vid3} className='w-[300px]' controls />  
     

    
      </div>


      <div className="bg-blue-950 text-white flex items-center w-full flex-col xs:gap-0 gap-[40px] ">
        <div className='w-full flex p-[20px] xs:flex-col xs:gap-[30px] gap-[80px]'>
          <div className="flex flex-col gap-[10px]">
            <h1 className="poppins-thin text-white">{text.contactTitle}</h1>
            <div className="flex items-center gap-[10px]">
              <FaWhatsapp />
              <p className="text-xs">{text.phone}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <BsEnvelopeFill />
              <p className="text-xs">{text.email}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <SlLocationPin />
              <p className="text-xs">{text.location}</p>
            </div>
          </div>

          <div className="flex flex-col gap-[20px] xs:gap-0 items-center">
            <div className="flex gap-[30px]">
              <a href="https://www.facebook.com/profile.php?id=61572989114543&sk=about">
              <FaFacebook className="text-3xl hover:text-blue-600 cursor-pointer hover:-translate-y-1 duration-200" />
              </a>
             <a href="https://www.facebook.com/profile.php?id=61572989114543&sk=about">
              <FaInstagram className="text-3xl hover:text-blue-600 cursor-pointer hover:-translate-y-1 duration-200" />
             </a>
            </div>
            <div className="bg-gray-300 h-[2px]"></div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <div className="bg-gray-300 h-[2px]"></div>
          </div>
        </div>
        <p className="text-xs">{text.footerText}</p>
      </div>

    </div>
  );
}
