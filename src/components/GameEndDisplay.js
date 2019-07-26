import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { PLAYER_X, PLAYER_O } from "../constants";
import { setBoard } from "../redux/modules/game";

const GameEndDisplay = props => {
  return (
    <div>
      <span>{props.winner === 0 ? PLAYER_O : PLAYER_X} has won!</span>
      <button onClick={() => props.setBoard(props.boardSize)}>
        Play again
      </button>
      <button onClick={() => props.setBoard(0)}>Change board size</button>
    </div>
  );
};

GameEndDisplay.propTypes = {
  winner: PropTypes.number
};

const mapStateToProps = state => {
  return {
    boardSize: state.game.boardSize
  };
};

const mapDispatchToProps = {
  setBoard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameEndDisplay);
