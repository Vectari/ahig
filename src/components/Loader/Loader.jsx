import React, { useEffect, useState } from "react";

export function Loader() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const now = Date.now();
    const lastTimestamp = sessionStorage.getItem("loaderTimestamp");

    if (!lastTimestamp || now - parseInt(lastTimestamp, 10) >= 60000) {
      // Minęła minuta lub pierwszy raz – pokazujemy loader i zapisujemy timestamp
      setShowLoader(true);
      sessionStorage.setItem("loaderTimestamp", now.toString());

      // Ukrywamy loader po 5 sekundach
      setTimeout(() => {
        setShowLoader(false);
      }, 5000);
    }
  }, []);

  if (!showLoader) return null;

  return <h1>Loader</h1>;
}
