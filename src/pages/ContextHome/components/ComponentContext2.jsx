import {useHomeContext} from "../context/contextHome.context";

function ComponentContext2() {
  const {homeContextValue} = useHomeContext();

  return <div>The value is: {homeContextValue}</div>;
}

export default ComponentContext2;
