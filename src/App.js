import React, { useState } from 'react';
import { API_URL } from "./api/api_connection";
import LandingPage from './pages/LandingPage';
import ResultsPage from './pages/ResultsPage';
import Loading from './components/Loading';

import './App.css';

function App()
{
  // CHANGE BACK BEFORE PUSH
  const [city, setCity] = useState("");
  const [USState, setUSState] = useState("");
  const [score, setScore] = useState(-1);
  const [err, setErr] = useState("");
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

      if (response.ok === true) {
        setScore(data.air_quality);
      } else {
        if (data.status === "fail" && data.data.message === "city_not_found") {
          setErr("City not found: Please double check your entries and try again. Alternatively, try inputing your nearest major city.");
        } else if (data.status === "fail" && data.data.message === "arguments_missing"){
          setErr("Missing input: Please input both your city and state.");
        } else {
          setErr(`Error: ${data.data.message}`);
        }
      }

      setLoading(false);
    } catch (error)
    {
      setLoading(false);
      console.error(error);
      setErr(error.message);
    }
  }

  return (
    <div className="App">
      <main className="page-container">
      <div className='article-container'>
            { loading ? (
                <Loading />
            ) : (
              <div>
                <div className="logo-container" onClick={() => {
                  setScore(-1);
                  setCity("");
                  setUSState("");
                  setErr("");
                  }}>
                  <img src="https://i.imgur.com/UOFSsDV.png" alt="logo" className="logo-image" />
                </div>
              {
                score === -1 ?
                  <LandingPage
                    getData={getData}
                    city={city}
                    setCity={setCity}
                    USState={USState}
                    setUSState={setUSState} 
                    err={err}/> :
                  <ResultsPage
                    score={score}
                    setScore={setScore}
                    city={city}
                    USState={USState} />
              }
              </div>
            )}
            </div>

      </main>
    </div>
  );
}

export default App;
