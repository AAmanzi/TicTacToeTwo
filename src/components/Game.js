import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Board from "./Board";
import GameEndDisplay from "./GameEndDisplay";
import GameInfo from "./GameInfo";
import { setBoard } from "../redux/modules/game";
import { DEFAULT_BOARD_SIZE } from "../constants";
import BoardOptions from "./BoardOptions";

class Game extends Component {
  constructor() {
    super();

    this.state = {
      isOptionsDisplayed: false
    };
  }

  componentDidMount = () => {
    this.props.setBoard(DEFAULT_BOARD_SIZE);
  };

  toggleOptions = () => {
    this.setState(prevState => {
      return {
        isOptionsDisplayed: !prevState.isOptionsDisplayed
      };
    });
  };

  render() {
    const { winner, board, boardSize } = this.props;

    const GameContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
    `;

    const Button = styled.button`
      font-weight: bolder;
      color: #376d66;
      background-color: transparent;
      border: none;
      cursor: pointer;
      margin: 5px;
      padding: 5px;
    `;

    const ButtonAlt = styled(Button)`
      color: #00000091;
    `;

    const Options = styled.ul`
      position: relative;
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 0;
    `;

    return (
      <GameContainer>
        <GameInfo />
        <Board />
        <Button onClick={() => this.props.setBoard(boardSize)}>
          RESTART GAME
        </Button>
        <ButtonAlt onClick={this.toggleOptions}>
          CHANGE BOARD SIZE &#11206;
        </ButtonAlt>
        {this.state.isOptionsDisplayed ? (
          <BoardOptions style={Options} onInputChange={this.toggleOptions} />
        ) : (
          undefined
        )}
        {(winner !== null || !board.includes("")) && board.length !== 0 ? (
          <GameEndDisplay winner={winner} />
        ) : (
          undefined
        )}
      </GameContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    winner: state.game.winner,
    board: state.game.board,
    boardSize: state.game.boardSize
  };
};

const mapDispatchToProps = {
  setBoard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
