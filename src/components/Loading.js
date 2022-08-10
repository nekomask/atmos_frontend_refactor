import "../styles/css/Loading.css";

const Loading = (props) => {
  return (
    <div className="LoadingContainer">
        <img src="https://i.imgur.com/nJX7NQT.png" alt="logo-image" className="loading-logo" />
        <h2 className="loading">Now Loading...</h2>
    </div>
  )
}

export default Loading;