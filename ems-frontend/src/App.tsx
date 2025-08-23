import "./App.css";
import ListEmployeeController from "./components/controller/ListEmployeeController.tsx";
import HeaderComponent from "./components/layout/HeaderComponent.tsx";
import HelloWorld from "./HelloWorld.tsx";

function App() {
  return (
    <>
      <HeaderComponent />
      <ListEmployeeController />
    </>
  );
}

export default App;
