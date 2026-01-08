import styled from "styled-components";
import React from "react";
import CountUp from 'react-countup';
import {usePrevious} from "@/hooks/usePrevious";

const StageTitleWrap = styled.div`
  text-align: center;
  font-size: 200px;
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-top: 20px;
    font-size: 10vw;
    margin-bottom: 50px;
  }
`;

const FirstStageTitle = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  margin-right: 50px;
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-right: 10px;
  }
`;

const SecondStageTitle = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: bold;
`;

interface StageProps {
  stage: string[]
}

export const Stage: React.FC<StageProps> = ({stage}) => {
  const [firstStage, secondStage] = stage;

  const prevFirstStage = usePrevious(firstStage);
  const prevSecondStage = usePrevious(secondStage);

  const startFirst = prevFirstStage ? parseInt(prevFirstStage, 10) : parseInt(firstStage, 10);
  const endFirst = parseInt(firstStage, 10);
  const startSecond = prevSecondStage ? parseInt(prevSecondStage, 10) : parseInt(secondStage, 10);
  const endSecond = parseInt(secondStage, 10);

  return (
    <StageTitleWrap>
      <FirstStageTitle>
        <CountUp
          start={startFirst}
          end={endFirst}
          duration={1}
          useEasing={true}
          formattingFn={(val) => val < 10 ? `0${val}`: `${val}`}
        />
      </FirstStageTitle>
      <SecondStageTitle>
        <CountUp
          start={startSecond}
          end={endSecond}
          duration={1}
          useEasing={true}
          formattingFn={(val) => val < 10 ? `0${val}`: `${val}`}
        />
      </SecondStageTitle>
    </StageTitleWrap>
  );
};