import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import css from "./App.module.css";
import { useCallback, useState } from "react";

function App() {
  let [displayval, setdisplayval] = useState("");
  const onbuttonclick = (event) => {
    let data = event.target.innerText;
    if (data === "c") {
      setdisplayval("");
    } else if (data === "=") {
      const result = eval(displayval);
      setdisplayval(result);
    } else {
      const val = displayval + data;
      setdisplayval(val);
    }
  };

  return (
    <>
      <h1>Calculator</h1>
      <div className={css.calculator}>
        <Display displayval={displayval}></Display>
        <ButtonContainer onbuttonclick={onbuttonclick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
