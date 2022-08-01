import React from 'react';
// import { FiMail } from 'react-icons/fi';
import {HeroSection,Heading,HeroText,HeroImage,HeroContent,CharacterContainer,ImageCharacter
} from './HeroStyles';
// import { useInView } from 'react-intersection-observer';


const Hero = () => {
	return (
		<>
			<HeroSection id="hero">
			<HeroImage className="pattern" src="./images/hero-pattern-bg-lg.png" />
			<HeroImage className="guy" src="./images/hero-guy-1.png" />
			<CharacterContainer>
			<ImageCharacter
				
				className="one"
				src="./images/image 1.png"
			/>
			<ImageCharacter
				
				className="two"
				src="./images/image 2.png"
			/>
			<ImageCharacter
				
				whileHover="hover"
				drag
				
				className="three"
				src="./images/image 3.png"
			/>
		</CharacterContainer>
			
			 <HeroContent>
					<Heading>We Are Designify</Heading>
					<HeroText>
						A team of passionate designer and developers ready to provide unique and
						outstanding products for you!
					</HeroText>
					
				</HeroContent>
			</HeroSection>
			
		</>
	);
};

export default Hero;