import React from "react";
import { Link } from "react-router-dom";
import '../../styles/home.css';
import heroVideo from '../../assets/images/home/video1.mp4';
import mapImg from '../../assets/images/home/map.png';
import homeFlags from '../../data/homeFlag';

class Home extends React.Component {
  render() {
    return (
    <div className="container deidrich-badan">
      <div className="video-container"><video className="awan-video" src={heroVideo} autoPlay muted loop playsInline />
        <div className="background-awan">
          <div className="awan-overlay" />
          <div className="welcome">
            <h1 className="welcome-text">
              The world is a book, and those who do not travel read only one page.
            </h1>
            <p>“No one can choose your path but you.”</p>

            <div className="hero-cta">
              <Link className="region-btn btn btn-primary" to="/list-ticket">
                Get Started
              </Link>
              <a
                className="btn play-btn"
                href={heroVideo}
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶ Watch
              </a>
            </div>
          </div>
        </div>
        </div>

        <div className="map">
          <h2 className="region-text">
            We are available across multiple countries for your next adventure.
          </h2>
          <img className="gambar-map" src={mapImg} alt="map" />
        </div>

        <div className="container-fluid">
          <div className="carousel">
            <div className="track">
              {homeFlags.map((flag) => (
                <div key={flag.id} className="country-flag">
                  <Link to={flag.route}><img src={flag.image} alt={flag.name} /></Link>
                </div>
              ))}
              {homeFlags.map((flag) => (
                <div key={`duplicate-${flag.id}`} className="country-flag">
                  <Link to={flag.route}><img src={flag.image} alt={flag.name} /></Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="select-region">
          <Link className="region-btn btn-secondary btn-lg" to="/list-ticket">
            Get Started
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
