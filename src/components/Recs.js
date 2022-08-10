import { useState, useEffect } from 'react';

const Recs = (props) =>
{
  const [recoms, setRecoms] = useState("");
  const [blurb, setBlurb] = useState("");

  useEffect(() =>
  {
    if ((props.aqi <= 50))
    {
      setBlurb("It's an amazing day to go outside for a hike!");
      setRecoms('Air quality looks great today. We recommend that you take the time to go outside today and participate in physical activities, like going on a walk, riding a bike, hiking, and more.');
    } else if ((props.aqi >= 51 && props.aqi <= 100))
    {
      setBlurb("It's a good day to go out to the beach.");
      setRecoms('Air quality is good, but vulnerable groups should be careful. For vulnerable groups: We recommend reducing prolonged or heavy exertion, so light activities such as walking is ideal. Be sure to take more breaks and do less intense activities.');
    } else if ((props.aqi >= 101 && props.aqi <= 150))
    {
      setBlurb("Take it easy today, do some yoga.")
      setRecoms('Unhealthy for Vulnerable Groups: Air quality is not so good today. Vulnerable groups are more at risk so we recommend doing less intense activities. Watch for symptoms like coughing or shortness of breath. Asthma: People with asthma should follow their asthma action plans. Keep quick relief medicine handy. Heart Disease: Symptoms such as palpitations, shortness of breath, or unusual fatigue may indicate a serious problem. If you have any of these, contact your health provider. Air quality is not safe today. We recommend that you reduce intense activites. Take frequent breaks during outdoor activities, and choose less strenuous activities. If air conditions are risky outdoors, then they can also be risky indoors. Consider buying indoor houseplants that have air purifying qualities. We recommend that you eliminate tobacco smoke, avoid usage of wood stoves and fireplaces, use or invest in air filters, and avoid burning candles. For vulnerable groups: Avoid prolonged or heavy exertion overall.');
    } else if ((props.aqi >= 151 && props.aqi <= 200))
    {
      setBlurb("It’s not looking so good outside, consider wearing a mask.")
      setRecoms("Air quality is not safe today. We recommend that you reduce intense activites. Take frequent breaks during outdoor activities, and choose less strenuous activities. If air conditions are risky outdoors, then they can also be risky indoors. Consider buying indoor houseplants that have air purifying qualities. We recommend that you eliminate tobacco smoke, avoid usage of wood stoves and fireplaces, use or invest in air filters, and avoid burning candles. For vulnerable groups: Avoid prolonged or heavy exertion overall.");
    } else if ((props.aqi >= 201 && props.aqi <= 300))
    {
      setBlurb("It’s probably best to stay indoors today.")
      setRecoms('Air quality is getting dangerous. We recommend staying indoors today. Consider moving activities indoors or rescheduling to a time when air quality is better. For vulnerable groups: Avoid all physical activity outdoors. Consider wearing a mask.');
    } else if ((props.aqi > 300))
    {
      setBlurb("Try to stay indoors at all costs today.")
      setRecoms('Air quality is dangerous, it is unsafe to go outside.');
    }
  }, [props.aqi]);


  return (
    <div className="RecsContainer">
      <div className='blurb-container'>
        <h5 id="blurb">{blurb}</h5>
      </div>
      <div className='RecomsContainer'>
        <h3 className="RecTitle">Recommendations</h3>
        <p className='recoms'>{recoms}</p>
      </div>
    </div>
  )
}

export default Recs
