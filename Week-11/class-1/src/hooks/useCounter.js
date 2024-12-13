import { useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(c => c+1);
  }

  return {
    count,
    increaseCount
  }
}
