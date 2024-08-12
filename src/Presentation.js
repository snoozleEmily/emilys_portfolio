import React, { useState } from "react";
import More from "./More";
import "./App.css";

function Presentation({ language = {} }) {
  const presentationTitle = language.title || "";
  const presentationText = language.presentation || "";
  const [readMore, setReadMore] = useState(false);

  if (!presentationText.trim()) {
    console.log(
      "Error: The 'presentationText' property in the 'language' prop is empty or undefined."
    );
  }

  return (
    <article className="presentation-container-data">
      <h1 className="title-data">{presentationTitle}</h1>
      <p className="presentaition-data">{presentationText}</p>
      {readMore && <More text={language.readMore} />}
      <button
        className="read-more-button"
        onClick={() => setReadMore((prevState) => !prevState)}
      >
        {readMore ? "Read less..." : "Read more..."}
      </button>
    </article>
  );
}

export default Presentation;
