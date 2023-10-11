import logo from "../images/logo.svg";
// import { pageLinks, socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div className="section-title" style={{ marginBottom: "0.5rem" }}>
            <h3>
              Silk <span>Road</span>
            </h3>
          </div>
          {/* <img src={logo} className="nav-logo" alt="backroads" /> */}
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        {/* <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul> */}

        <SocialLinks parentClass="nav-icons" itemClass="nav-icon" />

        {/* <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
