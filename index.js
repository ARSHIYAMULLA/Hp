import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
//new Date(year,month,day,hour,minutes,seconds)
let curDate=new Date(2023,2,25,20);
curDate=curDate.getHours(); 
let greeting='';
const cssStyle={ };
 if(curDate>=1 && curDate< 12){
  greeting="Good Morining";
  cssStyle.color="green";
 }else  if(curDate>=12&& curDate<19){
 greeting="Good Afternoon";
 cssStyle.color="orange";
 }else{
  greeting="Good Night";
  cssStyle.color="Black";
 } 

ReactDOM.render([
  <div>
  <h1>Hello Everyone,<span style={cssStyle}>{greeting}</span></h1>,
 </div>
],
document.getElementById("root")
 );



