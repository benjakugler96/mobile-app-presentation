import React from 'react';
import googleBadge from '../../assets/images/googleBadge.png';
import appleBadge from '../../assets/images/appleBadge.png';
import { StyledHomeTextInfo } from './HomeTextInfo.styled';

const HomeTextInfo = () => (
	<StyledHomeTextInfo className='home-info-container flex'>
		<div>
			<div className='home-title'>
				<span className='gradient'>Qaabel</span> helps you
			</div>
			<div className='home-title'> meet new people on the go.</div>
			<div className='home-secondary-title'>
				It's locations based, quick, simple and free.
			</div>
			<div className='home-meet'>Meet now.</div>
		</div>
		<section className='home-badges flex'>
			<img src={googleBadge} alt='google download' />
			<img src={appleBadge} alt='apple download' />
		</section>
	</StyledHomeTextInfo>
);

export default HomeTextInfo;
