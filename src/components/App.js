import React, { useState, useEffect } from 'react';
import { HangingMan } from '../api/api';
import { fetchButton } from '../actions';
import axios from 'axios';
import 'babel-polyfill';

const App = () => {
    const [data, setData] = useState({words: []});
    useEffect(() => {
        const runEffect = async () => {
            const result = await axios('src/api/api.js');
            setData(result.data)
            console.log(result.data);
        }
        runEffect();
    }, []);

    return (
        <div>
            Hello
        </div>
    )
}

export default App;