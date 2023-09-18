import React from "react";
import "./App.css";

function Presentation({ language = {} }) {
  const presentationTitle = language.title || "";
  const presentationText = language.presentation || "";

  if (!presentationText.trim()) {
    console.log("Language prop is empty or undefined.");
  }

  return (
    <article>
      <div className="presentation-container-data">
        <h1 className="title-data">{presentationTitle}</h1>
        <p className="presentaition-data">{presentationText}</p>
      </div>
    </article>
  );
}

export default Presentation;
