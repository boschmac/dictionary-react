import React from "react";

export default function Synonym (props){
if (props.synonym){
  return (
    <div className="Synonym">
      {props.synonym.map(function (synonym, index){
        return(
        <ul key={index}>
          <li><em>{synonym}</em></li>
        </ul>)
      })}
    </div>)}
    else {
      return null;
    }

}