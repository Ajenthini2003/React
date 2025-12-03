
import React, { useEffect, useState } from "react";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const duration = 4000; // 4 seconds animation

  useEffect(() => {
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;

      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);

      const value = Math.floor(target * percentage);
      setCount(value);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target]);

  return <span>{count}</span>;
};

const StatusCounters = () => {
  return (
    <div style={{ fontSize: "24px", fontWeight: "bold", lineHeight: "40px" }}>
      <div> Staff: <Counter target={12} /></div>
      <div> Branches: <Counter target={5} /></div>
      <div> Customers: <Counter target={200} /></div>
      <div>Products: <Counter target={12} /></div>
    </div>
  );
};

export default StatusCounters;
