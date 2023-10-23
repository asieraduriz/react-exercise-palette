import classNames from "classnames";
import { useToggle } from "../../hooks";
import "./styles.css";

export const Fade = ({ answer }) => {
  const { isToggled, toggle } = useToggle();
  return (
    <div className="fade-card" onClick={toggle}>
      <div className={classNames("fade-card-material", { faded: isToggled })}>
        {isToggled ? (
          <div className="fade-card-answer">
            <span>{answer}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};
