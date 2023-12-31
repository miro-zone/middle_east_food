"use client";

import { useCallback, useEffect, useState } from "react";

export default function useClickout(
  ref: React.RefObject<HTMLElement>,
  cb?: () => void
) {
  const [show, setShow] = useState(false);

  const clickoutHandler = useCallback((ev: MouseEvent) => {
    if (ref.current?.contains(ev.target as HTMLElement)) return;
    setShow(false);
    cb && cb();
  }, []);

  useEffect(() => {
    document.addEventListener("click", clickoutHandler, true);

    return () => {
      document.removeEventListener("click", clickoutHandler);
    };
  }, [ref]);
  return { show, setShow };
}
