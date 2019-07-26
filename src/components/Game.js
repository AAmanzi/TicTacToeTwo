import React from "react";
import { connect } from "react-redux";

import Board from "./Board";
import GameEndDisplay from "./GameEndDisplay";

const Game = props => {
  const { winner } = props;
  return (
    <div className="game__container">
      <Board />
      {winner !== null ? <GameEndDisplay winner={winner} /> : undefined}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state.game
  };
};

export default connect(mapStateToProps)(Game);
