import classNames from "classnames";
import PropTypes from "prop-types";
import { useToggle } from "../../hooks";
import "./styles.css";

export const Flip = ({ answer }) => {
  const { isToggled, toggle } = useToggle();

  const className = classNames("flip-card-inner", {
    "flip-card-inner-reveal": isToggled,
  });

  return (
    <div className="flip-card">
      <div className={className} onClick={toggle}>
        <div className="flip-card-front"></div>
        <div className="flip-card-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

Flip.propTypes = {
  answer: PropTypes.string,
};

Flip.defaultProps = {
  answer: "",
};
