import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./EmpListing";
import EmpCreate from "./EmpCreate";
import EmpDetails from "./EmpDetails";
import EmpEdit from "./EmpEdit";

function App() {
  return (
    <div className="App">
      <h1 className="head">React JS CRUD Operations</h1>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />}></Route>
          <Route path="/employee/create" element={<EmpCreate />}></Route>

          <Route path="/employee/detail/:empid" element={<EmpDetails />}></Route>
          <Route path="/employee/edit/:empid" element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



// HOW TO INSTALL JSON

// npm install -g json-server
// json-server --watch db.json --port 8000

