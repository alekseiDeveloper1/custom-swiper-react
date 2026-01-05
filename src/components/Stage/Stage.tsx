import styled from "styled-components";
import React, {Ref, useEffect, useRef} from "react";
import CountUp from 'react-countup';
import type {Swiper as SwiperInstance} from "swiper";
import {usePrevious} from "@/hooks/usePrevious";

const StageTitleWrap = styled.div`
  text-align: center;
  margin-top: 100px;
`
const FirstStageTitle = styled.span`
  color: #5D5FEF;
  font-size: 12rem;
  font-weight: bold;
  margin-right: 50px;
`;
const SecondStageTitle = styled.span`
  color: #EF5DA8;
  font-size: 200px;
  font-weight: bold;
`;
interface StageProps {
  stage: string[]
}
export const Stage: React.FC<StageProps> = ({stage}) => {
  const [firstStage, secondStage] = stage;

  const prevFirstStage = usePrevious(firstStage)
  const prevSecondStage = usePrevious(secondStage)

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
  )
}