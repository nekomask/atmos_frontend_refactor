import React from "react";

export default function ScoreMeter(props)
{
  let {
    size = 150,
    score = 0,
    trackWidth = 10,
    trackColor = "#D9D9D9",
    indicatorWidth = 10,
    indicatorCap = ""
  } = props

  // Defines the meter
  const center = size / 2;
  const radius = center - trackWidth;
  const dashArray = 2 * Math.PI * radius;
  const arc = dashArray * 0.5;
  const dashOffset = dashArray - 0.2 * arc;

  // Defines the icon
  const iconTopPosition = size / 2 - 20;
  const iconLeftPosition = size / 4 + 5;
  const maxScore = 1000;
  const iconInitialAngle = -30;
  const iconRotation = maxScore / arc * 0 / 4;
  // const iconFinalAngle = iconInitialAngle + iconRotation;
  const iconFinalAngle = 0;

  return (
    <div
      className="score-meter-container"
      style={{
        position: "relative",
        width: size,
        height: size,
      }}>
      <svg
        className="score-meter-indicator"
        style={{ width: size, height: size }}>
        <circle
          className="score-meter-indicator-track"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={trackColor}
          strokeWidth={trackWidth}
          strokeDasharray={`${arc} ${dashArray}`}
          strokeLinecap={indicatorCap}
          transform={`rotate(180 ${center} ${center})`} />
        <circle
          className="score-meter-indicator-fill"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={"maroon"}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray * 1.4}
          strokeDashoffset={dashOffset}
          strokeLinecap={indicatorCap}
          transform={`rotate(180 ${center} ${center})`} />
        <circle
          className="score-meter-indicator-fill"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={"red"}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray * 1.3}
          strokeDashoffset={dashOffset}
          strokeLinecap={indicatorCap}
          transform={`rotate(180 ${center} ${center})`} />
        <circle
          className="score-meter-indicator-fill"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={"orange"}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray * 1.2}
          strokeDashoffset={dashOffset}
          strokeLinecap={indicatorCap}
          transform={`rotate(180 ${center} ${center})`} />
        <circle
          className="score-meter-indicator-fill"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={"yellow"}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray * 1.1}
          strokeDashoffset={dashOffset}
          strokeLinecap={indicatorCap}
          transform={`rotate(180 ${center} ${center})`} />
        <circle
          className="score-meter-indicator-fill"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={"green"}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap={indicatorCap}
          transform={`rotate(180 ${center} ${center})`} />
      </svg>
      <div
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
      </div>
    </div>
  );
}