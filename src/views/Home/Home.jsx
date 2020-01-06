import React from "react";
import "./Home.css";
import qaabelApp from "../../assets/images/mobilePhone.png";
import googleBadge from "../../assets/images/googleBadge.png";
import appleBadge from "../../assets/images/appleBadge.png";

const Home = () => {
  return (
    <section className='home-container flex'>
      <div className='home-info-container flex'>
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
      </div>
      <div className='home-img-container'>
        <img src={qaabelApp} alt='qaabel app' />
      </div>
    </section>
  );
};

export default Home;
