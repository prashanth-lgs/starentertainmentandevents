import React from 'react';
import './Contact.css';
import img from "../images/background.png";




const Contactus = () => {
 

  return (
    <>
  
    <nav className='contactform' id='contact' style={{backgroundImage: `url(${img})`}}>
    <div className="container">
      <div className="content">
        {/* <div className="left-side"> */}
          {/* <div className="address details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text-one">Labyrinth Globals Soutions</div>
            <div className="text-two">5th Floor, Madhapur</div>
          </div>
          <div className="phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Phone</div>
            <div className="text-one"> 040 4602 5358</div>
          
          </div> */}
          {/* <div className="email details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
 
            <div className="text-two">info@labyrinthglobalsolutions</div>
          </div>
        </div> */}
        <div className="right-side">
          <div className="topic-text" >Contact Us</div>
          <br/>
          <p style={{color:"white",gap:"10px"}}>
           <h1 style={{fontSize:"20px"}}>USA BRANCH </h1> 
        3919 FARGO AVE SKOKIE, IL 60076-3917<br/><br/>
           <h1 style={{fontSize:"20px"}}>INDIA BRANCH </h1>
            16-4-79 KHALLA SAHIFA, CHANCHALGUDA, MALAKPET, HYDERABAD 500024, TELANGANA, INDIA.
          </p>
          <br/>
          <br/>
          <form action="#">
            <div className="input-box">
              <input  type="text" placeholder="Enter your name"
               />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your email" 
              />
            </div>
            <div className="input-box message-box">
              {/* Assuming you want a text area for the message */}
             <input type="text" placeholder="Enter your message" 
            />
            </div>
            <div className="contactbutton">
              <input style={{color:"black",width:"65%",height:"75%",fontSize:"15px",padding:"10px"}} type="button" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </nav>

    </>
  );
};

export default Contactus;