import React from "react";
import "./Synonyms.css";

export default function Synonym (props){
if (props.synonym){
  return (
    <div className="Synonym">
      <p>Synonyms:</p>
      <ul>
      {props.synonym.map(function (synonym, index){
        return(
          <li key={index}><em>{synonym}</em></li>
          )
        })}
        </ul>
    </div>)}
    else {
      return null;
    }

}