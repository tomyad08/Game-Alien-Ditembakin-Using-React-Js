import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FormOtentikasi = () => {
  const [kondisi, setKondisi] = useState(true);
  const [inputs, setInputs] = useState({});
  const [inputs1, setInputs1] = useState({});
  const [otenstifikasi, setOtentifikasi] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleChange1 = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs1((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let userName = inputs.username;
    let userName1 = inputs1.username;
    let password = inputs.password;
    let password1 = inputs1.password;

    if (userName === userName1 && password === password1) {
      console.log("sama");
      setOtentifikasi(true);
    }
    console.log(inputs);
  };
  const handleSubmit1 = (event) => {
    event.preventDefault();
    console.log(inputs1);
  };

  function handleSignUp() {
    let text = inputs1.username;
    let firstAlph = text.slice(0, 1);
    const firstAlp = firstAlph.toUpperCase();
    let UserName = firstAlp + text.slice(1, text.length);
    console.log(firstAlph);
    console.log(firstAlp);
    console.log(UserName);
    alert(
      `Hello ${UserName}, Your registration successful. Please to Sign In ...`
    );
    setKondisi(false);
  }

  return (
    <div
      className="pt-5"
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
      }}
      id="formulir"
    >
      {kondisi ? (
        <div
          className="border rounded-3 text-center"
          style={{
            width: "400px",
            height: "325px",
            background: "radial-gradient(black, #38073b)",
            zIndex: "10",
            position: "absolute",
            color: "white",
            fontFamily: " 'Acme', sans-serif",
            textShadow: " 3px 3px 10px #808080",
            paddingTop: "95px",
            transition: "transform 0.3",
            transform: "translate(240px)",
          }}
        >
          <h5>Welcome to</h5>
          <h1>Alien Ditembakin</h1>

          {otenstifikasi && (
            <Link to="/game-in">
              <button className="btn btn-success" style={{ width: "70%" }}>
                Let's Start
              </button>
            </Link>
          )}
        </div>
      ) : (
        <div
          className="border rounded-3 text-center"
          style={{
            width: "400px",
            height: "325px",
            background: "radial-gradient(black, #38073b)",
            zIndex: "10",
            position: "absolute",
            color: "white",
            fontFamily: " 'Acme', sans-serif",
            textShadow: " 3px 3px 10px #808080",
            paddingTop: "95px",
            transition: "all 0.6s ease-in-out",
            transform: "translateX(152%)",
          }}
        >
          <h5>Welcome to</h5>
          <h1>Alien Ditembakin</h1>
          {otenstifikasi && (
            <Link to="/game-in">
              <button className="btn btn-success" style={{ width: "70%" }}>
                Let's Start
              </button>
            </Link>
          )}
        </div>
      )}

      <div
        className="d-flex border border-2 rounded-3 justify-content-around py-2 "
        style={{ width: "60%", position: "absolute", marginLeft: "240px" }}
      >
        <div className="flex-1 text-center mx-1 px-3 py-3">
          <h4>Sign In</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
              placeholder="user name"
              className="mb-2 border border-2 rounded-2 p-2"
            />
            <br />
            <input
              type="password"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
              placeholder="password"
              className="mb-2 border border-2 rounded-2 p-2"
            />
            <br />
            <button type="submit" className="btn btn-success rounded-2 pb-2">
              Sign In
            </button>
          </form>
          <p style={{ fontSize: "13px" }} onClick={() => setKondisi(true)}>
            Don't have an account yet? Please
            <span style={{ color: "#0000FF" }}>
              <strong> Sign Up </strong>
            </span>
            first
          </p>
        </div>
        <div className="flex-1 mx-1 text-center px-3 py-3">
          <h4>Sign Up</h4>
          <form onSubmit={handleSubmit1}>
            <input
              type="text"
              name="username"
              value={inputs1.username || ""}
              onChange={handleChange1}
              placeholder="user name"
              className="mb-2 border border-2 rounded-2 p-2"
              id="signUp"
            />
            <br />
            <input
              type="email"
              name="email"
              value={inputs1.email || ""}
              onChange={handleChange1}
              placeholder="email"
              className="mb-2 border border-2 rounded-2 p-2"
              id="signUp"
            />
            <br />
            <input
              type="password"
              name="password"
              value={inputs1.password || ""}
              onChange={handleChange1}
              placeholder="password"
              className="mb-2 border border-2 rounded-2 p-2 mb-3"
              id="signUp"
            />
            <br />
            <button
              type="submit"
              className="btn btn-success rounded-2 pb-2"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </form>
          <p style={{ fontSize: "13px" }}>
            Don't have an account yet? Please
            <span
              style={{ color: "#0000FF" }}
              onClick={() => setKondisi(false)}
            >
              <strong> Sign In </strong>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default FormOtentikasi;
