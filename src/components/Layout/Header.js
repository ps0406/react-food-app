import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/img/banner.jpg";

export default () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="banner"></img>
      </div>
    </>
  );
};
