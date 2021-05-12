import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import axios from 'axios';

const API_KEY = 'Hqn16GW77Nl8YHExqVd3LxR4ToJx9u44'
const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;

function App() {
    const [input , setInput] = useState('')
    const [gifs, setGifs] = useState([]);
    useEffect(()=>{
        const search = async () => {
            let response = await axios.get(`${BASE_URL}&q=${input}`)
           const { data }= response.data ;
           let urls = data.map((item) => item.images['fixed_height'].url);
           console.log(urls);
           setGifs(urls);
        };
        search();
        console.log(input);
    },[input]);

    return(
        <>
            <div className="App">
        <div>
            <input
                value={input}
                onChange={(event) => { setInput(event.target.value) }}
            />
        </div>
        <div>
            {
                gifs.map((url, index) => (
                    <img src={url} key={url} />
                ))
            }
        </div>
        </div>
        </>
    )
}

export default App;