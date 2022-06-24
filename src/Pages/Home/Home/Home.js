import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import RecommendedMenu from '../../RecommendedMenu/RecommendedMenu';
import Header from '../../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeroSection></HeroSection>
            <RecommendedMenu></RecommendedMenu>
        </div>
    );
};

export default Home;