import React from "react";
import { useParallax } from "react-scroll-parallax";
function Component() {
  const parallax = useParallax({
    speed: -10,
  });
  return (
    <div ref={parallax.ref}>
      <img
        src="./assets/stars.png"
        alt="stars"
        style={{ position: "relative", width: "100%" }}
        id="stars"
      />
    </div>
  );
}
export default Component;
