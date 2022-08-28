import React from "react";
import "../styles/css/LandingPage.css";

function LandingPage(props) {

  const handleChange = (e) => {
    if (e.target.name === "city") {
      props.setCity(e.target.value);
    } else {
      props.setUSState(e.target.value);
    }
  };

  return (
    <div className="landing-page">
      <div className="landing-image-container">
        <img
          src="https://i.imgur.com/u4UyggO.png"
          alt="atmos-landing-img"
          className="landing-image"
        />
      </div>
      <div className="landing-summary-container">
        <h2>What is ATMOS</h2>
        <p className="landing-summary-text">
          ATMOS is a local Air Quality Index app that encourages people to educate themselves on Air Quality, and what they can do to live a greener lifestyle by reducing air pollutants through sustainable living.
        </p>
      </div>
      <div className="landing-location-container">
        <p className="get-started">Get started here:</p>
        {props.err && (
          <div className="error-box">
            <p className="error-item">{props.err}</p>
          </div>
        )}

        <form className="landing-form-container" onSubmit={props.getData}>
          <label htmlFor="form-input-city" />
          <input
            type="text"
            name="city"
            id="form-input-city"
            placeholder="City"
            value={props.city}
            onChange={handleChange}
          />
          <label htmlFor="form-input-state" />
          <input
            type="text"
            id="form-input-state"
            placeholder="State"
            value={props.USState}
            onChange={handleChange}
          />

          <button className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
