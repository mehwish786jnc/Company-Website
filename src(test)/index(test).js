import React from "react";
import ReactDOM  from "react-dom/client";
const root=ReactDOM.createRoot(document.getElementById('root'));
const heading={
    color:"red",
    fontFamily:"arial",
}
function Comptest(){
    return <h2>Wassup</h2>
    
}
root.render(
    <>
    
    <h1 style={heading}>Hello</h1>
    <Comptest/>
    </>
)
