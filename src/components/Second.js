import React from 'react';
import imgg from "./assets/image1.png"
import imgg2 from "./assets/image2.png"
import imgg3 from "./assets/image.png"
import health from "./assets/healthy-heart.png"
import skin from "./assets/skincare.png"
import immune from "./assets/immunity.png"
import hair from "./assets/hair.png"
import Home from "./assets/home.png"
import girl2 from "./assets/girl2.png"
import green from "./assets/green2.png"
import purple from "./assets/purple (1).png"
import { FiFacebook } from "react-icons/fi";
import { RiInstagramLine, RiYoutubeFill } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { SlSocialTwitter } from "react-icons/sl";
const Second = () => {
  return (
    <>
    <div>
      <nav className="bg-[#FFF7E2] flex justify-between px-20 items-center p-5">
          <div>
            <h1 className="text-3xl text-[#3A643B] tracking-widest font-semibold">
              AMRUTAM
            </h1>
          </div>
          <div className="flex text-md justify-start gap-4">
            <button className="text-[#474747]">Home</button>
            <button className="text-[#3A643B] font-bold">Find Doctors</button>
            <button className="text-[#474747]">About Us</button>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 ring-1 undefined ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B] font-lighter rounded-lg">
              Login
            </button>
            <button className="px-4 py-1.5 ring-1 bg-[#3A643B] text-white ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B] font-lighter rounded-lg">
              Sign-Up
            </button>
          </div>
        </nav>
  




    </div>
   <div>
    <img  src={imgg} alt='' className='im'     />
    <img src={imgg2} alt='' className='im2'    />
 
   <div className='cont'>
   <img src={imgg3} alt='' className='im3'   />

<div className='contt'>

<div>
    <div className='kin starsup'>

    <h1 style={{fontFamily:"cursive",fontWeight:"bold"}}>Dr.Bruce Willis </h1><img style={{marginTop:'-20%',marginLeft:"103%"}} alt='' src={purple}   /> 

<span className='gre' style={{fontFamily:"unset",fontWeight:"640",fontSize:"16px"}} >Gynecologist</span>
    </div>

<h1 className='gre2 stars'>4.2 <span>⭐️⭐️⭐️⭐️</span></h1>
</div>

<div>
    <span className='gre' style={{fontFamily:"unset",fontWeight:"640",fontSize:"16px"}}>Followers</span>
    <h1 style={{fontWeight:"bold"}}>850</h1>
</div>

<div>

<span className='gre' style={{fontFamily:"unset",fontWeight:"640",fontSize:"16px"}}>Following</span>
    <h1 style={{fontWeight:"bold"}}>18K</h1>
</div>

<div>

<button className="px-4 py-1.5 ring-1 bg-[#3A643B] text-white ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B] font-lighter rounded-lg">
              Book an Appointment
            </button>
</div>

</div>




   </div>
   </div>

   <div className='parentf' style={{display:'flex',justifyContent:"space-around"}}>
    <div>
        <div className='first'>

        <header className="header">
           <div className="header__title" >A Little About me</div>
           <div className="header__social">Follow +</div>
       </header>
<div className='paragraph'>
<p class="content__paragraph" style={{fontFamily:"cursive"}}>Hello I am Dr. Bruce Willis a Gynecologist in Sanjivini Hospital Surat. love to work with all my hospital staff and senior doctors. Completed my graduation in Gynecologist Medicine </p>

</div>
<div className='king'><span>_________________________________________________ </span><h1> Read More</h1></div>
 
<div className='languages'>
    <h1 style={{fontFamily:"cursive",fontWeight:"bold"}}>Language Spoken</h1>
    <div className='languages__language'>English</div>
    <div className='languages__language'>Hindi</div>
    <div className='languages__language'>Telugu</div>

</div>
<div className='ic'>
<div className='ic1'><FiFacebook /></div>
<div className='ic1'><RiInstagramLine /></div>
<div className='ic1'><AiOutlineYoutube /></div>
<div className='ic1'><SlSocialTwitter /></div>
</div>
        </div>
            <div className='first'>

        <header className="header">
           <div className="header__title" >I Specialize In</div>
    
       </header>


<div style={{display:"flex",justifyContent:"space-evenly" ,marginRight:"5%"}}>


<div className='sec'>
<div className='sec1p'>
    <div className='sec1pc'>
    <div className='sec1' >
<img src={health} style={{background:"#fffcf2"}}   alt=''  />
</div>
    </div>
    
</div>

</div>

<div className='sec'>
<div className='sec1p'>
    <div className='sec1pc'>
    <div className='sec1' >
<img src={skin} style={{background:"#fffcf2"}}   alt=''  />
</div>
    </div>
    
</div>

</div>

<div className='sec'>
<div className='sec1p'>
    <div className='sec1pc'>
    <div className='sec1' >
<img src={immune} style={{background:"#fffcf2"}}   alt=''  />
</div>
    </div>
    
</div>

</div>

<div className='sec'>
<div className='sec1p'>
    <div className='sec1pc'>
    <div className='sec1' >
<img src={hair} style={{background:"#fffcf2"}}   alt=''  />
</div>
    </div>
    
</div>

</div>



</div>
<div style={{display:"flex",justifyContent:"space-evenly",marginTop:"-8%",marginBottom:"5%",marginRight:'5%'}}>
<h1 style={{fontFamily:"cursive",fontWeight:"bold",marginLeft:"-4%"}}>Women's Health
</h1>
<h1 style={{fontFamily:"cursive",fontWeight:"bold",marginLeft:"-4%"}}>Skin Care
</h1>
<h1 style={{fontFamily:"cursive",fontWeight:"bold"}}>Immunity
</h1>
<h1 style={{fontFamily:"cursive",fontWeight:"bold",marginRight:"-4%"}}>Hair Care
</h1>
</div>




        </div>
          <div className='first'>

        <header className="header">
           <div className="header__title" >The Concerns I Treat</div>
         
       </header>
       <div className='languages1'>
   
    <div className='languages__language1' style={{marginBottom:"3%"}}>  <span className='gre1' style={{fontFamily:"unset",fontWeight:"640",fontSize:"14px",marginBottom:"3%"}}>Skin Treatment</span></div>
    <div className='languages__language1' style={{marginBottom:"3%"}}>  <span className='gre1' style={{fontFamily:"unset",fontWeight:"640",fontSize:"14px"}}>Pregnancy</span></div>
    <div className='languages__language1' style={{marginBottom:"3%"}}>  <span className='gre1' style={{fontFamily:"unset",fontWeight:"640",fontSize:"14px"}}>Period Doubts</span></div>
    <div className='languages__language1' style={{marginBottom:"3%"}}>  <span className='gre1' style={{fontFamily:"unset",fontWeight:"640",fontSize:"14px"}}>Endometriosis</span></div>
    <div className='languages__language1' style={{marginBottom:"3%"}}>  <span className='gre1' style={{fontFamily:"unset",fontWeight:"640",fontSize:"14px"}}>Pelvic Pain</span></div>
    <div className='languages__language1' style={{marginBottom:"3%",marginLeft:"-3%"}}>  <span className='gre1' style={{fontFamily:"unset",fontWeight:"640",fontSize:"14px"}}>Ovarian Cysts</span></div>
    <div className='languages__languag' style={{marginBottom:"3%",marginRight:"6%"}}>          <div className="header__social">+5 More</div></div>
 
   
    
</div>

        </div>
        <div className='first'>

<header className="header">
   <div className="header__title" >My Work Experience</div>
   
</header>
<div>
<h1 style={{color:'#3a643b',fontWeight:"bold",marginTop:"4%",marginRight:"36%",marginBottom:"0%"}}>I HAVE BEEN IN PRACTICE FOR : 7+ YEARS</h1>
<span style={{color:"#858585d6",marginLeft:"-20%",marginBottom:"10%"}}>_________________________________________________</span>
<div>

<img alt='' src={Home}  style={{width:"8%",marginLeft:"5%",marginBottom:'5%',marginTop:"4%"}}   />
<div>
   <h1 style={{fontFamily:"cursive",fontWeight:"bold",marginTop:"-12%",marginBottom:"12%",marginLeft:"-26%"}}>Midtown Medical Clinic</h1>
   <h1 style={{color:"#858585d6",fontWeight:"bold",marginTop:"-11%",marginBottom:"12%",marginLeft:"-26%"}}>Senior Doctor</h1>
   <h1 style={{color:"#858585d6",marginTop:"-20.5%",marginBottom:"12%",marginLeft:"59%",fontSize:"94%"}}>2016-PRESENT</h1>
</div>
<img alt='' src={Home}  style={{width:"8%",marginLeft:"5%",marginBottom:'5%'}}   />
<div>
   <h1 style={{fontFamily:"cursive",fontWeight:"bold",marginTop:"-14%",marginBottom:"12%",marginLeft:"-26%"}}>Midtown Medical Clinic</h1>
   <h1 style={{color:"#858585d6",fontWeight:"bold",marginTop:"-11%",marginBottom:"12%",marginLeft:"-26%"}}>Senior Doctor</h1>
   <h1 style={{color:"#858585d6",marginTop:"-20.5%",marginBottom:"12%",marginLeft:"59%",fontSize:"94%"}}>2010-2015</h1>
</div>
</div>
</div>
<div></div>

</div>     
    </div>
    <div className='first1'>

      
<div className='languages__language2' style={{marginBottom:"10%" , marginTop:"5%"}}>
 
   <span className='gre2' style={{fontFamily:"unset",fontWeight:"640",fontSize:"14px",color:"black"}}>Appointment Fee</span>
   <span className='gre2' style={{fontFamily:"unset",fontWeight:"640",fontSize:"14px"}}>Rs 699.00</span>
   </div>
   <div style={{display:"flex",justifyContent:"space-evenly"}}>
   <h1 style={{marginTop:"-4%",fontWeight:"bold",marginLeft:"-4%"}}>Select your mode of session</h1><span style={{marginTop:"-5%",color:"#ddddddd6"}}>_________________________________</span>
   </div>

   <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"4%",marginBottom:"3%"}}>

