import styles from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ children, onClick, type }) {
  return (
    <div className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
};
export default Button;
