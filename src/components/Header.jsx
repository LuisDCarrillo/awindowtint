import './Header.css';

const Header = () => {
  return (
    <header className="header" role="banner">
      <h1 className="header-title">AWindowTint - Expert Tinting Services</h1>
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
        onClick={() => window.open("https://www.instagram.com/a.window.tinting?igsh=c3VseXAzMGZwdXVj", "_blank")}
        aria-label="Get a free estimate for your window tinting project"
      >
       Get Your Free Estimate
      </button>
    </header>
  );
};

export default Header;
