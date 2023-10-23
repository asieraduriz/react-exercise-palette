import classNames from "classnames";
import { useToggle } from "../../hooks";
import { Guesser } from "./Guesser";
import "./styles.css";

export const Guess = ({ answer }) => {
  const { isToggled, toggle } = useToggle();

  return (
    <div className="guess-card" onClick={toggle}>
      <div className={classNames("guess-card-material")} />
      <Guesser answer={answer} />
    </div>
  );
};
