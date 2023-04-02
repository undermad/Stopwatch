import React, {useState, useEffect} from 'react';
import Spinner from "./Spinner";

function FetchDataF() {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [generate, setGenerate] = useState(0);

    const fetchApi = async () => {
        setLoading(true);
        const response = await fetch('https://dog.ceo/api/breeds/image/random/3');
        const data = await response.json();
        console.log(data);
        if (data) {
            setRecords(data.message);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchApi();
    }, [generate]);

    return (
        <div className={"random-dog-generator-container"}>
            <div className={"dog-img-container"}>
                {loading ? <Spinner/>
                    : <img className={"random-dog-img"} src={records[0]} alt={"Dog"}/>}
                {loading ? <Spinner/>
                    : <img className={"random-dog-img"} src={records[1]} alt={"Dog"}/>}
                {loading ? <Spinner/>
                    : <img className={"random-dog-img"} src={records[2]} alt={"Dog"}/>}
            </div>

            <button className={"generate-random-dog-btn"}
                    onClick={() => {
                        setGenerate(generate + 1);
                    }}>
                Generate
            </button>

            <div className={"spinner"}/>
        </div>
    );
}

export default FetchDataF;