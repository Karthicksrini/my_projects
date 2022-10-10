import Calculator from "./Calculator";
import Home from "./Home";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ExpenseTracker from "./ExpenseTracker";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/calculator" element={<Calculator/>}/>
      <Route path="/expense_tracker" element={<ExpenseTracker/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
