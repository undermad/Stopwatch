import Stopwatch from "./component/Stopwatch";
import FetchDataF from "./component/FetchDataF";
import MatchCardGame from "./component/MatchCardGame";
import SudokuGame from "./component/SudokuGame";

function App() {
    return (
        <div >
            <SudokuGame />
            <FetchDataF />
            <Stopwatch />
            <MatchCardGame/>
        </div>

    );
}

export default App;
