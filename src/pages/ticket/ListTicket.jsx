import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/listTicket.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ListTicket() {
  const bg = process.env.PUBLIC_URL + "/images/ticket/list_ticket.jpg";
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const cards = [
    {
      title: "Japan",
      img: "/images/country/jepang.jpg",
      price: "22.779.000",
    },
    {
      title: "Malaysia",
      img: "/images/country/malaysia.jpg",
      price: "2.559.000",
    },
    {
      title: "Thailand",
      img: "/images/country/thailand.png",
      price: "6.899.000",
    },
    {
      title: "Singapore",
      img: "/images/country/singapore.jpg",
      price: "5.679.000",
    },
    {
      title: "Vietnam",
      img: "/images/country/vietnam.jpg",
      price: "12.999.000",
    },
    {
      title: "Korea",
      img: "/images/country/korea.jpeg",
      price: "14.259.000",
    },
    {
      title: "China",
      img: "/images/country/china.jpeg",
      price: "25.729.000",
    },
    {
      title: "Australia",
      img: "/images/country/australia.jpg",
      price: "20.149.000",
    },
    {
      title: "Switzerland",
      img: "/images/country/switzerland.jpeg",
      price: "28.849.000",
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [cards.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Get visible slides based on screen size
  const getVisibleSlides = () => {
    const slidesToShow = 3;
    const visibleCards = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % cards.length;
      visibleCards.push(cards[index]);
    }
    return visibleCards;
  };

  return (
    <div
      className="LT_body"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="IsiLT">
        <div className="swiper-container">
          <div className="slider-wrapper">
            <div className="card-list">
              {getVisibleSlides().map((card, idx) => (
                <div key={`${card.title}-${idx}`} className="card-item">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="negara-image_LT"
                    onError={(e) => {
                      e.target.src = "/images/logo/logo_travel.png";
                    }}
                  />
                  <h2 className="namabg_LT">{card.title}</h2>
                  <p className="harga_LT">{card.price} / pax</p>
                  <Link to={`/${card.title.toLowerCase()}`} className="detail-button">
                    <span className="detail-icon">→</span>
                    <span className="detail-text">Details</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button className="swiper-button-prev" onClick={handlePrev}>
            ❮
          </button>
          <button className="swiper-button-next" onClick={handleNext}>
            ❯
          </button>

          {/* Pagination Dots */}
          <div className="swiper-pagination">
            {cards.map((_, idx) => (
              <button
                key={idx}
                className={`swiper-pagination-bullet ${
                  idx === currentIndex ? "swiper-pagination-bullet-active" : ""
                }`}
                onClick={() => handleDotClick(idx)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
