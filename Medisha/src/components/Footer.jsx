import '../styles/footer.css';

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
                <li><a href="#">Partner with PharmEasy</a></li>
                <li><a href="#">Sell at PharmEasy</a></li>
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
              <ul className="social-icons">
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              </ul>
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