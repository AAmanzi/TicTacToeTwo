import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { handleTurn } from "../redux/modules/game";
import { TILE_SIZE } from "../constants";

class Tile extends Component {
  handleClick = () => {
    if (this.props.label === "" && this.props.winner === null) {
      this.props.handleTurn(this.props.index);
    }
  };

  render() {
    const { boardSize, index, label } = this.props;

    const Span = styled.span`
      border: 1px solid #fff0ee;
      border-top: ${index < boardSize ? "none" : ""};
      border-bottom: ${index >= boardSize * (boardSize - 1) ? "none" : ""};
      border-left: ${index % boardSize === 0 ? "none" : ""};
      border-right: ${index % boardSize === boardSize - 1 ? "none" : ""};
      width: ${TILE_SIZE}px;
      height: ${TILE_SIZE}px;
      display: flex;
      justify-content: center;
      align-items: center;
    `;

    const Label = styled.span`
      color: ${label === "O" ? "#e49001" : "#fb5a4a"} ;
      font-size: 36px;
    `;

    return (
      <Span onClick={this.handleClick}>
        <Label>{label}</Label>
      </Span>
    );
  }
}

Tile.propTypes = {
  index: PropTypes.number,
  label: PropTypes.string
};

const mapStateToProps = state => {
  return {
    winner: state.game.winner,
    boardSize: state.game.boardSize
  };
};

const mapDispatchToProps = {
  handleTurn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tile);
