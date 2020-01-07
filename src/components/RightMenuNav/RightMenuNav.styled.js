import styled from 'styled-components';

export const StyledRightMenuNav = styled.nav`
	ul {
		list-style: none;
		padding: 0;

		li {
			cursor: pointer;
			margin-top: 54px;
			padding: 0;

			@media (max-width: ${({ theme }) => theme.tablet}) {
				align-items: center;
				border-bottom: 1px solid #cbcbcb;
				display: flex;
				height: 73px;
				justify-content: center;
				margin-top: 0;
			}

			a {
				color: ${({ theme }) => theme.dark00};
				font-size: 36px;
				line-height: 42px;
				text-decoration: none;

				@media (max-width: ${({ theme }) => theme.tablet}) {
					font-size: 1.5rem;
					text-align: center;
					margin: 0 auto;
				}
			}
			a:hover {
				background: linear-gradient(150.35deg, #009fe9 15.81%, #ff3df4 87.73%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}
	}
`;
