import React from 'react';
import Clients from '../components/Clients/Clients';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import { Heading } from '../globalStyles';
import { heroOne } from '../data/HeroData';
heroTwo, heroThree, heroFour
const HomePages = () => {
	return (
		<>
		
		    <Hero/>
			<Features/>
			<Clients/>
			<Heading id="projects">Our Projects</Heading>
		    <Content {...heroOne} />
		</>
	);
};

export default HomePages;