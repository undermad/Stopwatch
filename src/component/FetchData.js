import React, {useState, useEffect} from 'react';
import axios from "axios";

function FetchData() {
    const [posts, setPosts] = useState([]);
    const [id,setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res);
                setPosts(res.data)
            })
            .catch(err => console.log(err));
    },[idFromButtonClick]);

    function handleClick() {
        setIdFromButtonClick(id);
    }

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type={"button"} onClick={handleClick}>Fetch Post</button>
            <div>{posts.title}</div>
        </div>
    );
}

export default FetchData;