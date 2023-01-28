import React, { useEffect } from "react";
import FormOtentikasi from "../Form/Form";

const LandingPage = () => {
  const rocketRef = React.useRef(null);
  const starsRef = React.useRef(null);
  const tulisanRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  useEffect(() => {
    const rocket = rocketRef.current;
    const stars = starsRef.current;
    const tulisan = tulisanRef.current;
    const button = buttonRef.current;

    function handleScroll() {
      let value = window.scrollY;
      rocket.style.top = value * 0.2 + "px";
      stars.style.left = value * 0.25 + "px";
      tulisan.style.top = value * 0.25 + "px";
      button.style.top = value * 0.45 + "px";
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <div id="parallax">
        <img
          src="./assets/stars.png"
          alt="stars"
          style={{ position: "absolute", width: "100%" }}
          id="stars"
          ref={starsRef}
        />
        <img
          src="./assets/meteorid.png"
          alt="meteorid"
          style={{
            width: "100%",
            // height: "200vh",
            position: "relative",

            zIndex: 2,
          }}
          id="meteorid"
        />
        <img
          src="./assets/rocket.png"
          alt="rocket"
          style={{
            width: "100%",
            position: "absolute",
            top: "-2000px",
            left: "-350px",
            zIndex: "10",
          }}
          id="rocket"
          ref={rocketRef}
        />
        <button
          className="btn rounded-5 px-5 py-1 fs-1"
          style={{
            position: "absolute",
            marginTop: "250px",
            zIndex: "5",
            left: "530px",
            background: "radial-gradient(yellow, #38073b)",
            fontFamily: " 'Acme', sans-serif",
          }}
          ref={buttonRef}
        >
          <a
            href="#formulir"
            style={{ textDecoration: "none", color: "black" }}
          >
            Explore
          </a>
        </button>

        <h1
          className="text-center"
          id="tulisan"
          ref={tulisanRef}
          style={{
            position: "absolute",
            marginTop: "485px",
            marginLeft: "340px",
            zIndex: "1",
            color: "#FFFFFF",
            fontSize: "200px",
            fontFamily: " 'Acme', sans-serif",
            textShadow: " 3px 3px 10px #808080",
            lineHeight: "120px",
          }}
        >
          Alien <br />
          <span style={{ fontSize: "100px" }}>has been </span> <br />
          coming
        </h1>
      </div>
      <div
        className="boder border-3"
        style={{
          height: "250px",
          width: "100%",
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, .01),rgba(255, 255, 255, .99), #FFFFFF)",
          position: "relative",
          top: "-95px",
          zIndex: "100",
        }}
      ></div>
      <div style={{ position: "relative", top: "-125px" }}>
        <FormOtentikasi />
      </div>
    </div>
  );
};
export default LandingPage;
