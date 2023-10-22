import './App.css';
//import {Route, Routes} from "react-router-dom";

//import Notfound from './components/Not_found';

//import Hello from './components/Hello';
//import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import FunctionEvent from './components/FunctionEvent';

function App() {
  return (
    <div className="App">
       <Profile name="RAM" />

       <Counter></Counter>
      <br></br>
       <FunctionEvent></FunctionEvent>

    </div>
  );
}

export default App;
