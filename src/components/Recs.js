const Recs = (props) => {
  const recommendations = [
    {
      Good: 'Air quality looks great today. We recommend that you take the time to go outside today and participate in physical activities, like going on a walk, riding a bike, hiking, and more.'
    },
    {
      Moderate:
        'Air quality is good, but vulnerable groups should be careful. For vulnerable groups: We recommend reducing prolonged or heavy exertion, so light activities such as walking is ideal. Be sure to take more breaks and do less intense activities.'
    },
    {
      Unhealthy:
        'Unhealthy for Vulnerable Groups: Air quality is not so good today. Vulnerable groups are more at risk so we recommend doing less intense activities. Watch for symptoms like coughing or shortness of breath. Asthma: People with asthma should follow their asthma action plans. Keep quick relief medicine handy. Heart Disease: Symptoms such as palpitations, shortness of breath, or unusual fatigue may indicate a serious problem. If you have any of these, contact your health provider. Air quality is not safe today. We recommend that you reduce intense activites. Take frequent breaks during outdoor activities, and choose less strenuous activities. If air conditions are risky outdoors, then they can also be risky indoors. Consider buying indoor houseplants that have air purifying qualities. We recommend that you eliminate tobacco smoke, avoid usage of wood stoves and fireplaces, use or invest in air filters, and avoid burning candles. For vulnerable groups: Avoid prolonged or heavy exertion overall.'
    },
    {
      VeryUnhealthy:
        'Air quality is getting dangerous. We recommend staying indoors today. Consider moving activities indoors or rescheduling to a time when air quality is better. For vulnerable groups: Avoid all physical activity outdoors. Consider wearing a mask.'
    },
    { Hazardous: 'Air quality is dangerous, it is unsafe to go outside.' }
  ]

  let aqiScore = props.aqi
  let specificRecs = null
  if (0 >= aqiScore <= 50) {
    specificRecs = 'Good'
  } else if (51 >= aqiScore <= 100) {
    specificRecs = 'Moderate'
  } else if (101 >= aqiScore <= 150) {
    specificRecs = 'Unhealthy for Sensitive Groups'
  } else if (151 >= aqiScore <= 200) {
    specificRecs = 'Unhealthy'
  } else if (201 >= aqiScore <= 300) {
    specificRecs = 'Very Unhealthy'
  } else if (301 >= aqiScore <= 500) {
    specificRecs = 'Hazardous'
  }

  return (
    <div className="RecContainer">
      <h1 className="RecTitle">Recommendations</h1>
      <h2>Somehow show only certain recommendations</h2>
    </div>
  )
}

export default Recs
