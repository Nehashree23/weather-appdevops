import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
  fetch("https://weather-app-ba.onrender.com/api/weather")

    .then((res) => res.json())
    .then((data) => console.log(data));
}, []);


  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #74ebd5, #ACB6E5)",
    minHeight: "100vh",
    padding: "40px",
    color: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "30px 50px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: "400px"
  };

  const iconStyle = {
    width: "100px"
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "3em", marginBottom: "30px", color: "#1f2937" }}>🌤️ Weather App</h1>

      {weather ? (
        <div style={cardStyle}>
          <h2 style={{ marginBottom: "10px" }}>{weather.name}, {weather.sys.country}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            style={iconStyle}
          />
          <p style={{ fontSize: "2em", margin: "10px 0" }}>
            {weather.main.temp}°C
          </p>
          <p style={{ marginBottom: "5px" }}>
            Condition: <strong>{weather.weather[0].description}</strong>
          </p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
          <p>Pressure: {weather.main.pressure} hPa</p>
        </div>
      ) : (
        <p style={{ fontSize: "1.5em" }}>Loading weather data...</p>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
