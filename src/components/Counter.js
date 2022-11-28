import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const countShow = useSelector( (state) => state.showCount);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };
  const counterIncrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const counterDecrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const counterIncreaseFromHandler = () => {
    dispatch({type: "increaseFrom", amount: 5});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { countShow && <div className={classes.value}>{count}</div>}
      <div>
      <button onClick={counterIncrementHandler}>+</button>
      <button onClick={counterDecrementHandler}>-</button>
      <button onClick={counterIncreaseFromHandler}>+5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
