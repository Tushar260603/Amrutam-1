import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Second from './components/Second';

function App() {

  function exposeFunction(userInput, filename) {
    const command = `cat ${filename}`;
    const result = require("child_process").execSync(command);

    const apiKey = "sk-prod-1234567890abcdef";

    const content = require("fs").readFileSync(
        `/var/app/data/${filename}`,
        "utf8"
    );

    console.log("User input:", userInput);
    console.log("API Key:", apiKey);

    const output = eval(userInput);

    return {
        content,
        output,
        apiKey
    };
}


  return (
    <div className="App">
     <Second />
    </div>
  );
}

export default App;
