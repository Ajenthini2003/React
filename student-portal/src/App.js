// App.js
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import './App.css';

function App() {

    // State variables
    const [info, setInfo] = useState({});
    const [input, setInput] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [options, setOptions] = useState([]);
    const [output, setOutput] = useState(0);

    // Fetch currency data when "from" changes
    useEffect(() => {
        Axios.get(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
        )
            .then((res) => {
                setInfo(res.data[from]);
            })
            .catch((err) => console.log("API Error:", err));
    }, [from]);

    // Update currency options and convert when info changes
    useEffect(() => {
        if (info) {
            setOptions(Object.keys(info));
            convert();
        }
    }, [info]);

    // Convert the currency
    function convert() {
        if (!info[to]) return;
        const rate = info[to];
        setOutput(input * rate);
    }

    // Switch currencies
    function flip() {
        const temp = from;
        setFrom(to);
        setTo(temp);
    }

    return (
        <div className="App">
            <div className="heading">
                <h1>Currency Converter</h1>
            </div>

            <div className="container">
                <div className="left">
                    <h3>Amount</h3>
                    <input
                        type="number"
                        placeholder="Enter amount"
                        onChange={(e) => setInput(Number(e.target.value))}
                    />
                </div>

                <div className="middle">
                    <h3>From</h3>
                    <Dropdown
                        options={options}
                        onChange={(e) => setFrom(e.value)}
                        value={from}
                        placeholder="From"
                    />
                </div>

                <div className="switch">
                    <HiSwitchHorizontal size="30px" onClick={flip} />
                </div>

                <div className="right">
                    <h3>To</h3>
                    <Dropdown
                        options={options}
                        onChange={(e) => setTo(e.value)}
                        value={to}
                        placeholder="To"
                    />
                </div>
            </div>

            <div className="result">
                <button onClick={convert}>Convert</button>
                <h2>Converted Amount:</h2>
                <p>
                    {input} {from} = {output.toFixed(2)} {to}
                </p>
            </div>
        </div>
    );
}

export default App;
