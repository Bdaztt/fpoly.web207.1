import React from "react";
import ReactDOM from "react-dom";
const myName = <strong> Bui Tien Dat</strong>;
const myAge = 18;
const myStatus = false;

const person = {
  name : 'Bui Tien Dat',
  age: 18,
  status: false
}

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
