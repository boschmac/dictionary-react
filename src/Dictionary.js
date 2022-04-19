import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary (){
let [keyword, setKeyword] = useState("");
let [results, setResults] = useState (null);
let [photo, setPhoto] = useState(null);

function handleDictionaryResponse (response){

setResults (response.data[0]);
}

function handlePexelResponse (response){
  setPhoto(response.data.photos);
}
function handleKeywordChange(event){
  setKeyword(event.target.value);
}

  function search(event){
event.preventDefault();


let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
axios.get(apiUrl).then(handleDictionaryResponse);

const pexelApiKey= "563492ad6f9170000100000135f282540fe042758c498124d30319a5";
let pexelApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
let headers =  { Authorization: `Bearer ${pexelApiKey}` };

axios.get(pexelApiUrl, {headers: headers }).then(handlePexelResponse);
  }
  
  return (
  <div className="Dictionary">
    <section>
    <form onSubmit={search}>
      <input type="search" placeholder="Search for a word..." onChange={handleKeywordChange}/>
    </form>
    </section>
    <Results results={results}/>
    <Photos photos={photo}/>
  </div>
  )
}