import { useState } from "react";

export function useGeoLocation(defaultLocation = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [countClicks, setCountClicks] = useState(0);
  const [position, setPosition] = useState(defaultLocation);
  const [error, setError] = useState(null);

  const getPosition = () => {
    setCountClicks((count) => count + 1);

    if (!navigator.geolocation) {
      setError("Your browser does not support geolocation");
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  };

  return { isLoading, position, error, countClicks, getPosition };
}
