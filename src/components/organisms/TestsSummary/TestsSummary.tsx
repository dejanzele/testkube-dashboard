import React from 'react';
import styled from 'styled-components';

import {TestsList, TestDescription} from '@molecules';

const StyledTestList = styled.td`
  min-width: 55%;
  max-width: 55%;
  overflow: hidden;
  overflow-y: scroll;
  border-right: 1px solid var(--color-gray-secondary);
  flex-grow: 1;
  border-top-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
`;

const StyledTestDescription = styled.td`
  display: flex;
  border: hidden;
  flex-grow: 4;
  min-width: 45%;
  max-width: 45%;
  border-right-style: hidden;
`;

const TestsSummary = () => {
  return (
    <>
      <StyledTestList>
        <TestsList />
      </StyledTestList>
      <StyledTestDescription>
        <TestDescription />
      </StyledTestDescription>
    </>
  );
};

export default TestsSummary;
