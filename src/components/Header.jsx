import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title"> A Window Tint </h1>
        <p className="header-tagline">
          We provide high-quality tinting services for your <br />
          commercial, residential, and automotive needs.
        </p>
        <video className="header-video" autoPlay muted loop>
          <source src="/awintintweb.mp4" type="video/mp4" />
        </video>
      <button className="header-button" 
      onClick={() => window.open("https://www.instagram.com/a.window.tinting?igsh=c3VseXAzMGZwdXVj","_blank")}>
        Get a Free Estimate</button>
    </header>
  );
};

export default Header;
