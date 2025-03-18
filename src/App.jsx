import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countClicks, setCountClicks] = useState(0);
  const [position, setPosition] = useState({});

  const { lat, lng } = position;

  function getPosition() {
    setCountClicks((count) => count + 1);

    // navigator.geolocation: an API allows retrieving the current location in a web browser
    if (!navigator.geolocation) {
      return setError("Your browser does not support geolocation");
    }

    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return (
    <div className="container">
      <button className="btn" onClick={getPosition} disabled={isLoading}>
        Get my location
      </button>
      <div className="result">
        {isLoading && <p>Loading position...</p>}
        {error && <p>{error}</p>}
        {!isLoading && !error && lat && lng && (
          <p>
            Your GPS location:{" "}
            <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps?q=${lat},${lng}`}>
              {lat}, {lng}
            </a>
          </p>
        )}

        <p>
          You requested position <strong>{countClicks}</strong> times
        </p>
      </div>
    </div>
  );
}
