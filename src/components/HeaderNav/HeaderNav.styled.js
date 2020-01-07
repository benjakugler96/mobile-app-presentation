import styled from 'styled-components';

export const HeaderStyledNav = styled.nav`
	width: 100vw;

	.active-route {
		color: ${({ theme }) => theme.blue01};
	}

	ul {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		list-style: none;
		margin: 0;

		@media (max-width: ${({ theme }) => theme.tablet}) {
			display: none;
		}

		li {
			margin-right: 54px;
			a {
        text-decoration: none;
        color: ${({ theme }) => theme.dark00}
        font-size: 22px;
        line-height: 24px;
			}
		}

		div {
			background: ${({ theme }) => theme.gradient};
			border-radius: 26px;
			height: 52px;
			width: 224px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;
