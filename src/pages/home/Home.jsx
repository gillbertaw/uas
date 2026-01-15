import React from "react";
import { Link } from "react-router-dom";
import '../../styles/home.css';
import heroVideo from '../../assets/images/home/video1.mp4';
import mapImg from '../../assets/images/home/map.png';
import flagAus from '../../assets/images/flag/australia-flag.png';
import flagCanada from '../../assets/images/flag/canada-flag.png';
import flagChina from '../../assets/images/flag/china-flag.png';
import flagIndonesia from '../../assets/images/flag/indonesia-flag.png';
import flagJapan from '../../assets/images/flag/japan-flag.png';
import flagKorea from '../../assets/images/flag/south-korea-flag.png';
import flagSwitz from '../../assets/images/flag/switzerland-flag.png';

class Home extends React.Component {
  render() {
    return (
      <div className="deidrich-badan">
        <div className="background-awan">
          <video className="awan-video" src={heroVideo} autoPlay muted loop playsInline />
          <div className="awan-overlay" />
          <div className="welcome">
            <h1 className="welcome-text">
              The world is a book, and those who do not travel read only one page.
            </h1>
            <p>“No one can choose your path but you.”</p>

            <div className="hero-cta">
              <Link className="region-btn btn btn-primary" to="/australia">Get Started</Link>
              <a className="btn play-btn" href={heroVideo} target="_blank" rel="noopener noreferrer">▶ Watch</a>
            </div>
          </div>
        </div>

        <div className="map">
          <h2 className="region-text">
            We are available across multiple countries for your next adventure.
          </h2>
          <img className="gambar-map" src={mapImg} alt="map" />
        </div>

        <div className="container d-flex justify-content-between flex-wrap">
          <div className="carousel">
            <div className="group">
              <div className="country-flag">
                <Link to="/australia"><img src={flagAus} alt="Australia" /></Link>
              </div>
              <div className="country-flag">
                <Link to="/canada"><img src={flagCanada} alt="Canada" /></Link>
              </div>
              <div className="country-flag">
                <Link to="/china"><img src={flagChina} alt="China" /></Link>
              </div>
              <div className="country-flag">
                <Link to="/indonesia"><img src={flagIndonesia} alt="Indonesia" /></Link>
              </div>
              <div className="country-flag">
                <Link to="/japan"><img src={flagJapan} alt="Japan" /></Link>
              </div>
              <div className="country-flag">
                <Link to="/korea"><img src={flagKorea} alt="Korea" /></Link>
              </div>
              <div className="country-flag">
                <Link to="/swizz"><img src={flagSwitz} alt="Switzerland" /></Link>
              </div>
            </div>

            <div className="group">
              <div className="country-flag">
                <Link to="/australia"><img src={flagAus} alt="Australia" /></Link>
              </div>
              <div className="country-flag">
                <Link to="/canada"><img src={flagCanada} alt="Canada" /></Link>
              </div>
              <div className="country-flag">
                <Link to="/china"><img src={flagChina} alt="China" /></Link>
              </div>
              <div className="country-flag">
                <Link to="/indonesia"><img src={flagIndonesia} alt="Indonesia" /></Link>
              </div>
              <div className="country-flag">
                <Link to="/japan"><img src={flagJapan} alt="Japan" /></Link>
              </div>
              <div className="country-flag">
                <Link to="/korea"><img src={flagKorea} alt="Korea" /></Link>
              </div>
              <div className="country-flag">
                <Link to="/swizz"><img src={flagSwitz} alt="Switzerland" /></Link>
              </div>
            </div>
            
          </div>
        </div>

        <div className="select-region">
          <Link className="region-btn btn-secondary btn-lg" to="/australia">Get Started</Link>
        </div>
      </div>
    );
  }
}

export default Home;
