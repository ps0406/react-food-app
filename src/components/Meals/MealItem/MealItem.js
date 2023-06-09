import classes from "./MealItem.module.css"

export default (props) => {
const price = props.price ? `$${props.price?.toFixed(2)}` : '$0' ;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>

      </div>
    </li>
  );
};
