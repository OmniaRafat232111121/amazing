import React from 'react';
import Clients from '../components/Clients/Clients';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import { Heading } from '../globalStyles';


const HomePages = () => {
	return (
		<>
		
		    <Hero/>
			<Features/>
			<Clients/>
			<Heading id="projects">Our Projects</Heading>
		 
		</>
	);
};

export default HomePages;