import { useState } from 'react';
import { API_URL } from "./api/api_connection";
import LandingPage from './pages/LandingPage';
import ResultsPage from './pages/ResultsPage';

import './App.css';

function App()
{
  const [city, setCity] = useState("");
  const [USState, setUSState] = useState("");
  const [score, setScore] = useState(-1);
  const [loading, setLoading] = useState(false);

  /**
   * ADD
   * @returns ADD
   */
  const getData = async function (e)
  {
    try
    {
      e.preventDefault();
      setLoading(true);
      let response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({
          city: city,
          state: USState,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("RESPONSE:", response);
      let data = await response.json();
      console.log("DATA:", data);

      setScore(data.air_quality);

      setLoading(false);
    } catch (error)
    {
      console.error(error);
    }
  }

  return (
    <div className="App">
      {
        score === -1 ?
          <LandingPage
            getData={getData}
            city={city}
            setCity={setCity}
            USState={USState}
            setUSState={setUSState} /> :
          <ResultsPage
            score={score}
            setScore={setScore}
            city={city} />
      }
    </div>
  );
}

export default App;
