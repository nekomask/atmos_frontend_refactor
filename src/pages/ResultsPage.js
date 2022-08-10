import React from 'react';
import ScoreMeter from '../components/ScoreMeter';
import Recs from '../components/Recs';

import '../styles/css/ResultsPage.css';

const fixUppercase = function (cityName)
{
    let cityChars = cityName.split("");
    for (let i = 0; i < cityChars.length; i++)
    {
        if (i === 0 || cityChars[i - 1] === " ")
        {
            cityChars[i] = cityChars[i].toUpperCase();
        }
    }
    return cityChars.join("");
}

function ResultsPage(props)
{
    return (
        <div className='results-page'>
            <div className='results-container'>
                <div className="results-location-container">
                    <div className="results-location-icon-container">
                        {/* <img src="https://i.imgur.com/1gOHVQX.png" alt="results-location-icon" className="results-location-icon" /> */}
                        <h2 id="city-state">{fixUppercase(props.city)}, {fixUppercase(props.USState)}</h2>
                    </div>
                    <div className='results-score-container'>
                        {/* <p>Air Quality Score</p>
                        <h1 className="AQIScore">{props.score}</h1> */}
                        <div className="results-score-meter-container">
                            <ScoreMeter score={props.score} />
                        </div>
                    </div>

                </div>
                <div className="results-activity-container">
                    <Recs aqi={props.score} />
                    <div className='info-container'>

                        <div className="RecsContainer">
                            <div className='RecomsContainer'>
                                <h3 className="RecTitle">How Can I Reduce Air Pollution?</h3>
                                <p className='recoms'>
                                    Ozone:
                                    Turn off lights you are not using
                                    Drive less: carpool, use public transportation, bike or walk
                                    Keep your engine tuned, and don’t let your engine idle
                                    When refueling: stop when the pump shuts off, avoid spilling fuel, and tighten your gas cap
                                    Inflate tires to the recommended pressure
                                    Use low-VOC paint and cleaning products, and seal and store them so they can’t evaporate
                                    Watch for Air Quality Action Days in your area </p>
                                <p className='recoms'>
                                    Air Particles:
                                    Drive less: carpool, use public transportation, bike or walk
                                    Choose ENERGY STAR appliances
                                    Set thermostats higher in summer and lower in winter
                                    Don’t burn leaves, garbage, plastic or rubber
                                    Keep car, boat and other engines tuned
                                </p>
                            </div>
                            <div className='RecomsContainer'>
                                <h3 className="RecTitle">Resources</h3>
                                <p className='recoms'>
                                    <ul className='list'>
                                        <li><a href="https://www.airnow.gov/aqi/aqi-basics/">Air Quality Index (AQI) Basics</a></li>
                                        <li><a href="https://www.airnow.gov/aqi/aqi-basics/using-air-quality-index/">Using the Air Quality Index</a></li>
                                        <li><a href="https://www.airnow.gov/sites/default/files/2021-03/air-quality-guide_ozone_2015.pdf">Air Quality Guide for Ozone</a></li>
                                        <li><a href="https://www.airnow.gov/sites/default/files/2021-03/air-quality-guide_pm_2015_0.pdf">Air Quality Guide for Particle Pollution</a></li>
                                        <li><a href="http://www.aqmd.gov/home/air-quality/current-air-quality-data">Current Air Quality Data</a></li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <div className='results-activities-container'>

            </div>
        </div >
    );
}

export default ResultsPage;


    // const [city, setCity] = useState(null);

    // const getData = async () => {
    //     const response = await fetch(DATABASE_URL);
    //     const data = await response.json();
    //     setCity(data);
    // }