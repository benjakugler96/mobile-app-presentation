import styled from 'styled-components';

export const StyledBurger = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 2rem;
	height: 2rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 10;

	&:focus {
		outline: none;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		margin: 3px;
		background: ${({ theme, openMenu }) =>
			openMenu ? theme.light01 : theme.dark01};
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;

		:first-child {
			transform: ${({ openMenu }) =>
				openMenu ? 'rotate(45deg)' : 'rotate(0)'};
		}

		:nth-child(2) {
			opacity: ${({ openMenu }) => (openMenu ? '0' : '1')};
		}

		:nth-child(3) {
			transform: ${({ openMenu }) =>
				openMenu ? 'rotate(-45deg)' : 'rotate(0)'};
		}
	}
`;
