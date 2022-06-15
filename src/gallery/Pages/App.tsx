import '../../App.css';
import Gallery from '../Gallery';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DetailedCharacter from "./DetailedCharacter";




function App() {


  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Gallery/>}></Route>
                <Route path={"/characterdetails/:characterId"}
                       element={<DetailedCharacter />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
