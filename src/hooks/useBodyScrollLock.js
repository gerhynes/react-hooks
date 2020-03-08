import { useLayoutEffect } from "react";

const useBodyScrollLock = () => {
  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body.overflow);
    document.body.style.overflow = "hidden";

    // Cleanup function
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);
};

export { useBodyScrollLock };
