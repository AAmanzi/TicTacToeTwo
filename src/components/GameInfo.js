import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const GameInfo = props => {
  const { currentPlayer, boardSize, score } = props;

  const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const InfoItem = styled.span`
    background-color: #fffcff;
    padding: 8px 10px 5px 10px;
    border-radius: 12px;
    border-bottom: 3px solid #fffcff;
    box-shadow: 0px 4px 4px 0px rgba(204, 204, 204, 0.75);
    margin: 5px 10px;
    display: flex;
    justify-content: space-between;
    width: 130px;
  `;

  const ScoreO = styled(InfoItem)`
    border-color: ${boardSize !== 0 && currentPlayer === 0
      ? "#fb5a4a"
      : "#fffcff"};
  `;

  const ScoreX = styled(InfoItem)`
    border-color: ${boardSize !== 1 && currentPlayer === 1
      ? "#fb5a4a"
      : "#fffcff"};
  `;

  const Flex = styled.section`
    display: flex;
  `;

  return (
    <InfoContainer>
      <InfoItem>
        <span>Draw</span>
        <span>{score.draw === 0 ? "-" : score.draw}</span>
      </InfoItem>

      <Flex>
        <ScoreO>
          <span>O</span>
          <span>{score.o === 0 ? "-" : score.o}</span>
        </ScoreO>
        <ScoreX>
          <span>X</span>
          <span>{score.x === 0 ? "-" : score.x}</span>
        </ScoreX>
      </Flex>
    </InfoContainer>
  );
};

const mapStateToProps = state => {
  return {
    currentPlayer: state.game.currentPlayer,
    boardSize: state.game.boardSize,
    score: state.game.score
  };
};

export default connect(mapStateToProps)(GameInfo);
