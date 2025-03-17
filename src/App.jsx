import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countClicks, setCountClicks] = useState(0);
  const [position, setPosition] = useState({});

  const { lat, lng } = position;

  return (
    <div className="container">
      <button className="btn">Get my location</button>
    </div>
  );
}
