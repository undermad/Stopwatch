import {useEffect, useState} from "react";


function Stopwatch() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [btnText, setBtnText] = useState("Start");

    useEffect(() => {
        if (running) {
            let interval = setTimeout(() => setTime(time + 1), 10);
            return () => clearInterval(interval);
        }
    }, [time, running]);

    let milliSec = time % 100;
    if (milliSec < 10) {
        let temp = milliSec;
        milliSec = '0' + temp;
    }

    let seconds = Math.floor((time % 6000) / 100);
    if (seconds < 10){
        let temp = seconds;
        seconds = '0' + temp;
    }

    function startStop() {
        if (running === false) {
            setBtnText("Stop");
            setRunning(true);
        } else {
            setBtnText("Start");
            setRunning(false);
        }
    }

    function reset() {
        setRunning(false);
        setTime(0);
    }

    return (
        <div className={"container"}>
            <div className={"clock-container"}>
                <span className={"clock-timer"}>{seconds}:{milliSec}</span>
                <div className={"clock-btn-container"}>
                    <button onClick={startStop} className={running === true ? "clock-btn running" : "clock-btn"}>{btnText}</button>
                    <button onClick={reset} className={"clock-btn"}>Reset</button>
                </div>
            </div>
        </div>
    );

}


export default Stopwatch;
