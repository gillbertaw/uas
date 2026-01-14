import React from "react";
import "../styles/about.css";
import  CompanyStory  from '../assets/images/company-story.jpeg'
import LogoTravel from "../assets/images/LogoTravel.png"
import missionChina from "../assets/images/mission-china.jpeg"
import missionJapan from "../assets/images/mission-japan.jpeg"
import missionKorea from "../assets/images/mission-korea.jpeg"
import william from '../assets/images/William Wiryawan.jpg'
import wilhan from '../assets/images/Wilhan.jpg'
import dei from '../assets/images/Deidrich Zhu.jpg'
import dicky from '../assets/images/Dicky Saskia.jpg'
import gaw from '../assets/images/Gillbert Allison Wijaya.jpg'

const story_paragraph = ["Our journey began with a simple idea — to make traveling easier and more meaningful for everyone. We realized that many people often struggle to decide where to go or how to plan their vacations, sometimes wasting valuable time searching for the right destinations. From that challenge, our project was born.","We built this website as a smart and reliable tour guide platform designed to help travelers easily locate the best places to visit in every country. With our detailed road maps and curated destination guides, we aim to turn every trip into a smooth and memorable experience. Over time, our platform has grown steadily, reaching more users and expanding to cover more destinations worldwide — and we’re just getting started." ];

const mission_paragraph = ["Our mission is to help people discover the most exciting and meaningful destinations wherever they travel. We want to make it effortless for travelers of all backgrounds and ages to plan their journeys with confidence.", "We’re committed to providing information that’s not only accurate and high-quality but also practical and inspiring. By combining precision, clarity, and a passion for exploration, we strive to be the go-to platform for anyone seeking a better way to experience the world."];

const mission_images = [
  { src: missionChina, alt: "China" },
  { src: missionJapan, alt: "Japan" },
  { src: missionKorea, alt: "Korea" }
];

const founder_images =[
  { src : william, alt : "William Wiryawan", name: "William Wiryawan", status: "Founder", desc : "Responsible for login page and list country"},
  { src : wilhan, alt : "Wilhan", name: "Wilhan", status: "Founder", desc : "Responsible for japan page, tokyo, kyoto, osaka"},
  { src : dei, alt : "Deidrich Zhu", name: "Deidrich Zhu", status: "Founder", desc : "Responsible for home page, user-demo, swizz and australia page"},
  { src : dicky, alt : "Dicky Saskia", name: "Dicky Saskia", status: "Founder", desc : "Responsible for Malaysia, Singapura, Thailand, Vitenam page"},
  { src : gaw, alt : "Gillbert Allison Wijaya", name: "Gillbert Allison Wijaya", status: "Founder", desc : "Responsible for faq, about, china, korea page"}
]

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedFounder : false,
      showOurStory : false,
      showOurMission : false
    };
  }
  render() {
    let founderDetail = null;
    if (this.state.selectedFounder === false) {
      founderDetail = (
        <p className="text-muted mt-4">
        Click a founder to see details
        </p>
      );
    } else {
      founderDetail = (
        <div className="mt-4 p-4 rounded bg-light">
          <h4 className="fw-bold">
            {this.state.selectedFounder.name}
          </h4>
          <p className="text-muted">
            {this.state.selectedFounder.status}
          </p>
          <p>
            {this.state.selectedFounder.desc}
          </p>
        </div>
      );
    }
    return (
      <div id="body-about">
        <main id="main-about">

          <section className="container-fluid" id="main-companystory">
            <img
              src={CompanyStory}
              alt="Company Story Background"
              id="companystory-background"
              className="img-fluid" />

            <section className="container" id="companystory-content">
              <div className="row align-items-center text-center text-md-start">
                <div className=" col-md-6 text-center" id="companystory-left">
                  <img
                    src={LogoTravel}
                    alt="Logo"
                    id="companystory-logo"
                    className="img-fluid"
                  />
                </div>

                <div className="col-md-6" id="companystory-right">
                  <h2 className="mb-3 fw-bold text-primary text-center" id="companystory-title">Our Story</h2>
                  <button className="button-story-mission"
                    onClick={() => 
                      this.setState({showOurStory : !this.state.showOurStory})
                    }
                  >
                    {this.state.showOurStory ? "Show Less" : "Show More"}
                  </button>
                  <div className={`story-content ${this.state.showOurStory ? "show" : ""}`}>
                    {story_paragraph.map((text, index) => (
                      <p key={index} className="lead text-justify">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </section>

          <section className="container-fluid" id="main-mission">
            <section className="container" id="mission-content">
              <div className="row align-items-center text-center text-md-start">
                <div className="col-md-6" id="mission-left">
                  <h2 className="fw-bold text-primary text-center" id="mission-title">Our Mission</h2>
                  <button className="button-story-mission"
                  onClick={() => 
                    this.setState({showOurMission : !this.state.showOurMission})
                  }>
                    {this.state.showOurMission ? "Show Less" : "Show More"}
                  </button>
                  <div className={`mission-content ${this.state.showOurMission ? "show" : ""}`}>
                    {mission_paragraph.map((text,index) => (
                      <p key={index} className="lead text-justify" id="mission-paragraph">{text}</p>
                    ))}
                  </div>
                </div>

                <div className="col-md-6" id="mission-right">

                  <div className="mb-3">
                    <img src={mission_images[0].src} alt={mission_images[0].alt} className="img-fluid" id="mission-img"/>
                  </div>

                  <div className="row g-2">
                    {mission_images.slice(1).map((image, index) => (
                      <div className="col-md-6" key={index}>
                        <img src={image.src} alt={image.alt} className="img-fluid" id="mission-img1"/>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </section>
          </section>
          
          <section className="container-fluid" id="main-founders">
            <section className="container text-center" id="founders-content">
              <h2 className="fw-bold text-primary" id="founders-title">Meet Our Founders</h2>

              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">

                <div className="carousel-indicators" id="carouselindicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Founder 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Founder 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Founder 3"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Founder 4"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Founder 5"></button>
                </div>

                <div className="carousel-inner">
                  {founder_images.map((image, index) => (
                    <div key={index} 
                    className={'carousel-item' + (index === 0 ? ' active' : '')}
                    onClick={() => this.setState({selectedFounder: image})}
                    style = {{cursor: 'pointer'}}>
                      <img src={image.src} alt={image.alt} className="d-block w-100" id="Founder-img"/>
                      <div className="carousel-caption d-none d-md-block" id="carouselcaption">
                        <h5 className="fw-bold">{image.name}</h5>
                        <p>{image.status}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" id="carousel-control-button"></span>
                  <span className="visually-hidden">Previous</span>
                </button>


                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" >
                  <span className="carousel-control-next-icon" aria-hidden="true" id="carousel-control-button"></span>
                  <span className="visually-hidden" >Next</span>
                </button>
              </div>

              {founderDetail}
            </section>
          </section>
        </main>
      </div>
    );
  }
}

export default About;
