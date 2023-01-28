import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Game = () => {
  const [count, setCount] = useState(0);
  const [up, setUp] = useState(60);
  const [batas, setBatas] = useState(true);
  const [mulai, setMulai] = useState(false);

  const ufoRef = React.useRef(null);
  const ufoRef1 = React.useRef(null);

  let timer;
  useEffect(() => {
    const ufo = ufoRef.current;
    const ufo1 = ufoRef1.current;

    function handlePicture() {
      const waktu = Math.round(Math.random() * 100);
      const waktu1 = Math.round(Math.random() * 100);
      ufo.style.top = up * -14 + waktu * 7 + 350 + "px";
      ufo.style.left = waktu * 10 + 100 + "px";
      ufo1.style.top = up * -14 + waktu1 * 5 + 350 + "px";
      ufo1.style.left = waktu1 * 10 + 100 + "px";
    }

    mulai &&
      (timer = setInterval(() => {
        handlePicture();
        setUp(up - 1);
        if (up === 0) {
          setMulai(!mulai);
          setBatas(!batas);
          clearInterval(timer);
        }
      }, 1000));

    return () => clearInterval(timer);
  });
  function objekUFO() {
    setCount(count + 1);
    const ufo = ufoRef.current;
    const ufo1 = ufoRef1.current;
    const waktuIni = Math.round(Math.random() * 100);

    ufo.style.top = up * -10 + waktuIni * 2 + 350 + "px";
    ufo.style.left = up * 5 + waktuIni * 21 + "px";
    ufo1.style.top = up * -4 + waktuIni * 20 + 350 + "px";
    ufo1.style.left = up * 10 + 100 + "px";
  }
  return (
    <div style={{ position: "relative" }}>
      <div
        className=" container-fluid"
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "600px",
          position: "absolute",
          zIndex: "-1",
        }}
      ></div>
      <div
        className="d-flex justify-content-around"
        style={{
          position: "absolute",
          width: "100%",
          top: "425px",
          textAlign: "center",
          color: "white",
          fontFamily: " 'Acme', sans-serif",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          <h5>Shoot on target</h5>
          <h1 style={{ fontSize: "54px" }}>{count}</h1>
        </div>
        <div
          style={{
            textAlign: "center",
            width: "120px",
            height: "120px",
            border: "10px",
            borderRadius: "60px",
            color: "white",
            backgroundColor: "red",
          }}
          onClick={() => setMulai(!mulai)}
        >
          <h1 style={{ fontSize: "35px", marginTop: "35px" }}>Start</h1>
        </div>
        <div
          style={{
            textAlign: "center",
            width: "120px",
            height: "120px",
            border: "10px",
            borderRadius: "60px",
            color: "white",
            backgroundColor: "grey",
          }}
          onClick={() => clearInterval(timer)}
        >
          <h1 style={{ fontSize: "35px", marginTop: "35px" }}>Stop</h1>
        </div>

        <div
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          <h5>Your time!</h5>
          <h1 style={{ fontSize: "54px" }}>{batas && <p> {up}</p>}</h1>
        </div>
      </div>
      <div
        id="container1"
        className="border border-5 rounded-3"
        style={{
          width: "100%",
          height: "400px",
          position: "relative",
          top: "-10px",
          background: "radial-gradient(black, #38073b)",
          overflow: "hidden",
          zIndex: "2",
        }}
      >
        <img
          src="./assets/stars.png"
          alt="stars"
          style={{ width: "100%", zIndex: "3", position: "absolute" }}
          id="container1"
        />
        (
        <img
          src="./assets/UFO2.png"
          alt="UFO2"
          style={{
            zIndex: "4",
            position: "absolute",
            top: "350px",
            left: "50px",
            transition: "top .5s",
          }}
          onClick={objekUFO}
          ref={ufoRef}
        />
        )
        <img
          src="./assets/UFO1.png"
          alt="UFO1"
          style={{
            zIndex: "4",
            position: "absolute",
            top: "350px",
            left: "850px",
            transition: "top .5s",
          }}
          id="UFO"
          onClick={objekUFO}
          ref={ufoRef1}
        />
      </div>
    </div>
  );
};
export default Game;
