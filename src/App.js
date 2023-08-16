import './App.css';
import Viewer from "./componemt/Viewer";
import Controller from "./componemt/Controller";
import Even from "./componemt/Even";
import { useState, useEffect } from "react";

/**
 * P280 chapter 06
 * @returns {JSX.Element}
 * @constructor
 */

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const handleSetCount = (value) => {
        setCount(count + value);
    };

    const handleChangeText = (e) => {
        setText(e.target.value);
    }



    // useEffect(() => {
    //     console.log("업데이트 : ", count, text);
    // }, [count, text]);

  return (
    <div className="App">
        <h1>Simple Counter</h1>
        <section>
            <input value={text} onChange={handleChangeText}/>
        </section>

        <section>
            <Viewer count={count} />
            {count % 2 === 0 && <Even />}
        </section>

        <section>
            <Controller handleSetCount={handleSetCount} />
        </section>
    </div>
  );
}

export default App;
