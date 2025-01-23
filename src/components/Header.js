import { LogoURL } from "../util/constants";
import { useEffect, useState } from "react";

// Header
const HeaderLayout = () => {
  let [Logbtn, setLogbtn] = useState("Login");
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        {/* <img id="logo" src={LogoURL} alt="logo"/> */}
      </div>
      <ul className="navbar">
        <div className="Sec-1">
          <div className="sec-11">
            <li className="nav-icon">
              <i className="fa-solid fa-house"></i>{" "}
            </li>
            <li className="nav-icon">
              <i className="fa-solid fa-search"></i>
            </li>
            <li className="nav-icon">
              <i className="fa-solid fa-user"></i>{" "}
            </li>
            <li className="nav-icon">
              {" "}
              <i class="fa-solid fa-message"></i>{" "}
            </li>
            <li className="nav-icon">
              {" "}
              <i class="fa-solid fa-save"></i>
            </li>
            <li className="nav-icon">
              <i class="fa-solid fa-gear"></i>
            </li>
          </div>
        </div>

        <div className="sec-3">
          <button
            className="Login-btn"
            onClick={() => {
              Logbtn === "Login" ? setLogbtn("Logout") : setLogbtn("Login");
              console.log(Logbtn);
            }}
          >
            {Logbtn}
          </button>
        </div>
      </ul>
    </div>
  );
};

export default HeaderLayout;
