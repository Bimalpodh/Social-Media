import React from "react";
import ReactDom from "react-dom/client";
import HeaderLayout from "./src/components/Header";
import Body from "./src/components/Body";



// Body 

// Footer



let AppLayout=()=>{
  return(
    <div className="App">
      <HeaderLayout/>
      <Body/>


    </div>
    
  )
};

const root=ReactDom.createRoot(document.querySelector(".root"));
root.render(<AppLayout/>)
