import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-outer-container">
        <div className="footer-inner-container">
          <div className="footer-icon">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer-info">
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
              <li>Service Code</li>
            </ul>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Terms of Use</li>
              <li>Contact Us</li>
            </ul>
            <ul>
              <li>Account</li>
              <li>Redeem Gift Cards</li>
              <li>Privacy</li>
              <li>Speed Test</li>
            </ul>
            <ul>
              <li>Media Center</li>
              <li>Buy Gift Cards</li>
              <li>Cookie Preferences</li>
              <li>Legal Notices</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Netflix, Inc.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
