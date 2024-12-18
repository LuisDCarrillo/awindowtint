import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/Awindowtint.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <a   href="tel:+13214021863" className="number">Call or Text  +1(321) 402-1863</a>
        <a className="navbar-email" href="mailto:awindowtint3171@gmail.com?subject=Services&body=Hello, I would like to know more about your services."> awindowtint3171@gmail.com</a>
        <a
          href="https://www.instagram.com/a.window.tinting?igsh=c3VseXAzMGZwdXVj"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-link instagram-link"
        >
          Instagram
          <img
            src="/instagram-logo.png"
            alt="Instagram"
            className="instagram-icon"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
