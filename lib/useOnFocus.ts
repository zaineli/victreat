import { useEffect, useRef, useState } from "react";

export default function useOnFocus() {
  const [isFocused, setIsFocused] = useState(false);
  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("focus", onFocus);
    //   ref.current.addEventListener("blur", onBlur);
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("focus", onFocus);
        // ref.current.removeEventListener("blur", onBlur);
      }
    };
  }, [ref.current]);

    return { ref, isFocused };
}
