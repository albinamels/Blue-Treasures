// import { pageLinks, socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      {/* <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul> */}

      <SocialLinks parentClass="footer-icons" itemClass="footer-icon" />

      {/* <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <li key={id}>
              <a href={href} target="_blank" className="footer-icon">
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul> */}
      <p className="copyright">
        copyright &copy; Silk Road Explore travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
