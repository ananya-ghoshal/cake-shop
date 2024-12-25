import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div>
        <div>FAQ's</div>
        <div>Privacy Policy</div>
        <div>Track Order</div>
        <div>Reviews</div>
      </div>
      <div className="hr_line"></div>
      <div>
        <div>Contact Us :</div>
        <div>Email : thecakeshop@cakemail.com</div>
        <div>Phone : 8765977654</div>
        <div>Timings: Mon-Sat (10:30 a.m to 6 p.m)</div>
      </div>
      <div className="hr_line"></div>
      <div>
        <div>Get connected :</div>
        <div>Facebook</div>
        <div>Instagram</div>
      </div>
    </div>
  );
}

export default Footer;
