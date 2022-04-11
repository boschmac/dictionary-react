import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary (){
let [keyword, setKeyword] = useState("");

function handleKeywordChange(event){
  setKeyword(event.target.value);
}

  function search(event){
event.preventDefault();
alert(`Searching for ${keyword}`);

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
  }
  
  return (
  <div className="Dictionary">
    <form onSubmit={search}>
      <input type="search" onChange={handleKeywordChange}/>
    </form>
  </div>
  )
}