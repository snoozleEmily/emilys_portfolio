import React from "react";
import "./App.css";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Flags from "./flags";

function Navbar({ setLanguage }) {
  return (
    <header className="navbar-data">
      <div className="icons-data">
        <FaGithubSquare
          className="icon-data"
          onClick={() =>
            window.open("https://github.com/snoozleEmily", "_blank")
          }
        />
        <FaInstagramSquare
          className="icon-data"
          onClick={() =>
            window.open("https://www.instagram.com/emilytechie/", "_blank")
          }
        />
        <FaLinkedin
          className="icon-data"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/emily-alvim/",
              "_blank"
            )
          }
        />
      </div>
      <Flags setLanguage={setLanguage} />
    </header>
  );
}

export default Navbar;
