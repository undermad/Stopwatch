import React, {useEffect, useState} from 'react';
import Card from "./Card";
import Spinner from "./Spinner";

let dogs = [];

function MatchCardGame() {
    const [cards, setCards] = useState([]);
    const [generate, setGenerate] = useState(0);
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(false);

    const generateRandomDogImages = async () => {
        setLoading(true);
        const response = await fetch('https://dog.ceo/api/breeds/image/random/6')
            .then(res => {
                return res.json()
            })
            .then(data =>
                dogs = data.message)
            .catch(err => console.log(err));
        setLoading(false);
    }

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    useEffect(() => {
        generateRandomDogImages();
        let d = dogs.slice();
        for (let i = 0; i < d.length; i++) {
            dogs.push(d[i]);
        }

        console.log(dogs);
        shuffle(dogs);
        setCards(dogs);

    }, [generate]);


    return (
        <div className={"match-card-game-container"}>
            {loading ? <Spinner/> :
                cards.map((card) => (
                    <Card url={card}/>
                ))
            }
            <button onClick={() => setGenerate(generate + 1)}>Generate</button>
        </div>
    );
}

export default MatchCardGame;