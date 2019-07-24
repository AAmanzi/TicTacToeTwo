import React from "react";
import { connect } from "react-redux";

import BoardSetup from "./BoardSetup";

const Board = props => {
  const { board, boardSize } = props;

  if (boardSize === 0) {
    return <BoardSetup />;
  }

  return (
    <div>
      {board.map((el, index) => (
        <div key={index}>{el}</div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state.board
  };
};

export default connect(
  mapStateToProps,
  null
)(Board);
