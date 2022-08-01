import { useReducer } from "react";
import styles from "./styles.module.css";

const actions = {
  increase: "increase",
  reset: "reset",
  decrease: "decrease",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.increase:
      return {
        count: state.count + 1,
        color: state.count == 0 ? "cyan" : state.count > 0 ? "#39FF14" : "red",
      };
    case actions.reset:
      return {
        count: 0,
        color: "cyan",
      };
    case actions.decrease:
      return {
        count: state.count - 1,
        color: state.count == 0 ? "cyan" : state.count > 0 ? "#39FF14" : "red",
      };
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, color: "cyan" });
  return (
    <div className={styles.counterContainer}>
      <p className={styles.counterHeading}>
        Current Count is :
        <span style={{ color: state.color }}>{state.count}</span>
      </p>
      <div>
        <button
          className={`${styles.button} ${styles.green}`}
          onClick={() => {
            dispatch({ type: actions.increase });
          }}
        >
          Increase
        </button>
        <button
          className={`${styles.button} ${styles.cyan}`}
          onClick={() => {
            dispatch({ type: actions.reset });
          }}
        >
          Reset
        </button>
        <button
          className={`${styles.button} ${styles.red}`}
          onClick={() => {
            dispatch({ type: actions.decrease });
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
