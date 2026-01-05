import {useEffect, useRef} from "react";

export function usePrevious(value:string) {
  const ref = useRef<string>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}