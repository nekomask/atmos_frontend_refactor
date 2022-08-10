import React, { useState, useEffect } from "react";

export default function ScoreMeter(props)
{
  let { size = 150 } = props;

  const [currColor, setCurrColor] = useState(null);

  useEffect(() =>
  {
    if (props.score <= 50)
    {
      setCurrColor("radial-gradient(51.79% 51.79% at 35.38% 45.13%, rgba(146, 255, 132, 0) 26.04%, rgba(196, 241, 189, 0.545396) 66.38%, #95FF84 100%)");
    }
    else if (props.score <= 100)
    {
      setCurrColor("radial-gradient(51.79% 51.79% at 35.38% 45.13%, rgba(146, 255, 132, 0) 26.04%, rgba(196, 241, 189, 0.545396) 66.38%, #95FF84 100%)");
    }
    else if (props.score <= 150)
    {
      setCurrColor("radial-gradient(51.79% 51.79% at 35.38% 45.13%, rgba(146, 255, 132, 0) 26.04%, rgba(196, 241, 189, 0.545396) 66.38%, #95FF84 100%)");
    }
    else if (props.score <= 200)
    {
      setCurrColor("radial-gradient(51.79% 51.79% at 35.38% 45.13%, rgba(146, 255, 132, 0) 26.04%, rgba(196, 241, 189, 0.545396) 66.38%, #95FF84 100%)");
    }
    else if (props.score <= 300)
    {
      setCurrColor("radial-gradient(51.79% 51.79% at 35.38% 45.13%, rgba(146, 255, 132, 0) 26.04%, rgba(196, 241, 189, 0.545396) 66.38%, #95FF84 100%)");
    }
    else if (props.score <= 500)
    {
      setCurrColor("radial-gradient(51.79% 51.79% at 35.38% 45.13%, rgba(146, 255, 132, 0) 26.04%, rgba(196, 241, 189, 0.545396) 66.38%, #95FF84 100%)");
    }
  }, []);

  console.log(currColor);

  let outerCircleStyle =
  {
    "height": 150,
    "width": 150,
    borderRadius: 150,
    "background": "radial-gradient(51.79% 51.79% at 35.38% 45.13%, rgba(146, 255, 132, 0) 26.04%, rgba(196, 241, 189, 0.545396) 66.38%, #95FF84 100%)",
    "display": "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  let innerCircleStyle =
  {
    "height": 100,
    "width": 100,
    "background": "white",
    borderRadius: 150,
    "display": "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  console.log(outerCircleStyle);
  console.log(innerCircleStyle)

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
          <h1>{props.score}</h1>
        </div>
      </div>
      {/* <svg
        className="score-meter-indicator"
        style={{ width: size, height: size }}>
        <radialGradient id="linear-colors" cx="0.5" cy="0.5" r="0.4" fx="0.75" fy="0.75">
          <stop offset="0%" stop-color="rgb(0, 228, 0, 0.2)" />
          <stop offset="100%" stop-color="rgb(0, 228, 0, .1)" />
          
          background: radial-gradient(
            51.79% 51.79% at 35.38% 45.13%, 
            rgba(149, 255, 132, 0) 26.04%, 
            rgba(196, 241, 189, 0.545396) 66.38%, 
            #95FF84 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected


        </radialGradient>
        <circle
          className="score-meter-circle-outer"
          cx={center}
          cy={center}
          fill="url(#linear-colors)"
          r={radius}
          stroke={""}
          strokeWidth={trackWidth}
          transform={`rotate(180 ${center} ${center})`} />
        <circle
          className="score-meter-circle-inner"
          cx={center}
          cy={center}
          fill="white"
          r={radius * 0.75}
          stroke={""}
          strokeWidth={indicatorWidth}
          transform={`rotate(0 ${center} ${center})`} />
      </svg> */}
      {/* <div
        className="score-meter-arrow-icon-container"
        style={{
          position: "absolute",
          top: `${iconTopPosition}px`,
          left: `${iconLeftPosition}px`
        }}>
        <img
          src="https://i.imgur.com/WcL0eiw.png" alt="score-meter-arrow-icon" className="score-meter-arrow-icon"
          style={{
            transformOrigin: "70% 70%",
            transform: `rotate(${iconFinalAngle}deg)`,
          }} />
      </div> */}
    </div>
  );
}