import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Counter extends Component {
  render() {
    const { counter, inc, dec, rnd } = this.props;
    return (
      <div className="jumbotron">
        <h1>{counter}</h1>
        <button onClick={dec} className="btn btn-danger">
          DEC
        </button>
        <button onClick={inc} className="btn btn-primary">
          INC
        </button>
        <button
          onClick={() => rnd(Math.floor(Math.random() * 10))}
          className="btn btn-warning"
        >
          RND
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.value,
  };
};

export default connect(mapStateToProps, actions)(Counter);
