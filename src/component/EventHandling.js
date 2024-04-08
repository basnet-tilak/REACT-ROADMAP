import { useState } from "react";

const EventHandling = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  function handlReset() {
    setCount(0);
  }

  return (
    <div>
      <h4>EventHandling By Count increment </h4>
      <p>Count: {count}</p>
      <button onClick={handleClick}>increment</button>
      <button onClick={handlReset}> Reset Count </button>
    </div>
  );
};

export default EventHandling;
