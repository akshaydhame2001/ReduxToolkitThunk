import type { AppDispatch, RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementAsync,
  decrementAsync,
  incrementByAmount,
} from "../store/counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1 style={{ "textAlign": "center" }}>Count: {count}</h1>
      <button onClick={() => dispatch(decrementAsync())}>
        Decrement in 1s
      </button>
      <button onClick={() => dispatch(incrementAsync())}>
        Increment in 1s
      </button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
}
