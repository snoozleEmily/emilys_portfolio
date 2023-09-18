import React from "react";
import intros from "./data";
import usflag from "./images/us-flag.jpg";
import brflag from "./images/br-flag.jpg";
import esflag from "./images/es-flag.jpg";
import frflag from "./images/fr-flag.jpg";

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
  return (
    <div className="flags-data">
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
  );
}

export default Flags;
