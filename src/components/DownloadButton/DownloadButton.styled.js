import styled from 'styled-components';

export const StyledDownloadButton = styled.div`
	align-items: center;
	background: ${({ theme }) => theme.gradient};
	border-radius: 26px;
	color: ${({ theme }) => theme.light00};
	display: flex;
	font-size: 22px;
	height: 52px;
	justify-content: center;
	line-height: 24px;
	width: 224px;
`;
