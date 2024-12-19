import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo" aria-label="Footer">
      <div className="footer-content">
        <p>
          © 2024 Window Tinting Services. All rights reserved.
        </p>
        <nav className="footer-nav">
          <a
                href="https://www.instagram.com/a.window.tinting?igsh=c3VseXAzMGZwdXVj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
              >
                Instagram
              </a>
        </nav>
        <p className="footer-contact">
          Contact us: 
          <a href="tel:+13214021863" aria-label="Call us at +1 (321) 402-1863">
            +1 (321) 402-1863
          </a> | 
          <a href="mailto:awindowtint3171@gmail.com?subject=Inquiry" aria-label="Email us at awindowtint3171@gmail.com">
            awindowtint3171@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
