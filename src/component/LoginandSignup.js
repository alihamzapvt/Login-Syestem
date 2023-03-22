import React from "react";
import { Link } from "react-router-dom";

export default function LoginandSignup() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundColor: "gray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/login">
          <button
            style={{
              backgroundColor: "#4080ff",
              border: "none",
              height: "50px",
              width: "70px",
              fontSize: "bold",
            }}
          >
            login
          </button>
        </Link>
        <Link to="/signup">
          <button
            style={{
              backgroundColor: "#4080ff",
              border: "none",
              height: "50px",
              width: "70px",
              fontSize: "bold",
              marginLeft: "3px",
            }}
          >
            signup
          </button>
        </Link>
      </div>
    </>
  );
}
