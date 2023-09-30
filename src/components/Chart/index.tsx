import React from "react";
import { VictoryPie } from "victory";
import { Container, SubtitleContainer } from "./styles";

const subtitlesLabel = [
  { color: "tomato", label: "A pagar" },
  { color: "orange", label: "A receber" },
];

const Chart = ({
  receiptValue,
  debitValue,
}: {
  receiptValue: number;
  debitValue: number;
}) => (
  <Container>
    <VictoryPie
      data={[
        { x: "A pagar", y: debitValue },
        { x: "A receber", y: receiptValue },
      ]}
      style={{ labels: { display: "none" }, parent: { width: 520 } }}
      innerRadius={100}
      colorScale={["tomato", "orange"]}
      padAngle={5}
    />
    {subtitlesLabel.map((subtitle) => (
      <SubtitleContainer key={subtitle.color} color={subtitle.color}>
        <div />
        {subtitle.label}
      </SubtitleContainer>
    ))}
  </Container>
);

export default Chart;