<div className='kio' style={{display:"flex",flexDirection:"column"}}>
<h1 style={{fontSize:"95%",marginTop:"3%",fontFamily:"unset",fontWeight:"640"}}>In-Clinic</h1>
<h1 style={{fontSize:"75%",marginBottom:"3%"}} >45 Mins</h1>
</div>

<div className='kio' style={{display:"flex",flexDirection:"column",background:"#F2FBF2",border:"1px solid #3a643b"}}>
<h1 style={{fontSize:"95%",marginTop:"3%",fontFamily:"unset",fontWeight:"640",color:"#3a643b"}}>Video <img style={{marginTop:'-12%',marginLeft:"65%",width:"11%"}} alt='' src={green}   /> </h1>
<h1 style={{fontSize:"75%",marginBottom:"3%"}} >45 Mins</h1>
</div>

<div className='kio' style={{display:"flex",flexDirection:"column"}}>
<h1 style={{fontSize:"95%",marginTop:"3%",fontFamily:"unset",fontWeight:"640"}}>Chat</h1>
<h1 style={{fontSize:"75%",marginBottom:"3%"}} >10 Mins</h1>
</div>


   </div>

   <div style={{display:"flex",justifyContent:"space-evenly"}}>
   <h1 style={{marginTop:"4%",fontWeight:"bold",marginLeft:"-4%"}}>Pick a time slot</h1><span style={{marginTop:"3%",color:"#ddddddd6"}}>_________________________________</span>
   <h1 style={{marginTop:"5%",marginLeft:"-9%"}}><FaCalendar /></h1>
   </div>


