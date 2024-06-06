import React, { useState } from "react";
import More from "./More";
import "./App.css";

function Presentation({ language = {} }) {
  const presentationTitle = language.title || "";
  const presentationText = language.presentation || "";
  const [readMore, setReadMore] = useState(false);

  if (!presentationText.trim()) {
    console.log("Language prop is empty or undefined.");
  }

  return (
    <article className="presentation-container-data">
      <h1 className="title-data">{presentationTitle}</h1>
      <p className="presentaition-data">{presentationText}</p>
      <button className="read-more">read more...</button>
      {readMore && <More />}
    </article>
  );
}

export default Presentation;
