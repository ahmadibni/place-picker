import { useEffect, useState } from "react";

function ProgressBar({ time }) {
  const [remainingTime, setTimeRemaining] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setTimeRemaining((prev) => prev - 10);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return <progress value={remainingTime} max={time} />;
}

export default ProgressBar;
