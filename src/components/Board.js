import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
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
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #376d66;
    `;

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
