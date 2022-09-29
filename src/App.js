import Calculator from "./Calculator";
import Home from "./Home";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ExpenseTracker from "./ExpenseTracker";
import CrudOperation from "./CRUD_Operation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/calculator" element={<Calculator/>}/>
      <Route path="/expense_tracker" element={<ExpenseTracker/>}/>
      <Route path="/crud_operation" element={<CrudOperation/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
