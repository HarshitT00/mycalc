import React, { useState } from "react";
import "./App.css";
import BackspaceIcon from '@mui/icons-material/Backspace';

const App = () =>{
    const [result,setresult] = useState("") ;

    const clickhandle = (Event) =>{
        setresult(result.concat(Event.target.value));
    };

    const delt = () =>{
        setresult(result.slice(0, -1));
    };

    const clr = () =>{
        setresult("");
    };

    const resultcal = () =>{
        let newresult=eval(result);
        setresult(newresult.toString());
    };


    return (
        <>
       <div className="mainbody">
            <div>
                <h1>Calculator</h1>
            </div>
            <div className="clacbody">
                <input type="text" placeholder="0" id="answer" className="answer" value={result}></input>
                <input type="button" value="9" className="mybtn" onClick={clickhandle} ></input>
                <input type="button" value="8" className="mybtn" onClick={clickhandle}></input>
                <input type="button" value="7" className="mybtn" onClick={clickhandle}></input>
                <button className="mybtn" onClick={delt} >{<BackspaceIcon/>}</button>
                <input type="button" value="6" className="mybtn" onClick={clickhandle}></input>
                <input type="button" value="5" className="mybtn" onClick={clickhandle}></input>
                <input type="button" value="4" className="mybtn" onClick={clickhandle}></input>
                <input type="button" value="AC" className="mybtn" onClick={clr}></input>
                <input type="button" value="3" className="mybtn" onClick={clickhandle}></input>
                <input type="button" value="2" className="mybtn" onClick={clickhandle}></input>
                <input type="button" value="1" className="mybtn" onClick={clickhandle}></input>
                <input type="button" value="=" className="mybtn" onClick={resultcal}></input>
                <input type="button" value="+" className="mybtn" onClick={clickhandle}></input>
                <input type="button" value="-" className="mybtn" onClick={clickhandle}></input>
                <input type="button" value="*" className="mybtn" onClick={clickhandle} />
                <input type="button" value="/" className="mybtn" onClick={clickhandle}></input>
            </div>
        </div>
        </>
    )
};

export default App;