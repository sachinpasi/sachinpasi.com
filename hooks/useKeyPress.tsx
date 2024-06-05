import { useEffect, useState } from "react";

function useKeyPress(): string | null {
  const [keyPressed, setKeyPressed] = useState<string | null>(null);

  function downHandler(event: KeyboardEvent) {
    setKeyPressed(event.key);
  }

  const upHandler = () => {
    setKeyPressed(null);
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return keyPressed;
}

export default useKeyPress;
