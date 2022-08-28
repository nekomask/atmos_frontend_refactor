import React from "react";
import "../styles/css/LandingPage.css";

function LandingPage(props) {
  /**
   * Sets search query to value of search input on page.
   * @param {Object} e Event Object.
   */
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
          alt="landing-image"
          className="landing-image"
        />
      </div>
      <div className="landing-summary-container">
        <h2>What is ATMOS</h2>
        <p className="landing-summary-text">
          ATMOS is a local Air Quality Index app that encourages people to
          educate themselves on Air Quality, and what they can do to live a
          greener lifestyle by reducing air pollutants through sustainable
          living.
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
            placeholder="city"
            value={props.city}
            onChange={handleChange}
          />
          <label htmlFor="form-input-state" />
          <input
            type="text"
            id="form-input-state"
            placeholder="state"
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

// const [showing, setShowing] = useState(false)
// const [cities, setCities] = useState(false)

// let states = [{name: 'Alabama', cities: ["Birmingham", "Cuba", "Decatur", "Empire", "Harvest", "Homewood", "Hoover", "Huntsville", "Irondale", "Ladonia", "Leeds", "Madison", "McCalla", "Mobile", "Montgomery", "Tillmans Corner", "Tuscaloosa", "Uniontown"]},
// 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
// 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
// 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
// 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

// return (
//     <main className='landing-page'>
//         <p>LANDING</p>
//         <form>
//             <label>
//                 Name:
//                 <input type="text" name="state" value="" />
//                 <select className='state-list' placeholder='State' onChange={this.changeState}>
//                 <option value="Alabama">Alabama</option>
//                 <option value="Alaska">Alaska</option>
//                 <option value="Arizona">Arizona</option>
//                 <option value="Arkansas">Arkansas</option>
//                 <option value="California">California</option>
//                 <option value="Colorado">Colorado</option>
//                 <option value="Connecticut">Connecticut</option>
//                 <option value="Delaware">Delaware</option>
//                 <option value="Florida">Florida</option>
//                 <option value="Georgia">Georgia</option>
//                 <option value="Hawaii">Hawaii</option>
//                 <option value="Idaho">Idaho</option>
// <option value="Illinois">Illinois</option>
// <option value="Indiana">Indiana</option>
// <option value="Iowa">Iowa</option>
// <option value="Kansas">Kansas</option>
// <option value="Kentucky">Kentucky</option>
// <option value="Louisiana">Louisiana</option>
// <option value="Maine">Maine</option>
// <option value="Maryland">Maryland</option>
// <option value="Massachusetts">Massachusetts</option>
// <option value="Michigan">Michigan</option>
// <option value="Minnesota">Minnesota</option>
// <option value="Mississippi">Mississippi</option>
// <option value="Missouri">Missouri</option>
// <option value="Montana">Montana</option>
// <option value="Nebraska">Nebraska</option>
// <option value="Nevada">Nevada</option>
// <option value="New Hampshire">New Hampshire</option>
// <option value="New Jersey">New Jersey</option>
// <option value="New Mexico">New Mexico</option>
// <option value="New York">New York</option>
// <option value="North Carolina">North Carolina</option>
// <option value="North Dakota">North Dakota</option>
// <option value="Ohio">Ohio</option>
// <option value="Oklahoma">Oklahoma</option>
// <option value="Oregon">Oregon</option>
// <option value="Pennsylvania">Pennsylvania</option>
// <option value="Rhode Island">Rhode Island</option>
// <option value="South Carolina">South Carolina</option>
// <option value="South Dakota">South Dakota</option>
// <option value="Tennessee">Tennessee</option>
// <option value="Texas">Texas</option>
// <option value="Utah">Utah</option>
// <option value="Vermont">Vermont</option>
// <option value="Virginia">Virginia</option>
// <option value="Washington">Washington</option>
// <option value="West Virginia">West Virginia</option>
//                 <option value="Wisconsin">Wisconsin</option>
//                 <option value="Wyoming">Wyoming</option>
//                 </select>
//             </label>
//             <label>
//                 Name:
//                 <input type="city" name="city" value="" />
//                 <select className="form-select" placeholder="City">
//                 <option>City</option>
//                     {this.states.cities.map((e, key) => {
//                         return <option key={key}>{e}</option>;
//                     })}
//                     </select>
//             </label>
//             <input type="submit" value="Submit" />
//         </form>
//     </main>
// );
// }
