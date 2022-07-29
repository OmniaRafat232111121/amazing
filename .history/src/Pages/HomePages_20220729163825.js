import React from 'react';

import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroThree, heroFour } from '../data/HeroData';
import { Heading } from '../globalStyles';

const HomePages = () => {
	return (
		<>
			<Hero />
			// <Features />
			// <Clients />
			// <Heading id="projects">Our Projects</Heading>
			// <Content {...heroOne} />
			// <Content {...heroTwo} />
			// <Content {...heroThree} />
			// <Content {...heroFour} />
		</>
	);
};

export default HomePages;