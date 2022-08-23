import { useState } from "react";

export const useArray = <T>(value: T[]) => {
  const [arr, setArr] = useState(value);

  const add = (val: T) => {
    setArr([...arr, val]);
  };

  const clear = () => {
    setArr([]);
  };

  const removeIndex = (index: number) => {
    setArr((pre) => pre.filter((_, i) => index !== i));
  };

  return { value: arr, add, removeIndex, clear };
};
