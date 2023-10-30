import { useState } from "react";

export const useToggle = (initialState = false) => {
  const [isToggled, setIsToggled] = useState(initialState);

  const toggle = () => setIsToggled((previous) => !previous);
  const on = () => setIsToggled(true);
  const off = () => setIsToggled(false);

  return {
    isToggled,
    toggle,
    on,
    off,
  };
};
