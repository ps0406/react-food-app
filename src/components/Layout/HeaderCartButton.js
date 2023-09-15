import classes from "./HeaderCartButton.module.css";
import logo from "../../assets/svg/cart-icon.svg";

export default (props) => {
 
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <img src={logo} alt="cart-logo"></img>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
