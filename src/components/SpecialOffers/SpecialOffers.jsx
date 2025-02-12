import React, { useState, useEffect } from "react";

import Style from "./SpecialOffers.module.css";

function SpecialOffers() {
  const targetDate = new Date("Febraury 15, 2025 00:00:00").getTime();
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className={Style.main}>
      <div>
        <div className={Style.timerText}>
          <div>
            Where Dreams Meet Reality in Luxury Real Estate :{" "}
            {` ${timeLeft.days} Days ${timeLeft.hours} Hrs ${timeLeft.minutes} Min ${timeLeft.seconds} Sec`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffers;
