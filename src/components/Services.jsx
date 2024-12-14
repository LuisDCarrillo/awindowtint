import Slider from "react-slick";
import './Services.css';

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    { src: "/4-our-services.jpg", alt: "" },
    { src: "/2-our-services.jpg", alt: "" },
    { src: "/6-our-services.jpg", alt: "" },
    { src: "/8-our-services.jpg", alt: "" },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="carousel-container">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="info-image"> {/* Ajuste para el contenedor de las imágenes */}
                <img src={slide.src} alt={slide.alt} />
              </div>
              <p className="caption">{slide.alt}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="services-text">
        <p>We offer our services in all of Central Florida and the surrounding areas.</p>
        <p>Our team of experts is dedicated to providing the best possible service to our customers.</p>
      </div>
    </section>
  );
};

export default Services;
