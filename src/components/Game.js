import React from "react";
import { connect } from "react-redux";

import Board from "./Board";

const Game = props => {
  return (
    <div className="game__container">
      <Board />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state.board
  };
};

export default connect(
  mapStateToProps
)(Game);
