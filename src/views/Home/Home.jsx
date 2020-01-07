import React from 'react';
import './Home.css';
import qaabelApp from '../../assets/images/mobilePhone.png';
import { DownloadButton, HomeTextInfo } from '../../components';

const Home = () => {
	return (
		<section className='home-container flex'>
			<HomeTextInfo />
			<div className='home-img-container'>
				<img src={qaabelApp} alt='qaabel app' />
			</div>
			<div className='mobile-btn'>
				<DownloadButton />
			</div>
		</section>
	);
};

export default Home;
