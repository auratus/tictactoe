import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSymbol, deleteSymbol } from "./actions";
import Button from '@material-ui/core/Button';
import Navigation from "./Navigation.jsx";
import GameName from "./GameName.jsx";
import drawaudio from "./drawaudio.mp3"
import zero from "./zero.mp3";
import won from "./won.mp3";
import close from "./closeOutput.mp3";

function Board() {

// we are loading the below audio files on rendering the DOM because if dont do that it will have delay when 
// we use it on button click    
    let audio = new Audio(won);
    let zero1 = new Audio(zero);
    let draw = new Audio(drawaudio);
    let closeOu = new Audio(close);


    let selector = useSelector((storeData) => storeData.addReducer)
    let dispatch = useDispatch();
    let [currentState, newState] = useState("O");
    let [whoWin, newWhoWin] = useState();
    let [hideChanceCurrent, hideNew] = useState({
        display:"none"
    });

    let [cell1Color,setCell1Color] = useState({ color:"rgb(199, 21, 133)" });
    let [cell2Color,setCell2Color] = useState({ color:"rgb(199, 21, 133)" });
    let [cell3Color,setCell3Color] = useState({ color:"rgb(199, 21, 133)" });
    let [cell4Color,setCell4Color] = useState({ color:"rgb(199, 21, 133)" });
    let [cell5Color,setCell5Color] = useState({ color:"rgb(199, 21, 133)" });
    let [cell6Color,setCell6Color] = useState({ color:"rgb(199, 21, 133)" });
    let [cell7Color,setCell7Color] = useState({ color:"rgb(199, 21, 133)" });
    let [cell8Color,setCell8Color] = useState({ color:"rgb(199, 21, 133)" });
    let [cell9Color,setCell9Color] = useState({ color:"rgb(199, 21, 133)" });
   

    function hideChance(){
        return{
            display:hideChanceCurrent
        }
    }

    useEffect(()=>{
        let audio = new Audio(won);
        let zero1 = new Audio(zero);
        let draw = new Audio(drawaudio);
        let closeOu = new Audio(close);
      },[])

      useEffect(()=>{
         setTimeout(()=>{
            hideNew(()=>{
                return{
                    display:"flex"
                }
            })
         },5000)
      },[]);
    

    //  as we know in react whenever we want to change anything then we must use states to make any change hence for 
    //  changing style we have to use states  
    let [currStyle, newStyle] = useState({
        transform: "scale(0,0)"
    });

    function styling() {
        return {
            transform: currStyle
        }
    }

    // useEffect will execute every time the currentState changes because we want to check who won the game after 
    // every chance    
    useEffect(() => {

        // conditions to check if X won the game        
        if ((selector[0] === "X" && selector[3] === "X" && selector[6] === "X") ||
            (selector[0] === "X" && selector[4] === "X" && selector[8] === "X") ||
            (selector[0] === "X" && selector[1] === "X" && selector[2] === "X") ||
            (selector[1] === "X" && selector[4] === "X" && selector[7] === "X") ||
            (selector[2] === "X" && selector[5] === "X" && selector[8] === "X") ||
            (selector[2] === "X" && selector[4] === "X" && selector[6] === "X") ||
            (selector[3] === "X" && selector[4] === "X" && selector[5] === "X") ||
            (selector[6] === "X" && selector[7] === "X" && selector[8] === "X")) {
                hideNew(()=>{
                    return {
                        display:"none"
                    }
                });
            let audio = new Audio(won);
            audio.currentTime = 0;
            audio.volume = 0.6;
            audio.play();
            newStyle(() => {
                return {
                    transform: "scale(1,1)"
                }
            });

            newWhoWin(()=>{
                return (
                    <>
<h1>Tada Player "<span style={{color:"rgb(199, 21, 133)"}}>X</span>" Won</h1>
                    </>
                )
            });
        }

        // conditions to check if X won the game             
        else if ((selector[0] === "O" && selector[3] === "O" && selector[6] === "O") ||
            (selector[0] === "O" && selector[4] === "O" && selector[8] === "O") ||
            (selector[0] === "O" && selector[1] === "O" && selector[2] === "O") ||
            (selector[1] === "O" && selector[4] === "O" && selector[7] === "O") ||
            (selector[2] === "O" && selector[5] === "O" && selector[8] === "O") ||
            (selector[2] === "O" && selector[4] === "O" && selector[6] === "O") ||
            (selector[3] === "O" && selector[4] === "O" && selector[5] === "O") ||
            (selector[6] === "O" && selector[7] === "O" && selector[8] === "O")) {
                hideNew(()=>{
                    return {
                        display:"none"
                    }
                });
            let audio = new Audio(won);
            audio.currentTime = 0;
            audio.volume = 0.6;
            audio.play();
            newStyle(() => {
                return {
                    transform: "scale(1,1)"
                }
            });

            newWhoWin(()=>{
                return (
                    <>
<h1>Tada Player "<span style={{color:"rgb(32, 178, 170)"}}>O</span>" Won</h1>
                    </>
                )
            });
        }

        // conditions to check if game is draw 
        else if (selector[0] !== " " && selector[1] !== " " && selector[2] !== " " && selector[3] !== " " && selector[4] !== " "
            && selector[5] !== " " && selector[6] !== " " && selector[7] !== " " && selector[8] !== " ") {
                hideNew(()=>{
                    return {
                        display:"none"
                    }
                });
            let audio = new Audio(drawaudio);
            audio.currentTime = 0;
            audio.volume = 0.4;
            audio.play();
            newStyle(() => {
                return {
                    transform: "scale(1,1)"
                }
            });



            newWhoWin(()=>{
                return (
                    <>
<h1><span>It's a Draw</span><br/><span style={{marginTop:"7px",display:"flex",justifyContent:"center",alignItems:"center"}}><span style={{color:"rgb(32, 178, 170)",fontSize:"100%"}}>O</span>&nbsp;<span style={{color:"rgb(199, 21, 133)",fontSize:"100%"}}>X</span></span></h1>
                    </>
                )
            });
        }
    }, [currentState]);

    return (
        <>
            <div id="output" style={styling().transform}>
                <div id="output_child">
                    <div id="output_grandchild">
                        {whoWin}
                    </div>
                    <Button variant="contained" color="secondary" onClick={() => {
                        setCell1Color({ color:"rgb(199, 21, 133)" });
                        setCell2Color({ color:"rgb(199, 21, 133)" });
                        setCell3Color({ color:"rgb(199, 21, 133)" });
                        setCell4Color({ color:"rgb(199, 21, 133)" });
                        setCell5Color({ color:"rgb(199, 21, 133)" });
                        setCell6Color({ color:"rgb(199, 21, 133)" });
                        setCell7Color({ color:"rgb(199, 21, 133)" });
                        setCell8Color({ color:"rgb(199, 21, 133)" });
                        setCell9Color({ color:"rgb(199, 21, 133)" });
                        let closeOutput = new Audio(close);
                        closeOutput.currentTime=0;
                        closeOutput.volume=0.3;
                        closeOutput.play();
                        // resetting the states to its initial point on button click using "dispatch" hook
                        dispatch(deleteSymbol());

                        // after button click hiding the output node
                        newStyle(() => {
                            return {
                                transform: "scale(0,0)"
                            }
                        });

                        newState("O");

                        hideNew(()=>{
                            return {
                                display:"flex"
                            }
                        });

                    }}>
                        Play Again
                    </Button>
                </div>

            </div>
            <Navigation/>
            <GameName />
            <main id="container_main">

                <div id="chance" style={hideChance().display}>
                    <h3 id="player_name" >player "{currentState}" turn </h3>

                </div>


                <div id="container_child">
                    <div className="grand_childs">
                        <div id="cell11" onClick={() => {
                            if (selector[0] === " ") {
                                let audio = new Audio(zero);
                                audio.currentTime = 0;
                                audio.volume = 0.6;
                                audio.play();
                                if (currentState === "O") {
                                    setCell1Color({ color:"rgb(32, 178, 170)" });
                                    dispatch(addSymbol(0, currentState));
                                    newState("X");
                                   

                                }
                                else {

                                    dispatch(addSymbol(0, currentState));
                                    newState("O");
                                }
                            }
                        }
                        } >
                            <h2 style={cell1Color}>{selector[0]}</h2>
                        </div>
                        <div id="cell12" onClick={() => {
                            if (selector[1] === " ") {
                                let audio = new Audio(zero);
                                audio.currentTime = 0;
                                audio.volume = 0.6;
                                audio.play();
                                if (currentState === "O") {
                                    setCell2Color({ color:"rgb(32, 178, 170)" });
                                    dispatch(addSymbol(1, currentState));
                                    newState("X");
                                   
                                }
                                else {
                                    dispatch(addSymbol(1, currentState));
                                    newState("O");
                                }
                            }
                        }
                        } >
                            <h2 style={cell2Color}>{selector[1]}</h2>
                        </div>
                        <div id="cell13" onClick={() => {
                            if (selector[2] === " ") {
                                let audio = new Audio(zero);
                                audio.currentTime = 0;
                                audio.volume = 0.6;
                                audio.play();
                                if (currentState === "O") {
                                    setCell3Color({ color:"rgb(32, 178, 170)" });
                                    dispatch(addSymbol(2, currentState));
                                    newState("X");
                                    
                                }
                                else {
                                    dispatch(addSymbol(2, currentState));
                                    newState("O");
                                }
                            }
                        }
                        }>
                            <h2 style={cell3Color}>{selector[2]}</h2>
                        </div>
                    </div>

                    <div className="grand_childs">
                        <div id="cell21" onClick={() => {
                            if (selector[3] === " ") {
                                let audio = new Audio(zero);
                                audio.currentTime = 0;
                                audio.volume = 0.6;
                                audio.play();
                                if (currentState === "O") {
                                    setCell4Color({ color:"rgb(32, 178, 170)" });
                                    dispatch(addSymbol(3, currentState));
                                    newState("X");
                                   
                                }
                                else {
                                    dispatch(addSymbol(3, currentState));
                                    newState("O");
                                }
                            }
                        }
                        }>
                            <h2 style={cell4Color}>{selector[3]}</h2>
                        </div>
                        <div id="cell22" onClick={() => {
                            if (selector[4] === " ") {
                                let audio = new Audio(zero);
                                audio.currentTime = 0;
                                audio.volume = 0.6;
                                audio.play();
                                if (currentState === "O") {
                                    setCell5Color({ color:"rgb(32, 178, 170)" });
                                    dispatch(addSymbol(4, currentState));
                                    newState("X");
                                   
                                }
                                else {
                                    dispatch(addSymbol(4, currentState));
                                    newState("O");
                                }
                            }
                        }
                        }>
                            <h2 style={cell5Color}>{selector[4]}</h2>
                        </div>
                        <div id="cell23" onClick={() => {
                            if (selector[5] === " ") {
                                let audio = new Audio(zero);
                                audio.currentTime = 0;
                                audio.volume = 0.6;
                                audio.play();
                                if (currentState === "O") {
                                    setCell6Color({ color:"rgb(32, 178, 170)" });
                                    dispatch(addSymbol(5, currentState));
                                    newState("X");
                                  
                                }
                                else {
                                    dispatch(addSymbol(5, currentState));
                                    newState("O");
                                }
                            }
                        }
                        }>
                            <h2 style={cell6Color}>{selector[5]}</h2>
                        </div>
                    </div>

                    <div className="grand_childs">
                        <div id="cell31" onClick={() => {
                            if (selector[6] === " ") {
                                let audio = new Audio(zero);
                                audio.currentTime = 0;
                                audio.volume = 0.6;
                                audio.play();
                                if (currentState === "O") {
                                    setCell7Color({ color:"rgb(32, 178, 170)" });
                                    dispatch(addSymbol(6, currentState));
                                    newState("X");
                                   
                                }
                                else {
                                    dispatch(addSymbol(6, currentState));
                                    newState("O");
                                }
                            }
                        }
                        }>
                            <h2 style={cell7Color}>{selector[6]}</h2>
                        </div>
                        <div id="cell32" onClick={() => {
                            if (selector[7] === " ") {
                                let audio = new Audio(zero);
                                audio.currentTime = 0;
                                audio.volume = 0.6;
                                audio.play();
                                if (currentState === "O") {
                                    setCell8Color({ color:"rgb(32, 178, 170)" });
                                    dispatch(addSymbol(7, currentState));
                                    newState("X");
                                   
                                }
                                else {
                                    dispatch(addSymbol(7, currentState));
                                    newState("O");
                                }
                            }
                        }
                        }>
                            <h2 style={cell8Color}>{selector[7]}</h2>
                        </div>
                        <div id="cell33" onClick={() => {
                            if (selector[8] === " ") {
                                let audio = new Audio(zero);
                                audio.currentTime = 0;
                                audio.volume = 0.6;
                                audio.play();
                                if (currentState === "O") {
                                    setCell9Color({ color:"rgb(32, 178, 170)" });
                                    dispatch(addSymbol(8, currentState));
                                    newState("X");
                                    
                                }
                                else {
                                    dispatch(addSymbol(8, currentState));
                                    newState("O");
                                }
                            }
                        }
                        }>
                            <h2 style={cell9Color}>{selector[8]}</h2>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );

}

export default Board;