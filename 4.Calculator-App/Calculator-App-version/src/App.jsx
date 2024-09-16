import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import css from "./App.module.css";

function App() {
  return (
    <>
      <h1>Calculator</h1>
      <div className={css.calculator}>
        <Display></Display>
        <ButtonContainer></ButtonContainer>
      </div>
    </>
  );
}

export default App;
