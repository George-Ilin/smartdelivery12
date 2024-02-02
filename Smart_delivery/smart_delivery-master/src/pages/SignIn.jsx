import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import visibilityIcon from "/assets/svg/visibilityIcon.svg";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function SignIn() {
  const [formData, setFormatData] = useState({ email: "", password: "" });
  const [selected, setSelected] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const { setSession } = useContext(AuthContext);

  const { email, password } = formData;

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    try {
      if (type === "register") {
        const res = await axios.post("http://localhost:8000/register", {
          email: email,
          password: password,
        });
        localStorage.setItem("session", JSON.stringify(res.data));
        setSession(res.data);
        navigate("/");
      } else if (type === "login") {
        const res = await axios.post("http://localhost:8000/login", {
          email: email,
          password: password,
        });
        localStorage.setItem("session", JSON.stringify(res.data));
        setSession(res.data);
        navigate("/");
      }
      console.log(formData, type);
    } catch (error) {
      setIsError(true);
      toast.error(error.response.data);
    }
  };

  const onChange = (e) => {
    setFormatData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <div className={selected ? "container" : "container right-panel-active"}>
      <div className="form-container sign-in-container">
        <header>
          <h1>Welcome!</h1>
          <p>Sign in for existing users</p>
        </header>
        <form
          className={isError ? "form_error sign_form" : "sign_form"}
          onSubmit={(e) => {
            handleSubmit(e, "login");
          }}
        >
          <input
            type="email"
            className="emailInput"
            placeholder="Email address"
            id="email"
            value={email}
            onChange={onChange}
          />
          <div className="passwordInputDiv">
            <input
              type="password"
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />
            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
            />
          </div>
          <button className="signInButton">Login</button>
          <p>Enter your personal data and start your journey with us</p>
        </form>
      </div>
      <div className="form-container sign-up-container">
        <header>
          <h1>Create an account</h1>
          <p>Create an account for new users</p>
        </header>
        <form
          className={isError ? "form_error sign_form" : "sign_form"}
          onSubmit={(e) => {
            handleSubmit(e, "register");
          }}
        >
          <input
            type="email"
            className="emailInput"
            placeholder="Email address"
            id="email"
            value={email}
            onChange={onChange}
          />
          <div className="passwordInputDiv">
            <input
              type="password"
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />
            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
            />
          </div>
          <button className="signUpButton">Submit</button>
          <p>
            To ensure you remain logged on our website, we invite you to submit
            your personal details.
          </p>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>I'm already registred</h1>
            <p>Enter your personal data and start your journey with us</p>
            <button
              className="ghost"
              id="signIn"
              onClick={() => {
                setSelected(true);
              }}
            >
              Sign in
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello!</h1>

            <p>
              To ensure you remain logged on our website, we invite you to
              submit your personal details.
            </p>

            <button
              className="ghost"
              id="signUp"
              onClick={() => {
                setSelected(false);
              }}
            >
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
