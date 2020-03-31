import React from 'react';
import PropTypes from 'prop-types';

import { StyledGrid, StyledGridContent } from '../styles/StyledGrid';

const Grid = ({ header, children }) => (
  <StyledGrid>
    <h1>{header}</h1>
    <StyledGridContent>{children}</StyledGridContent>
  </StyledGrid>
)



export default Grid;