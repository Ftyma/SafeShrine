import React, { useEffect, useState, useRef } from "react";
import Delayed from "./Delayed";

const Countdown = ({ seconds }) => {
  const [countdown, setCountdown] = useState(seconds);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  return (
    <Delayed waitBeforeShow={4000}>
      <div>
        <p className="text-white mt-8">Redirecting in {countdown} </p>
      </div>
    </Delayed>
  );
};

export default Countdown;
