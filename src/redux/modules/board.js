import * as utils from "../../utils";

// action types
const SET_BOARD = "SET_BOARD";

// initial state
const initialState = {
  board: [],
  boardSize: 0
};

// action creators
export const setBoard = boardSize => dispatch => {
  // TODO: boardSize > 2 && boardSize < 7

  return dispatch({
    type: SET_BOARD,
    payload: utils.handleSetBoard(boardSize)
  });
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARD:
      return {
        ...state,
        board: action.payload.board,
        boardSize: action.payload.boardSize
      };
    default:
      return state;
  }
};

export default reducer;
