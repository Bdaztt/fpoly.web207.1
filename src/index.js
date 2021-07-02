import React from "react";
import ReactDOM from "react-dom";

function total(giatriA,giatriB){
  return giatriA + giatriB;
}
const a = 10;
const b = 20;
 
const element = <h1>Tổng là : { total(a, b)}</h1>



ReactDOM.render(
  element,
  document.getElementById('root')
);
