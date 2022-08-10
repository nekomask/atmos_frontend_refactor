import React, { useEffect } from 'react';
import ScoreMeter from '../components/ScoreMeter';

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
                        <img src="https://i.imgur.com/1gOHVQX.png" alt="results-location-icon" className="results-location-icon" />
                        {fixUppercase(props.city)}, {fixUppercase(props.USState)}
                    </div>
                    <div className='results-score-container'>
                        <p>Air Quality Score</p>
                        <h1 className="AQIScore">{props.score}</h1>
                        <div className="results-score-meter-container">
                            <ScoreMeter score={props.score} />
                        </div>
                    </div>
                    <div className="results-activity-container">

                    </div>
                </div>
            </div>
            <div className='results-activities-container'>

            </div>
        </div>
    );
}

export default ResultsPage;


    // const [city, setCity] = useState(null);

    // const getData = async () => {
    //     const response = await fetch(DATABASE_URL);
    //     const data = await response.json();
    //     setCity(data);
    // }