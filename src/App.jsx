import Component1 from "./components/RxJS/Component1";
import Component2 from "./components/RxJS/Component2";
import "./app.css";
import ContextHome from "./pages/ContextHome/ContextHome";

function App() {
  return (
    <div className="app">
      <h2>Rxjs</h2>
      <Component1 />
      <Component2 />
      <h2>Context</h2>
      <ContextHome />
    </div>
  );
}

export default App;
