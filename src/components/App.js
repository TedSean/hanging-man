import React, { useState, useEffect } from 'react';
// import { HangingMan } from '../api/api';
import { fetchButton } from '../actions';
import axios from 'axios';
import 'babel-polyfill';

const App = () => {
    let newString;
    const [word, setWord] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        const runEffect = async () => {
            const result = await axios('src/api/api.js');
            setData(result.data)
            console.log(result.data);
        }
        runEffect();
    }, []);

    const randomWord = () => {
        const chosenWord = data[Math.floor(Math.random() * data.length)];
        replaceLetter(chosenWord.word);
    }

    const replaceLetter = (string) => {
        let getString = string;
        let stringToUnderScore = getString.replace(/[a-z]/gi, '_');
        setWord(stringToUnderScore);
    }

    return (
        <div>
            <p>{word}</p>
            <button onClick={randomWord}></button>
        </div>
    )
}

export default App;