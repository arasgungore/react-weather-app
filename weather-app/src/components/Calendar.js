import React from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
`;

const Calendar = ({ date }) => {
  return (
    <CalendarContainer>
      <h2>Calendar</h2>
      <p>Date: {date}</p>
    </CalendarContainer>
  );
};

export default Calendar;
