import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { setBoard } from "../redux/modules/game";
import { KEY_ENTER } from "../constants";

class BoardOptions extends Component {
  handleInputChange = event => {
    this.props.setBoard(event.target.value);
    this.props.onInputChange();
  };

  handleSetBoard = () => {};

  render() {
    const List = this.props.style;

    const Label = styled.label`
      font-weight: bold;
      color: #00000091;
      text-align: center;
      width: 100%;
      border-bottom: 2px solid #00000091;
      transition: border 0.2s ease-out;
      margin: 4px;

      :hover {
        border-color: #fb5a4a;
      }
    `;

    const Input = styled.input`
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    `;

    return (
      <List>
        <Label>
          3 x 3
          <Input
            type="radio"
            name="BoardSize"
            onChange={this.handleInputChange}
            value={3}
          />
        </Label>
        <Label>
          4 x 4
          <Input
            type="radio"
            name="BoardSize"
            onChange={this.handleInputChange}
            value={4}
          />
        </Label>
        <Label>
          5 x 5
          <Input
            type="radio"
            name="BoardSize"
            onChange={this.handleInputChange}
            value={5}
          />
        </Label>
        <Label>
          6 x 6
          <Input
            type="radio"
            name="BoardSize"
            onChange={this.handleInputChange}
            value={6}
          />
        </Label>
      </List>
    );
  }
}

const mapDispatchToProps = {
  setBoard
};

export default connect(
  null,
  mapDispatchToProps
)(BoardOptions);
