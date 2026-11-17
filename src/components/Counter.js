import { inc, dec, rnd } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(dec())} className="btn btn-danger">
        DEC
      </button>
      <button onClick={() => dispatch(inc())} className="btn btn-primary">
        INC
      </button>
      <button
        onClick={() => dispatch(rnd(Math.floor(Math.random() * 10)))}
        className="btn btn-warning"
      >
        RND
      </button>
    </div>
  );
};

export default Counter;
