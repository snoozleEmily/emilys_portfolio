import React, { useState } from "react";
import intros from "./data";
import usflag from "./images/us-flag.jpg";
import brflag from "./images/br-flag.jpg";
import esflag from "./images/es-flag.jpg";
import frflag from "./images/fr-flag.jpg";
import { RiMenuFold3Fill } from "react-icons/ri";

const flags = [
  {
    id: 1,
    flag: usflag,
    intro: intros[0],
  },
  {
    id: 2,
    flag: brflag,
    intro: intros[1],
  },
  {
    id: 3,
    flag: esflag,
    intro: intros[2],
  },
  {
    id: 4,
    flag: frflag,
    intro: intros[3],
  },
];

function Flags({ setLanguage }) {
  const [flagsVisible, setFlagsVisible] = useState(false);
  
  const toggleFlagsVisibility = () => {
    setFlagsVisible(!flagsVisible);
  };

  return (
    <div className="language-menu">
      <RiMenuFold3Fill
        className={`icon-menu ${flagsVisible ? "icon-menu-toggle" : ""}`}
        onClick={toggleFlagsVisibility}
      />
      <div className={`flags-data ${flagsVisible ? "flags-visible" : ""}`}>
        {flags.map((flag) => (
          <img
            key={flag.id}
            src={flag.flag}
            alt={`${flag.flag} flag`}
            className="flag-data"
            onClick={() => setLanguage(flag.intro)}
          />
        ))}
      </div>
    </div>
  );
}

export default Flags;