<div style={{display:"flex",justifyContent:"space-evenly",marginTop:"5%",marginBottom:"4%",border:"1px solid #ddddddd6",width:"95%",marginLeft:"2.5%",marginRight:"2.5%",borderRadius:"25px"}}>
<h1 style={{marginTop:"7%"}}><IoIosArrowDropleft /></h1>
<div className='kio1' style={{display:"flex",flexDirection:"column",marginTop:"4%",marginBottom:"4%",background:"#F2FBF2"}}>
<h1 style={{fontSize:"95%",marginTop:"3%",fontFamily:"unset",fontWeight:"640",color:"#3a643b"}}>Mon, 10 Oct</h1>
<h1 style={{fontSize:"85%",marginBottom:"3%",marginTop:"4%",fontFamily:"unset",fontWeight:"640",color:"#818181"}} >10 slots</h1>
</div>

<div className='kio1' style={{display:"flex",flexDirection:"column",marginTop:"4%",marginBottom:"4%"}}>
<h1 style={{fontSize:"95%",marginTop:"3%",fontFamily:"unset",fontWeight:"640"}}>Tue, 11 Oct</h1>
<h1 style={{fontSize:"85%",marginBottom:"3%",marginTop:"4%",fontFamily:"unset",fontWeight:"640",color:"#D5512E"}} >02 slots</h1>
</div>

