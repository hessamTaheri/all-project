import CompA from "./context/CompA";
import CountProvider from "./Components/CountProvider";

function Rreducer() {


  return (
    <>
        <CountProvider>
          <CompA />
        </CountProvider>
    </>
  );
}
export default Rreducer;
