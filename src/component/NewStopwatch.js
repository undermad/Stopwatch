import {useEffect, useState} from "react";


function NewStopwatch() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {

    }, [minutes]);
    let interval = setInterval(count, 1000);
    clearInterval(interval);


    function count() {
        setSeconds(seconds + 1);
        if (seconds === 60) {
            setMinutes(minutes + 1);
        }
    }


    return (
        <div className={"container"}>
            <div className={"clock-container"}>
                <span className={"clock-timer"}>{minutes}:{seconds}</span>
                <div className={"clock-btn-container"}>
                    <button className={"clock-btn"}>Start</button>
                    <button className={"clock-btn"}>Reset</button>
                </div>
            </div>
        </div>
    );

}


export default NewStopwatch;
