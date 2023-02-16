import ComponentContext1 from "./components/ComponentContext1";
import ComponentContext2 from "./components/ComponentContext2";
import {HomeContextProvider} from "./context/contextHome.context";

function ContextHome() {
  return (
    <div>
      <HomeContextProvider>
        <ComponentContext1 />
        <ComponentContext2 />
      </HomeContextProvider>
    </div>
  );
}

export default ContextHome;
