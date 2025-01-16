import './Videos.css';

const Videos = () => {
  return (
    <div className="videos-container">
      {/* Video 1 */}
      <div className="video-card">
        <h3 className="video-title">Car Window Tinting</h3>
        <p className="video-description">
          Learn about the benefits of car window tinting, including privacy and UV protection.
        </p>
        <video
          className="video-player"
          src="/carwindow.mp4"
          type="video/mp4"
          loop
          autoPlay
          muted
          preload='auto'
          aria-label="Car window tinting video"
          playsInline
        />
      </div>

      {/* Video 2 */}
      <div className="video-card">
        <h3 className="video-title">Residential Window Tinting</h3>
        <p className="video-description">
          Discover how residential window tinting improves energy efficiency and privacy in your home.
        </p>
        <video
          className="video-player"
          src="/residential.mp4"
          loop
          autoPlay
          muted
          preload='auto'
          aria-label="Residential window tinting video"
          playsInline
        />
      </div>

      {/* Video 3 */}
      <div className="video-card">
        <h3 className="video-title">Commercial Window Tinting</h3>
        <p className="video-description">
          Explore the benefits of commercial window tinting to protect your workspace and reduce energy costs.
        </p>
        <video
          className="video-player"
          src="/commercial.mp4"
          loop
          autoPlay
          muted
          aria-label="Commercial window tinting video"
          preload='auto'
          playsInline
        />
      </div>
    </div>
  );
};

export default Videos;
