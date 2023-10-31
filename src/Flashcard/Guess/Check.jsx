import classNames from "classnames";
import { useGuesser, useGuesserDispatch } from "../../contexts/Guesser";

export const Check = () => {
  const { isGuessed, isGuessing } = useGuesser();

  const dispatch = useGuesserDispatch();
  return (
    <div className={classNames({ hide: isGuessed })}>
      <button onClick={() => dispatch({ type: "check" })} role="guessed-check">
        {isGuessing ? "Check" : "Retry"}
      </button>
    </div>
  );
};
