import { useState } from "react";

const useCouter = (url) => {
  const [count, setCount] = useState(0);

  const handleCount = (type) =>
    type === "pluse" ? setCount(count + 1) : setCount(count - 1);

  return { count, handleCount };
};

export default useCouter;
