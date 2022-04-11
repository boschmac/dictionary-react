import React from "react";

export default function Meaning (props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function(definition, index){
        return (
          <div key={index}><ul><li>{definition.definition}
          <br/>
          <em>{definition.example}</em>
          </li>
          </ul>
          </div>
        )
      })}
    </div>
  )
}