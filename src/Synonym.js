import React from "react";

export default function Synonym (props){
if (props.synonym){
  return (
    <div className="Synonym">
      <p>Synonym:
      <ul>
      {props.synonym.map(function (synonym, index){
        return(
          
          <li key={index}><em>{synonym}</em></li>
          )
        })}
        </ul>
        </p>
    </div>)}
    else {
      return null;
    }

}