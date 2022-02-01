import { useContext } from "react";
import CountContext from "../Components/CountContext";

const CompB = () => {
  const countContext = useContext(CountContext);
  return (
    <>
    <p>comp b{countContext.countState}</p>
    <button onClick={() => countContext.countDispatch("increment")}>comp b Increment</button>
    <button onClick={() => countContext.countDispatch("decrement")}>comp b Decrement</button>
    <button onClick={() => countContext.countDispatch("reset")}>comp b Reset</button>
  </>
  );
};
export default CompB;
