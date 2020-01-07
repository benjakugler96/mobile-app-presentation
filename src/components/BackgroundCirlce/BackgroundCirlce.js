import React from 'react';
import { StyledCircle } from './BackgroundCirlce.styled.js';

const BackgroundCirlce = ({ color, size, right, top }) => (
	<StyledCircle color={color} size={size} right={right} top={top} />
);

export default BackgroundCirlce;
