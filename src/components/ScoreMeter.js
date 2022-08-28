import React, { useState, useEffect } from "react";
import "../styles/css/ScoreMeter.css";

export default function ScoreMeter(props)
{
  let { size = 200 } = props;

  const [currColor, setCurrColor] = useState(null);
  const [currGradient, setCurrGradient] = useState(null);

  useEffect(() =>
  {
    if (props.score <= 50)
    {
      setCurrColor("rgba(81, 184, 65, 1)");
      setCurrGradient("radial-gradient(51.79% 51.79% at 35.38% 45.13%, rgba(146, 255, 132, 0) 26.04%, rgba(196, 241, 189, 0.545396) 66.38%, #95FF84 100%)");
    }
    else if (props.score <= 100)
    {
      setCurrColor("rgba(254, 205, 31, 1)");
      setCurrGradient("radial-gradient(51.79% 51.79% at 35.38% 45.13%, rgba(254, 205, 31, 0) 26.04%, rgba(254, 205, 31, 0.55) 66.38%, #FECD1F 100%)");
    }
    else if (props.score <= 150)
    {
      setCurrColor("rgba(255, 154, 0, 1)");
      setCurrGradient("radial-gradient(51.79% 51.79% at 35.38% 45.13%, rgba(255, 154, 0, 0) 26.04%, rgba(255, 154, 0, 0.55) 66.38%, #FF9A00 100%)");
    }
    else if (props.score <= 200)
    {
      setCurrColor("rgba(237, 66, 29, 1)");
      setCurrGradient("radial-gradient(51.79% 51.79% at 35.38% 45.13%, rgba(237, 66, 29, 0) 26.04%, rgba(237, 66, 29, 0.55) 66.38%, #ED421D 100%)");
    }
    else if (props.score <= 300)
    {
      setCurrColor("rgba(119, 52, 206, 1)");
      setCurrGradient("radial-gradient(51.79% 51.79% at 35.38% 45.13%, rgba(135, 69, 220, 0) 26.04%, rgba(135, 69, 220, 0.5) 66.38%, #8745DC 100%)");
    }
    else if (props.score <= 500)
    {
      setCurrColor("rgba(100, 27, 135, 1)");
      setCurrGradient("radial-gradient(51.79% 51.79% at 35.38% 45.13%, rgba(100, 27, 135, 0) 27.75%, rgba(100, 27, 135, 0.55) 57.15%, #641B87 78.7%)");
    }
  }, []);

  let outerCircleStyle =
  {
    "height": size,
    "width": size,
    "borderRadius": size,
    "background": currGradient,
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  }

  let innerCircleStyle =
  {
    "height": size * 0.75,
    "width": size * 0.75,
    "background": "white",
    "color": currColor,
    "borderRadius": size,
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  }

  return (
    <div
      className="score-meter-container"
      style={{
        width: size,
        height: size,
      }}>
      <div
        className="score-meter-circle-outer"
        style={outerCircleStyle}>
        <div
          className="score-meter-circle-inner"
          style={innerCircleStyle}
        >
          {props.score}
          <p>Air Quality Score</p>
        </div>
      </div>
    </div>
  );
}