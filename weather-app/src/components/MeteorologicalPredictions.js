import React from 'react';
import styled from 'styled-components';

const PredictionsContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
`;

const MeteorologicalPredictions = ({ predictions }) => {
  return (
    <PredictionsContainer>
      <h2>Meteorological Predictions</h2>
      <p>{predictions}</p>
    </PredictionsContainer>
  );
};

export default MeteorologicalPredictions;