<div className='kio1' style={{display:"flex",flexDirection:"column",marginTop:"4%",marginBottom:"4%"}}>
<h1 style={{fontSize:"95%",marginTop:"3%",fontFamily:"unset",fontWeight:"640"}}>Wed, 12 Oct</h1>
<h1 style={{fontSize:"85%",marginBottom:"3%",marginTop:"4%",fontFamily:"unset",fontWeight:"640",color:"#F1B93A"}} >05 slots</h1>
</div>
<h1 style={{marginTop:"7%"}}><IoIosArrowDropright /></h1>

   </div>

   <h1 style={{fontSize:"95%",marginBottom:"3%",fontFamily:"unset",fontWeight:"640",color:"black",marginRight:"80%"}} >Morning</h1>
   <div className='gre3p'>

     <div className='gre3'>
       <h1 style={{fontFamily:"unset",fontWeight:"500"}}>09:00 AM</h1>
     </div>
     <div style={{fontFamily:"unset",fontWeight:"500"}} className='gre3'><h1>09:30 AM</h1></div>
     <div style={{fontFamily:"unset",fontWeight:"500"}} className='gre3'><h1>10:00 AM</h1></div>
     <div style={{fontFamily:"unset",fontWeight:"500"}} className='gre3'><h1>10:15 AM</h1></div>
    
   </div>

   <div className='gre3p2' style={{marginTop:"3%",marginBottom:"3%"}}>
   <div className='gre3' style={{marginLeft:'2.5%',fontFamily:"unset",fontWeight:"500"}}><h1>10:45 AM</h1></div>
   <div className='gre3' style={{marginLeft:'3%',fontFamily:"unset",fontWeight:"500",background:'#3A643B',color:'white'}}><h1>11:00 AM</h1></div>
   </div>

   <h1 style={{fontSize:"95%",marginBottom:"3%",fontFamily:"unset",fontWeight:"640",color:"black",marginRight:"80%"}} >Evening</h1>
   <div className='gre3p'>

     <div className='gre3'>
       <h1 style={{fontFamily:"unset",fontWeight:"500"}}>04:00 PM</h1>
     </div>
     <div style={{fontFamily:"unset",fontWeight:"500"}} className='gre3'><h1>04:15 PM</h1></div>
     <div style={{fontFamily:"unset",fontWeight:"500"}} className='gre3'><h1>04:30 PM</h1></div>
     <div style={{fontFamily:"unset",fontWeight:"500"}} className='gre3'><h1>04:45 PM</h1></div>
    
   </div>

   <div className='gre3p2' style={{marginTop:"3%",marginBottom:"3%"}}>
   <div className='gre3' style={{marginLeft:'2.5%',fontFamily:"unset",fontWeight:"500"}}><h1>05:15 PM</h1></div>

   </div>

   <button className="px-4 py-1.5 ring-1 bg-[#3A643B] text-white ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B]  rounded-lg" style={{marginTop:"3%",marginBottom:"0%",width:'80%',padding:"2.5%",fontFamily:"unset",fontWeight:"540",fontSize:"125%"}}>
     Make an Appointment
   </button>





    </div>

    
   </div>
    </>
  );
};

export default Second;