import "./App.css";
import { useEffect } from 'react';

function Padding({ targetIds }) {
  useEffect(() => {
    function setPadding() {
      targetIds.forEach((targetId) => {
        const div = document.getElementById(targetId);
        if (div) {
          const screenWidth = window.innerWidth;
          const defaultPadding = 16;
          const minPadding = 4;
          const screenMaxWidth = 1920;

          let paddingValue =
            minPadding +
            (defaultPadding - minPadding) * (screenWidth / screenMaxWidth);

          paddingValue = Math.max(paddingValue, minPadding);
          paddingValue = Math.min(paddingValue, defaultPadding);

          div.style.paddingLeft = `${paddingValue}%`;
          div.style.paddingRight = `${paddingValue}%`;
        }
      });
    }

    setPadding();

    window.addEventListener("resize", setPadding);

    return () => {
      window.removeEventListener("resize", setPadding);
    };
  }, [targetIds]);
}

export default Padding;
