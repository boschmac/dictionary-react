import React from "react";
import Synonym from "./Synonym";
import "./Meaning.css";

export default function Meaning (props) {
  return (
    <div className="Meaning">
      <section>
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function(definition, index){
        return (
          <div key={index}><ul><li>{definition.definition}
          <br/>
          <span className="example">{definition.example}</span>
          </li>
          </ul>
          
          </div>
        )
      })}
      <Synonym synonym={props.meaning.synonyms} />
      </section>
    </div>
  )
}