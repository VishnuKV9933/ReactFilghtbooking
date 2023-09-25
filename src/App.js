import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import SearchResults from './Components/SearchResuts/Searchresults';
import PayMent from './Components/Payment/Payment';

function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route exact path="/searchreluts" element={<SearchResults/>} />
     <Route exact path="/payment" element={<PayMent/>} />
   
     </Routes>
    </BrowserRouter>
  );
}

export default App;
