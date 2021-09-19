import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function FetchIp() {

    // let [ip, setIp] = useState();

    // useEffect(() => {
    //     fetch("https://api.ipify.org/?format=json").
    //         then((jsonData) => {
    //             return jsonData.json();
    //         }).then((userIp) => {
    //             setIp(userIp.ip);
    //             let xmlreq = new XMLHttpRequest();
    //             xmlreq.open("POST", `http://ipserver.likesyou.org`, true);

                // when we want to make a post request we need to set headers and a string in send function
                //headers define which type of data we are sending and string in send function defines what
                //data we are sending.
                // xmlreq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                // xmlreq.setRequestHeader("Access-Control-Allow-Origin", "*");
                // xmlreq.setRequestHeader("Access-Control-Request-Method", "POST");
                // xmlreq.setRequestHeader("Access-Control-Requested-Headers",)
                // xmlreq.withCredentials = false;
    //             xmlreq.send(`userip=${userIp.ip}`);

    //             xmlreq.onreadystatechange = function () {
    //                 if (xmlreq.readyState == 4 && xmlreq.status == 200) {
    //                     alert("data inserted successfully");
    //                 }

    //                 else{
    //                     console.log("Connection failed to the server");
    //                 }
    //             }
    //         }).catch((error) => {
    //             alert(error);
    //         })



    // }, [])

    return null;
}

export default FetchIp;