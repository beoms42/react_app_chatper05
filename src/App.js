import './App.css';
import Viewer from "./componemt/Viewer";
import Controller from "./componemt/Controller";
import { useState } from "react";

/**
 * P262 END
 * @returns {JSX.Element}
 * @constructor
 */

function App() {
    const [count, setCount] = useState(0);
    const handleSetCount = (value) => {
        setCount(count + value);
    };

  return (
    <div className="App">
        <h1>Simple Counter</h1>
        <section>
            <Viewer count={count} />
        </section>

        <section>
            <Controller handleSetCount={handleSetCount}/>
        </section>
    </div>
  );
}

export default App;
