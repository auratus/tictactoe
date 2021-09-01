import React, { useState } from "react";
import { useEffect } from "react";
import logo1 from "./logo1.png";
 
function Navigation(){


// the reson for below panchayat is that in server we are getting the navigation on top during loading 
// hence we are hiding the navigation element during the loading part and showing it again after loading part is
// done.The reson of problem might be the position:fixed property
    let[all,allNew] = useState({
        display:"none"
    })

    useEffect(()=>{
setTimeout(()=>{
allNew(()=>{
    return {
        display:"block"
    }
})
},4900)
    },[]);

    return (
        <>
<header style={all}>
        <nav id="navigation_child">
            <div id="logo_div">
                <img src={logo1} id="rt_logo"/>
            </div>

            <div id="nav_main">

                <input type="checkbox" id="checkBox" />
                <label for="checkBox" id="checkLabel">&#x2630;</label>
                <ul id="drop_down">
                    <label id="close" for="checkBox"><i class="fas fa-window-close"></i></label>
                    <li id="index"><a href="https://www.rohittechnical.cf" >Home</a></li>
                    <li id="services"><a href="https://www.rohittechnical.cf/services.html" >Services</a></li>
                    <li id="contactus"><a href="https://www.rohittechnical.cf/contactus.html" >Contact Us</a></li>
                    <li id="myprojects"><a href="https://www.rohittechnical.cf/myprojects.html" >Projects</a></li>
                </ul>


            </div>


        </nav>

    </header>
    </>
    );
}

export default Navigation;