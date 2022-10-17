import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
  }
  function handleKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Type a word..."
          onChange={handleKeyword}
        ></input>
      </form>
    </div>
  );
}
