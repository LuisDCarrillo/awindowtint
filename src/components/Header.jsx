import './Header.css';

const Header = () => {
  const phoneNumber="tel:+13214021863";
  return (
    <header className="header" role="banner">
      <h1 className="header-title">Awindowtint - Expert Tinting Services</h1>
      <p className="header-tagline">
      We provide high-quality tinting services for your <br />
      commercial, residential, and automotive needs.
      </p>
      <video className="header-video" autoPlay muted loop aria-label="Promotional video showcasing our tinting services">
        <source src="/video-inicio-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        className="header-button"
        onClick={() => window.location.href= `tel:${phoneNumber}`}
        aria-label="Get a free estimate for your window tinting project"
      >
       Get Your Free Estimate
      </button>
    </header>
  );
};

export default Header;
