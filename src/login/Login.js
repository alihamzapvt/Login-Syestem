import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
export default function Login() {
  const [values, setValues] = useState({});
  const [fetchdata, setFetchdata] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validemail, setValidemail] = useState(false);

  const navigate = useNavigate();
  const handlechage = function (event) {
    const { name, value } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
    setValues({ ...values, [name]: value });
  };
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((data) => {
      setFetchdata(data?.data);
    });
  }, []);

  const submit = function (e) {
    e.preventDefault();

    let dataMatch = fetchdata?.some((item) => item.email === email);
    if (dataMatch) {
      navigate("/navbar");
      console.log("login sucess");
    } else {
      setValidemail("This email is not valid");
      console.log("login failed");
    }
  };
  return (
    <>
      <div style={{ height: "100vh", backgroundColor: "	#89CFF0" }}>
        <Link to="/backlogin">
          <span
            style={{ fontSize: "25px", marginLeft: "10px", color: "black" }}
          >
            <i class="fa-solid fa-arrow-left"></i>
          </span>
        </Link>
        <p style={{ textAlign: "center", fontSize: "30px", color: "white" }}>
          <strong>Please login your account</strong>
        </p>
        <form
          onSubmit={submit}
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            padding: "20px",
          }}
        >
          <div>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="type your Email"
              onChange={handlechage}
              style={{
                width: "500px",
                height: "60px",
                marginTop: "10px",
                fontSize: "20px",
                padding: "20px",
                borderRadius: "10px",
                outline: "none",
              }}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="type your password"
              onChange={handlechage}
              style={{
                width: "500px",
                height: "60px",
                marginTop: "10px",
                fontSize: "20px",
                padding: "20px",
                borderRadius: "10px",
                outline: "none",
              }}
            />
          </div>
          <p style={{ textAlign: "center", color: "red" }}>{validemail}</p>
          <button
            type="submit"
            style={{
              width: "200px",
              height: "60px",

              display: "block",
              margin: "20px auto auto auto",
              backgroundColor: "gray",
              fontSize: "20px",
              borderRadius: "10px",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
