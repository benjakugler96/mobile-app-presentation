import styled from 'styled-components';

export const StyledHomeTextInfo = styled.div`
	.home-badges {
		justify-content: space-around;
	}

	.flex {
		display: flex;
	}

	.gradient {
		background: linear-gradient(150.35deg, #009fe9 15.81%, #ff3df4 87.73%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.home-meet,
	.home-secondary-title {
		font-size: 35px;
		line-height: 38px;
	}
	.home-secondary-title {
		margin-top: 32px;
	}
	.home-meet {
		color: #1996f4;
	}

	.home-title {
		font-weight: bold;
		font-size: 53px;
		font-style: normal;
		line-height: 57px;
	}

	@media screen and (max-width: 792px) {
		.home-container {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.home-info-container {
			width: 70%;
			text-align: center;
		}

		.home-title {
			font-size: 30px;
			line-height: 32px;
		}

		.home-meet,
		.home-secondary-title {
			font-size: 18px;
			line-height: 19px;
		}

		.home-badges {
			flex-direction: column;
			align-items: center;
			padding-bottom: 3rem;
		}
		.home-badges img {
			padding-top: 2rem;
		}
	}
`;
