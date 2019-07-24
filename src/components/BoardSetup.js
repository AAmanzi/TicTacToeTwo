import React, { Component } from "react";
import { connect } from "react-redux";
import { setBoard } from "../redux/modules/board";

class BoardSetup extends Component {
  constructor() {
    super();
    
    this.state = {
      boardSize: 3
    };
  }

  handleInputChange = event => {
    this.setState({ boardSize: event.target.value });
  };

  handleSetBoard = () => {
    this.props.setBoard(this.state.boardSize);
  };

  render() {
    return (
      <div>
        <input
          type="number"
          min="3"
          max="6"
          onChange={this.handleInputChange}
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
