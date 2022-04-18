import React from "react";

export default function Synonym (props){
if (props.synonym){
  return (
    <div className="Synonym">
      <p>Synonym:</p>
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