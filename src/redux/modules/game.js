import * as utils from "../../utils";

// action types
const SET_BOARD = "SET_BOARD";
const HANDLE_TURN = "HANDLE_TURN";
const NEXT_PLAYER = "NEXT_PLAYER";
const GET_WINNER = "GET_WINNER";
const UPDATE_SCORE = "UPDATE_SCORE";
const UPDATE_PLAYER_TILE_COUNT = "UPDATE_PLAYER_TILE_COUNT";
const GENERATE_PLAYER_TILE_COUNT = "GENERATE_PLAYER_TILE_COUNT";

// initial state
const initialState = {
  board: [],
  boardSize: 0,
  currentPlayer: utils.getFirstPlayer(),
  winner: null,
  playerTileCount: null,
  score: {
    o: 0,
    x: 0,
    draw: 0
  }
};

// action creators
export const setBoard = boardSize => dispatch => {
  if ((boardSize < 3 || boardSize > 6) && boardSize !== 0) {
    return;
  }

  dispatch({
    type: SET_BOARD,
    payload: utils.handleSetBoard(boardSize)
  });

  return dispatch({
    type: GENERATE_PLAYER_TILE_COUNT
  });
};

export const handleTurn = tileIndex => dispatch => {
  dispatch({
    type: HANDLE_TURN,
    payload: tileIndex
  });

  dispatch({
    type: UPDATE_PLAYER_TILE_COUNT,
    payload: tileIndex
  });

  dispatch({
    type: GET_WINNER
  });

  dispatch({
    type: UPDATE_SCORE
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
        boardSize: parseInt(action.payload.boardSize),
        winner: null
      };
    case GENERATE_PLAYER_TILE_COUNT:
      return {
        ...state,
        playerTileCount: utils.generatePlayerTileCount(state.boardSize)
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
    case UPDATE_PLAYER_TILE_COUNT:
      return {
        ...state,
        playerTileCount: utils.getNewPlayerTileCount(
          state.boardSize,
          state.playerTileCount,
          state.currentPlayer,
          action.payload
        )
      };
    case GET_WINNER:
      return {
        ...state,
        winner: utils.isWinner(
          state.playerTileCount[state.currentPlayer],
          state.boardSize
        )
          ? state.currentPlayer
          : null
      };
    case UPDATE_SCORE:
      return {
        ...state,
        score: utils.updateScore(state.winner, state.board, state.score)
      };
    default:
      return state;
  }
};

export default reducer;
