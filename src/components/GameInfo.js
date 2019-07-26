import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { PLAYER_X, PLAYER_O } from "../constants";

const GameInfo = props => {
  const { currentPlayer, boardSize, score } = props;

  const InfoContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
  `;

  return (
    <InfoContainer>
      {boardSize !== 0 ? (
        <span>Current player: {currentPlayer === 0 ? PLAYER_O : PLAYER_X}</span>
      ) : (
        undefined
      )}
      <span>{score.o} O rounds won</span>
      <span>{score.x} X rounds won</span>
      <span>{score.draw} rounds were draw</span>
    </InfoContainer>
  );
};

const mapStateToProps = state => {
  return {
    currentPlayer: state.game.currentPlayer,
    boardSize: state.game.boardSize,
    score: state.game.score
  };
};

export default connect(mapStateToProps)(GameInfo);
