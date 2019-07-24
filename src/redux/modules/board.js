import * as utils from "../../utils";

// action types
const SET_BOARD = "SET_BOARD";
const HANDLE_TURN = "HANDLE_TURN";
const NEXT_PLAYER = "NEXT_PLAYER";

// initial state
const initialState = {
  board: [],
  boardSize: 0,
  currentPlayer: utils.getFirstPlayer()
};

// action creators
export const setBoard = boardSize => dispatch => {
  if (boardSize < 3 || boardSize > 6) {
    return;
  }

  return dispatch({
    type: SET_BOARD,
    payload: utils.handleSetBoard(boardSize)
  });
};

export const handleTurn = tileIndex => dispatch => {
  dispatch({
    type: HANDLE_TURN,
    payload: tileIndex
  });

  return dispatch({
    type: NEXT_PLAYER
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
    case HANDLE_TURN:
      return {
        ...state,
        board: utils.handleTurn(
          state.board,
          state.currentPlayer,
          action.payload
        )
      };
    case NEXT_PLAYER:
      return {
        ...state,
        currentPlayer: utils.getNextPlayer(state.currentPlayer)
      };
    default:
      return state;
  }
};

export default reducer;
