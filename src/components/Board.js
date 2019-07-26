import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import BoardSetup from "./BoardSetup";
import { TILE_SIZE } from "../constants";
import Tile from "./Tile";

class Board extends Component {
  render() {
    const { board, boardSize } = this.props;

    const TileContainer = styled.div`
      display: flex;
      flex-wrap: wrap;
      max-width: ${boardSize * TILE_SIZE}px;
    `;

    const BoardContainer = styled.div`
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
    `;

    if (boardSize === 0) {
      return <BoardSetup />;
    }

    return (
      <BoardContainer>
        <TileContainer>
          {board.map((el, index) => (
            <Tile key={index} index={index} label={el} />
          ))}
        </TileContainer>
      </BoardContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.game
  };
};

export default connect(mapStateToProps)(Board);
