import React from "react";
import "./Phonetic.css";

export default function Phonetic (props){
  console.log(props);
 if (props.phonetic.audio){

  return (
    <div className="Phonetic">
      <div className="row">
        <div className="col-2">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">Listen</a>
      </div>
<div className="col-3 spelling">
      {props.phonetic.text}
      </div>
      </div>
    </div>
  )
 }else {
   return null;
 }

}