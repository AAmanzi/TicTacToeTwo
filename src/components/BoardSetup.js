import React, { Component } from "react";
import { connect } from "react-redux";
import { setBoard } from "../redux/modules/board";
import { KEY_ENTER, DEFAULT_BOARD_SIZE } from "../constants";

class BoardSetup extends Component {
  constructor() {
    super();

    this.state = {
      boardSize: DEFAULT_BOARD_SIZE
    };
  }

  handleInputChange = event => {
    this.setState({ boardSize: event.target.value });
  };

  setBoardIfEnter = event => {
    if (event.key === KEY_ENTER) {
      this.handleSetBoard();
    }
  };

  handleSetBoard = () => {
    this.props.setBoard(this.state.boardSize);
  };

  render() {
    return (
      <div>
        <input
          autoFocus
          type="number"
          min="3"
          max="6"
          onChange={this.handleInputChange}
          onKeyPress={this.setBoardIfEnter}
          value={this.state.boardSize}
        />
        <button onClick={this.handleSetBoard}>Start</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setBoard
};

export default connect(
  null,
  mapDispatchToProps
)(BoardSetup);
