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
    const Span = styled.span`
      border: 1px solid #412e38;
      width: ${TILE_SIZE}px;
      height: ${TILE_SIZE}px;
    `;

    return <Span onClick={this.handleClick}>{this.props.label}</Span>;
  }
}

Tile.propTypes = {
  index: PropTypes.number,
  label: PropTypes.string
};

const mapStateToProps = state => {
  return {
    winner: state.game.winner
  };
};

const mapDispatchToProps = {
  handleTurn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tile);
