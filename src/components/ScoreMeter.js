import './CircleProgressBar.css';

export default function CircleProgressBar(props)
{
  let {
    size = 150,
    progress = 0,
    trackWidth = 10,
    trackColor = "#D9D9D9",
    indicatorWidth = 10,
    indicatorCap = "",
    label = `${progress}%`,
  } = props

  const center = size / 2;
  // const radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth);
  const radius = center - trackWidth;
  const dashArray = 2 * Math.PI * radius;
  const arc = dashArray * 0.75;
  // const dashOffset = dashArray * ((100 - progress) / 100);
  const dashOffset = dashArray - 0.2 * arc;

  const sections =
    [
      {
        offset: dashArray * ((100 - progress) / 100),
        color: "blue"
      },
      {
        offset: dashArray * ((100 - progress) / 100),
        color: "green"
      },
      {
        offset: dashArray * ((100 - progress) / 100),
        color: "red"
      },
    ];

  return (
    <div
      className="circle-progress-bar-container"
      style={{ width: size, height: size }}>
      <svg
        className="circle-progress-bar-indicator"
        style={{ width: size, height: size }}>
        <circle
          className="circle-progress-bar-indicator-track"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={trackColor}
          strokeWidth={trackWidth}
          strokeDasharray={`${arc} ${dashArray}`}
          transform={`rotate(135 ${center} ${center})`} />
        <circle
          className="circle-progress-bar-indicator-fill"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={"maroon"}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray * 1.6}
          strokeDashoffset={dashOffset}
          strokeLinecap={indicatorCap}
          transform={`rotate(135 ${center} ${center})`} />
        <circle
          className="circle-progress-bar-indicator-fill"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={"red"}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray * 1.45}
          strokeDashoffset={dashOffset}
          strokeLinecap={indicatorCap}
          transform={`rotate(135 ${center} ${center})`} />
        <circle
          className="circle-progress-bar-indicator-fill"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={"orange"}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray * 1.3}
          strokeDashoffset={dashOffset}
          strokeLinecap={indicatorCap}
          transform={`rotate(135 ${center} ${center})`} />
        <circle
          className="circle-progress-bar-indicator-fill"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={"yellow"}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray * 1.15}
          strokeDashoffset={dashOffset}
          strokeLinecap={indicatorCap}
          transform={`rotate(135 ${center} ${center})`} />
        <circle
          className="circle-progress-bar-indicator-fill"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={"green"}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap={indicatorCap}
          transform={`rotate(135 ${center} ${center})`} />
      </svg>
      <div className="circle-progress-bar-label">{label}</div>
    </div>
  );
}