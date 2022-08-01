import React from 'react';
import Clients from '../components/Clients/Clients';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import { Heading } from '../globalStyles';
import { heroOne,heroTwo, heroThree, heroFour } from '../data/HeroData';
import Content from '../components/Content/Content';
//
const HomePages = () => {
	return (
		<>
		
		    <Hero/>
			<Features/>
			<Clients/>
			<Heading id="projects">Our Projects</Heading>
		    <Content {...heroOne} />
			<Content {...hero} />
			<Content {...heroOne} />
		
		</>
	);
};

export default HomePages;