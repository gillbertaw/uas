import React from "react";
import "../../styles/comingSoon.css";
import { TbFaceIdError } from "react-icons/tb";

class ComingSoon extends React.Component {
  render() {
    return (
      <div className="comingSoon">
        <div className="comingSoon-content">
          <TbFaceIdError size={48} />
          <p>
            Hi there! This page is currently unavailable.
            We’ll be launching soon—stay tuned!
          </p>
        </div>
      </div>

    );
  }
}

export default ComingSoon;
