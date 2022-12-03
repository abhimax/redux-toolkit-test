import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const countShow = useSelector( (state) => state.counter.showCount);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  const counterIncrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const counterDecrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const counterIncreaseFromHandler = () => {
    dispatch(counterActions.increaseFrom(5));
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
