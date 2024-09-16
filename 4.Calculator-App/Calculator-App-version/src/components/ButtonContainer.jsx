import css from "./ButtonContainer.module.css";
const ButtonContainer = () => {
  const buttonnames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={css.buttoncontainer}>
      {buttonnames.map((b) => (
        <button className={css.button}>{b}</button>
      ))}
    </div>
  );
};
export default ButtonContainer;
