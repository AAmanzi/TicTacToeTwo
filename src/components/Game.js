import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Board from "./Board";
import GameEndDisplay from "./GameEndDisplay";
import GameInfo from "./GameInfo";

const Game = props => {
  const { winner, board } = props;
  console.log(board);

  const GameContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  return (
    <GameContainer>
      <GameInfo />
      <Board />
      {(winner !== null || !board.includes("")) && board.length !== 0 ? (
        <GameEndDisplay winner={winner} />
      ) : (
        undefined
      )}
    </GameContainer>
  );
};

const mapStateToProps = state => {
  return {
    winner: state.game.winner,
    board: state.game.board
  };
};

export default connect(mapStateToProps)(Game);
