import React, { useEffect } from 'react';

import '../styles/css/ResultsPage.css';

function ResultsPage(props)
{
    return (
        <main className='results-page'>
            <div className='location-container'>

            </div>
            <div className='score-container'>
                <p>Air Quality Score</p>
                <h1 className="AQIScore">{props.score}, {props.city}</h1>
            </div>
            <div className='recommendations-container'>

            </div>
            <div className='info-container'>

            </div>
        </main>
    );
}

export default ResultsPage;


    // const [city, setCity] = useState(null);

    // const getData = async () => {
    //     const response = await fetch(DATABASE_URL);
    //     const data = await response.json();
    //     setCity(data);
    // }