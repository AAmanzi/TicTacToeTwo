import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import { PLAYER_X, PLAYER_O } from "../constants";
import { setBoard } from "../redux/modules/game";

const GameEndDisplay = props => {
  const EndDisplay = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <EndDisplay>
      {props.winner !== null ? (
        <span>{props.winner === 0 ? PLAYER_O : PLAYER_X} has won!</span>
      ) : (
        <span>The game is a draw!</span>
      )}
      <button onClick={() => props.setBoard(props.boardSize)}>
        Play again
      </button>
      <button onClick={() => props.setBoard(0)}>Change board size</button>
    </EndDisplay>
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
