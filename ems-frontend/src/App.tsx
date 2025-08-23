import "./App.css";
import ListEmployeeController from "./components/controller/ListEmployeeController.tsx";
import HeaderComponent from "./components/layout/HeaderComponent.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HelloWorld from "./HelloWorld.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          //http://localhost:3000
          <Route path='/' element = { <ListEmployeeController /> }></Route>
          //http://localhost:3000/employees
          <Route path='/employees' element = { <ListEmployeeController /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
