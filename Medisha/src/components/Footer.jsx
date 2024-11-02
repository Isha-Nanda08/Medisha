import React from 'react';
// import styled, { keyframes, css } from 'styled-components';
import '../styles/footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Partner with Medisha</a></li>
              <li><a href="#">Sell at Medisha</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Featured Categories</h3>
            <ul>
              <li><a href="#">Must Haves</a></li>
              <li><a href="#">Elderly Care</a></li>
              <li><a href="#">Personal Care</a></li>
              <li><a href="#">Healthcare Devices</a></li>
              <li><a href="#">Health Food and Drinks</a></li>
              <li><a href="#">Skin Care</a></li>
              <li><a href="#">Mother and Baby Care</a></li>
              <li><a href="#">Accessories & Wearables</a></li>
              <li><a href="#">Fitness Supplements</a></li>
              <li><a href="#">Ayurvedic Care</a></li>
              <li><a href="#">Sexual Wellness</a></li>
              <li><a href="#">Diabetic Care</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Need Help</h3>
            <ul>
              <li><a href="#">Browse All Medicines</a></li>
              <li><a href="#">Browse All Molecules</a></li>
              <li><a href="#">Browse All Cities</a></li>
              <li><a href="#">Browse All Areas</a></li>
              <li><a href="#">Browse All Stores</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
            <h3>Policy Info</h3>
            <ul>
              <li><a href="#">Editorial Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Vulnerability Disclosure Policy</a></li>
              <li><a href="#">Terms and Conditions</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Follow us on</h3>
            {/* <div className="wrap">
  <div className="social">
    <i className="icon-facebook fb"></i>
    <i className="icon-twitter tw"></i>
    <i className="icon-youtube yt"></i>
    <i className="icon-dribble dr"></i>
    <i className="icon-skype sk"></i>
     <i className="icon-dropbox db"></i>
     <i className="icon-apple apple"></i>
  </div>
</div> */}
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Medisha. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
