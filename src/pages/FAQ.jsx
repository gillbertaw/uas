import React from "react";
import "../styles/faq.css";
import faqBackground from '../assets/images/faq-title-image.jpeg'

const faqData = [
  {question : 'How do I log in or sign up?',
  answer : "Click the User Icon choose Login if you already have an account. If not, click Sign Up to create one — it’s fast and simple. Once logged in, you can save your favorite countries, track visited destinations, and personalize your travel experience.",
  },
  {question : "What if I forget my password?",
    answer : "Just click the Forgot Password link on the login page. Follow the steps to reset your password securely and regain access to your account."
  },
  {question : "What kind of country information do you provide?",
    answer : "Each country page includes a brief overview, top destinations, must-visit landmarks, and suggested travel routes. Our goal is to give you everything you need to plan your trip easily and confidently."
  },
  {question : "How do I search for a country?",
    answer : "Simply use the search bar at the top of the page! Type the name of the country you want to explore, and our website will instantly show detailed travel information, including recommended destinations, attractions, and road maps."
  }
]

class FAQ extends React.Component {
  constructor() {
    super();
    this.state = {
      keyword: ""
    };
  };
  handleSearch = (e) => {
    this.setState({keyword : e.target.value});
  };
  render() {
    const filterFaq = faqData.filter(item => 
       item.question.toLowerCase().includes(this.state.keyword.toLowerCase()));
    return (
      <div id="body-faq">
        <section id="header-section-faq" className="position-relative text-center">
            <img src={faqBackground} alt="FAQ Background" id="header-section-img-faq"/>
            <div className="d-flex-column justify-content-center align-items-center" id="header-section-div-faq">
                <h1 className="display-4 fw-bold" id="header-section-title-faq">FAQs</h1>
            </div>
        </section>
        <main id="main-faq">
          <section className="container-md" id="main-section-faq">
            <div className="mt-3" id="main-section-div-faq">
              <h4 className="mb-3" id="main-section-div-h4-faq">Search FAQ</h4>
              <form className="d-flex" role="search" id="main-section-div-form-faq">
                <div className="input-group" id ="main-section-div-form-inputgroup-faq">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search your question..."
                    aria-label="Search"
                    id="main-section-form-input-faq"
                    value = {this.state.keyword}
                    onChange={this.handleSearch}
                  />
                </div>
              </form>
            </div>
            <div className="accordion mt-4" id="accordionExample">
              {this.state.keyword === "" && (
                <p className="text-center text-muted mb-4">Type a keyword to search FAQs</p>
              )}
              {filterFaq.length === 0 && this.state.keyword !== "" && (
                <p className="text-center text-muted mb-4">No FAQ found</p>
              )}
              {filterFaq.map((item, index) => (
                <div className="accordion-item"  key={item.question}>
                  <h2 className="accordion-header" >
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#acorr${index+1}`} aria-expanded="false" aria-controls={`acorr${index+1}`} >
                      {item.question}
                    </button>
                  </h2>
                  <div id={`acorr${index+1}`} className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    );
  }
}

export default FAQ;
