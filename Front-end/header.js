import React, {useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LimitlessLogo from "../images/LimitlessLogo.png";
import LimitlessText from "../images/LimitlessText.png";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const location = useLocation();

  const navHighlight = (buttonName, borderRadius) => {
    setActiveButton(buttonName);
    navigate(`../${buttonName}`);
    document.documentElement.style.setProperty(
        "--active-button-border-radius",
        borderRadius
    );
  };

  const onProfileClick = () => {
    if (loggedIn) {
      navigate("/profile");
    } else {
      setLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      navigate('/login');
    }
  };

  useEffect(() => {
    const path = location.pathname;
    const buttonName = path.substring(path.lastIndexOf("/") + 1);
    setActiveButton(buttonName);

    // Check local storage for login status
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setLoggedIn(true);
    }
  }, [location]);


  const handleLogin = () => {
    // handle user login logic here

    setLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    navigate("/login");
  };

  const handleLogout = () => {
    // handle user logout logic here
    localStorage.removeItem("user");
    localStorage.setItem("isLoggedIn", "false");
    setLoggedIn(false);
    navigate("/home");
  };

  const home = () => {
    navigate("/home");
  };

  return (
      <header className="header">
        <div className="logo-container">
          <a href="/">
            <img src={LimitlessLogo} alt="logo" className="logo" onClick={home} />
            <img
                src={LimitlessText}
                alt="logo-text"
                className="logo-text"
                onClick={home}
            />
          </a>
        </div>
        <div className="sign-in-out-container">
          {loggedIn ? (
              <button className="sign-out-button" onClick={handleLogout}>
                Sign Out
              </button>
          ) : (
              <button className="sign-in-button" onClick={handleLogin}>
                Sign In
              </button>
          )}
        </div>
        <div className="buttonContainer">
          <div className="buttons">
            <button
                className={activeButton === "home" ? "buttonClass active" : "buttonClass"}
                onClick={() => navHighlight("home")}
            >
              Home
            </button>
            <button
                className={activeButton === "coaches" ? "buttonClass active" : "buttonClass"}
                onClick={() => navHighlight("coaches")}
            >
              Coaches
            </button>
            <button
                className={activeButton === "profile" ? "buttonClass active" : "buttonClass"}
                onClick={() => {
                    navHighlight("profile");
                    onProfileClick();
                }}
            >
              Profile
            </button>
            <button
                className={activeButton === "contact" ? "buttonClass active" : "buttonClass"}
                onClick={() => navHighlight("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </header>
  );
};

export default Header;