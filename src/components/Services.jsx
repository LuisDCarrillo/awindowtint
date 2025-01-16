/* eslint-disable react/prop-types */
import  { useState } from "react";
import Slider from "react-slick";
import './Services.css';

const ServiceCarousel = ({ service, settings, onImageClick}) => (
  <div className="service-slide">
    <h3>{`Professional ${service.type}`}</h3>
    <p>{service.description}</p>
    <Slider {...settings}>
      {service.images.map((image, index) => (
        <div key={index} className="sub-slide" onClick={()=> onImageClick(image)} >
          <img src={image.src} alt={image.alt} loading="lazy" />
        </div>
      ))}
    </Slider>
  </div>
);

const Services = () => {
  
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const mainCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: true,
  };

  const subCarouselSettings = {
    dots: true, // Agrega puntos de navegación manual
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: true, // Agrega flechas para navegación manual
  };

  const services = [
    {
      type: "Car Window Tinting",
      description: "Protect your car and enhance its appearance with professional window tinting services.",
      images: [
        { src: "/6-our-services.jpg", alt: "Car Window Tinting 5" },
        { src: "/car-window-1.jpg", alt: "Car Window Tinting 1" },
        { src: "/car-window-2.jpg", alt: "Car Window Tinting 2" },
        { src: "/car-window-3.jpg", alt: "Car Window Tinting 3" },
        { src: "/car-window-4.jpg", alt: "Car Window Tinting 4" },
      ],
    },
    {
      type: "Commercial Window Tinting",
      description: "Increase privacy and reduce energy costs for your business with our commercial tinting solutions.",
      images: [
        { src: "/4-our-services.jpg", alt: "Commercial Window Tinting 5" },
        { src: "/commercial-1.JPG", alt: "Commercial Window Tinting 1" },
        { src: "/commercial-2.JPG", alt: "Commercial Window Tinting 2" },
        { src: "/commercial-3.JPG", alt: "Commercial Window Tinting 3" },
        { src: "/commercial-4.JPG", alt: "Commercial Window Tinting 4" },
      ],
    },
    {
      type: "Residential Window Tinting",
      description: "Enhance comfort and privacy at home while saving on energy bills with residential tinting.",
      images: [
        { src: "/2-our-services.jpg", alt: "Residential Window Tinting 5" },
        { src: "/residential-1.jpg", alt: "Residential Window Tinting 1" },
        { src: "/residential-2.JPG", alt: "Residential Window Tinting 2" },
        { src: "/residential-3.jpg", alt: "Residential Window Tinting 3" },
        { src: "/residential-4.jpg", alt: "Residential Window Tinting 4" },
      ],
    },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="carousel-container">
        <Slider {...mainCarouselSettings}>
          {services.map((service, index) => (
            <ServiceCarousel
             key={index} 
             service={service}
             settings={subCarouselSettings}
              onImageClick={handleImageClick} />
          ))}
        </Slider>
      </div>
      <div className="services-text">
        <p>We offer our services across Central Florida and the surrounding areas.</p>
        <p>Our experts are dedicated to providing top-notch solutions tailored to your needs.</p>
      </div>
       {/* Modal */}
       {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage.src} alt={modalImage.alt} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
