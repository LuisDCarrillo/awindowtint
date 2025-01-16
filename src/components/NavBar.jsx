import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-logo">
        <img 
          src="/awindowtint-web.png" 
          alt="A Window Tint Logo - Professional Tinting Services" 
          className="logo-image" 
        />
      </div>
      <div className="navbar-links">
        <a
          href="tel:+13214021863"
          className="number"
          aria-label="Call or text us at +1 (321) 402-1863"
        >
          Call or Text +1 (321) 402-1863
        </a>
        <a
          className="navbar-email"
          href="mailto:awindowtint3171@gmail.com?subject=Services&body=Hello, I would like to know more about your services."
          aria-label="Send an email to awindowtint3171@gmail.com"
        >
          awindowtint3171@gmail.com
        </a>
        <a
          href="https://www.instagram.com/a.window.tinting?igsh=c3VseXAzMGZwdXVj"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-link instagram-link"
          aria-label="Visit our Instagram profile"
        >
          Instagram
          <img
            src="/instagram-logo.png"
            alt="Follow us on Instagram"
            className="instagram-icon"
          />
        </a>
        <a href=""
        target='_blank'
        rel='noopener noreferrer'
        className='navbar-link facebook-link'
        aria-label='Visit our Facebook profile'
        >
          Facebook </a>
      </div>
    </nav>
  );
};

export default Navbar;
