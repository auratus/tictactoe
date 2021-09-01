import React from "react";
import demo from "./demo.gif"
import loader from "./preloader.gif"
function Demo(){
    return (
        <>
        <div id="demo" style={{backgroundImage:`url(${demo})`}}>
            <div id="demo_child">
<img src={loader}/>
</div>
        </div>
        </>
    );
}

export default Demo;