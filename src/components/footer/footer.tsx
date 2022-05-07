import React, { Component } from 'react';
import "./footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";

export default class  Footer extends Component{
    render() {
        return (
           <div id="footer-section">
                  <div className='horizontal-line'>
                      Akshar Ayurved
                 </div>
               <div className='table'> 
                 <div className='tr'>
                      <div className='table-headline td'>Follow us</div>
                  </div>
                  <div className='tr'>
                       <div className='table-headline td'>Store info</div>
                       <div className='td'>Contact us</div>
                 </div>
                  <div className='tr'>
                       <div className='table-headline td'>Policies</div>
                       <div className='td'>Return & Refund Policy</div>
                       <div className='td'>Privacy Policy</div>
                       <div className='td'>Payment Policy</div>
                       <div className='td'>Shipping Policy</div>
                       <div className='td'>Terms & Conditions</div>
                 </div>
                  <div className='tr'>
                       <div className='table-headline td'> Keep in touch</div>
                       <div className='td'><FaPhoneAlt /> +919412721980</div>
                       <div className='td'> < MdOutlineEmail /> aksharayurved@rediffmail.com</div>
                       <div className='td'> < HiOfficeBuilding /> D 14,15 Indusdivial Area UPSIDC,Jalesar Rd , Firozabad , Uttar Pradesh , 283203</div>
                 </div>
             </div>
         </div>
        )
    }
}