import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import CountUp from 'react-countup';

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

  const prevFirstStageRef = useRef<string>();
  const prevSecondStageRef = useRef<string>();

  useEffect(() => {
    prevFirstStageRef.current = firstStage;
    prevSecondStageRef.current = secondStage;
  });

  const prevFirstStage = prevFirstStageRef.current;
  const prevSecondStage = prevSecondStageRef.current;

  const startFirst = prevFirstStage ? parseInt(prevFirstStage, 10) : parseInt(firstStage, 10);
  const endFirst = parseInt(firstStage, 10);

  const startSecond = prevSecondStage ? parseInt(prevSecondStage, 10) : parseInt(secondStage, 10);
  const endSecond = parseInt(secondStage, 10);

  return (
    <StageTitleWrap>
      <FirstStageTitle>
        <CountUp start={startFirst} end={endFirst} duration={1} useEasing={true} />
      </FirstStageTitle>
      <SecondStageTitle>
        <CountUp start={startSecond} end={endSecond} duration={1} useEasing={true} formattingFn={(val) => val < 10 ? `0${val}`: `${val}`} />
      </SecondStageTitle>
    </StageTitleWrap>
  )
}