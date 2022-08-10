import React, { useState, useEffect } from 'react';
import { API_URL } from "../api/api_connection";

import '../styles/css/ResultsPage.css';

function ResultsPage(props) {
    const [city, setCity] = useState("");
    const [USstate, setUSState] = useState("");
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        /**
         * ADD
         * @returns ADD
         */
        const getData = async function () {
            try {
                setLoading(true);
                let response = await fetch(API_URL, {
                    method: 'POST',
                    body: JSON.stringify({
                        city: "Austin",
                        state: "Texas"
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log("RESPONSE:", response);
                let data = await response.json();
                console.log("DATA:", data);
                
                setScore(data.air_quality);
                setCity(data.city);
                setUSState(data.state);

                setLoading(false);
            } catch(error) {
                console.error(error);
            }
        }

        getData();
    }, []);

    return (
        <main className='results-page'>
            <div className='location-container'>

            </div>
            <div className='score-container'>
                <p>Air Quality Score</p>
                    <h1 className="AQIScore">{score}, {city}, {USstate}</h1>
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