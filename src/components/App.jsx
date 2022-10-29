import React from "react";
import { useState } from "react";

const latestTime = new Date().getHours();

export default function App() {
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  const updateTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };

  setInterval(updateTime, 1000);
  return (
    <div>
      <div className="container border radial-repeating">
        <h1>{time}</h1>
      </div>
      <p className="greet">
        {latestTime < 12
          ? "Good Morning!"
          : latestTime < 17 && latestTime > 12
          ? "Good Afternoon!"
          : "Good Evening!"}
      </p>
    </div>
  );
}
