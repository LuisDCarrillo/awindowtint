import './Benefits.css';

const Benefits = () => {
  return (
    <section className="benefits" aria-labelledby="benefits-heading">
      <h2 id="benefits-heading">Why Choose A Window Tint?</h2>
      <p className="benefits-description">
        Discover the exceptional advantages of choosing our professional tinting services for your home, car, or business.
      </p>
      <ul className="benefits-list">
        <li>
          <span>Reduces heat by up to 84%</span>
        </li>
        <li>
          <span>Ensures 100% privacy</span>
        </li>
        <li>
          <span>Blocks 99.9% of harmful UV rays</span>
        </li>
        <li>
          <span>Saves up to 30% on electricity costs</span>
        </li>
      </ul>
      <img
        src="/vertical-a-windowtinti.jpg"
        alt="Illustration of tinting benefits, including heat reduction, privacy, and UV protection"
        className="benefits-image"
      />
    </section>
  );
};

export default Benefits;
