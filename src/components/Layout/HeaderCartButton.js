import classes from "./HeaderCartButton.module.css";
import logo from "../../assets/svg/cart-icon.svg";

export default () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <img src={logo} alt="cart-logo"></img>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
