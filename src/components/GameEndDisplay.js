import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import { PLAYER_X, PLAYER_O } from "../constants";
import { setBoard } from "../redux/modules/game";

const GameEndDisplay = props => {
  const EndDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Span = styled.span`
    font-size: 48px;
    font-weight: bolder;
    margin: 5px;
    padding: 5px;
    color: #fb5a4a;
  `;

  return (
    <EndDisplay>
      {props.winner !== null ? (
        <Span>{props.winner === 0 ? PLAYER_O : PLAYER_X} HAS WON!</Span>
      ) : (
        <Span>DRAW!</Span>
      )}
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
