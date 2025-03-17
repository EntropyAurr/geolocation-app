import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countClicks, setCountClicks] = useState(0);
  const [position, setPosition] = useState({});

  const { lat, lng } = position;

  return (
    <div>
      <button>Get my location</button>
    </div>
  );
}
