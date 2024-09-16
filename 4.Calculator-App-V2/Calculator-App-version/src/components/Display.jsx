import css from "./Display.module.css";
const Display = ({ displayval }) => {
  return (
    <input type="text" className={css.display} value={displayval} readOnly />
  );
};
export default Display;
