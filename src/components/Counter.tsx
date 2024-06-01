import type { AppDispatch, RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { incrementAsync, decrementAsync } from "../store/counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1 style={{ "textAlign": "center" }}>Count: {count}</h1>
      <button onClick={() => dispatch(decrementAsync())}>Decrement</button>
      <button onClick={() => dispatch(incrementAsync())}>Increment</button>
    </div>
  );
}
