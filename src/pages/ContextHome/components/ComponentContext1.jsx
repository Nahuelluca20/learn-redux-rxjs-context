import {useHomeContext} from "../context/contextHome.context";

function ComponentContext1() {
  const {setHomeContextValue} = useHomeContext();

  const handleClick = () => {
    setHomeContextValue("hola mi cielo");
  };

  return (
    <div>
      <button onClick={handleClick}>Send information for context</button>
    </div>
  );
}

export default ComponentContext1;
