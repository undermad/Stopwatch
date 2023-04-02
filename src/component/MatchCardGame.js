import React, {useEffect, useState} from 'react';
import Card from "./Card";

let dogs = [];

function MatchCardGame() {
    const [cards, setCards] = useState([]);
    const [generate, setGenerate] = useState(0);
    const [selected, setSelected] = useState(null);

    const generateRandomDogImages = async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random/6')
            .then(res => {
                return res.json()
            })
            .then(data =>
                dogs = data.message)
            .catch(err => console.log(err));
    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

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
            <Card url={cards[0]}/>
            <Card url={cards[1]}/>
            <Card url={cards[2]}/>
            <Card url={cards[3]}/>
            <Card url={cards[4]}/>
            <Card url={cards[5]}/>
            <Card url={cards[6]}/>
            <Card url={cards[7]}/>
            <Card url={cards[8]}/>
            <Card url={cards[9]}/>
            <Card url={cards[10]}/>
            <Card url={cards[11]}/>
            <button onClick={() => setGenerate(generate + 1)}>Generate</button>
        </div>
    );
}

export default MatchCardGame;