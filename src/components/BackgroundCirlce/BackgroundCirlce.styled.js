import styled from 'styled-components';

export const StyledCircle = styled.div`
	background-color: ${({ color }) => color};
	${({ size }) => `
    height: ${size}px;
    width: ${size}px;
    border-radius: ${size * 2}px;
  `}
	position: absolute;
	right: ${({ right }) => right};
	top: ${({ top }) => top};
	z-index: -10;
	opacity: 0.5;

	@media screen and (min-width: 792px) {
		height: 0;
		width: 0;
	}
`;
