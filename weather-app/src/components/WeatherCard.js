import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
`;

const WeatherCard = ({ data }) => {
  const { name, main: { temp }, weather } = data;

  return (
    <Card>
      <h2>{name}</h2>
      <p>Temperature: {temp} °C</p>
      <p>Weather: {weather[0].description}</p>
    </Card>
  );
};

export default WeatherCard;
