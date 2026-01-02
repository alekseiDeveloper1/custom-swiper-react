import styled from "styled-components";
import React from "react";
const StageTitleWrap = styled.div`
    text-align: center;
`
const FirstStageTitle = styled.span`
  color: #5D5FEF;
  font-size: 200px;
  margin-top: 20px;
  font-weight: bold;
`;
const SecondStageTitle = styled.span`
  color: #EF5DA8;
  font-size: 200px;
  margin-top: 20px;
  font-weight: bold;
`;
interface StageProps {
 stage: string[]
}
export const Stage: React.FC<StageProps> = ({stage}) => {
  const [firstStage, secondStage] = stage;
  return (
    <StageTitleWrap>
      <FirstStageTitle>{firstStage + " "}</FirstStageTitle>
      <SecondStageTitle>{secondStage}</SecondStageTitle>
    </StageTitleWrap>

  )
}