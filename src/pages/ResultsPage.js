import { useState, React } from 'react';
import { API_URL } from "../api/api_connection";

import '../styles/ResultsPage.css';

function ResultsPage(props) {
    const [city, setCity] = useState(null);
    const getData = async () => {
        const response = await fetch(DATABASE_URL);
        const data = await response.json();
        setCity(data);
    }

    return (
        <main className='results-page'>
            <p>RESULTS</p>
        </main>
    );
}

export default ResultsPage;