import React, { useEffect, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import {HeroSection,Heading,HeroText,ButtonContainer,HeroButton,ImageCharacter,HeroImage,HeroContent,ButtonWrapper,CharacterContainer,
} from './HeroStyles';
import { useInView } from 'react-intersection-observer';


const Hero = () => {


	return (
		<>
			<HeroSection id="hero">
				<HeroImage className="pattern" src="./images/hero-pattern-bg-lg.png" />
				<HeroImage className="guy" src="./images/hero-guy-1.png" />
				<CharacterContainer>
					<ImageCharacter
						dragConstraints={dragConstraints}
						className="one"
						src="./images/image 1.png"
					/>
					<ImageCharacter
						dragConstraints={dragConstraints}
						className="two"
						src="./images/image 2.png"
					/>
					<ImageCharacter
						variants={variants}
						whileHover="hover"
						drag
						dragConstraints={dragConstraints}
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
					<ButtonContainer ref={ref}>
						<ButtonWrapper>
							<HeroButton onClick={toggleModal} className={inView ? '' : 'corner'}>
								{inView ? (
									<> Chat with us</>
								) : (
									<FiMail color="white" size="2.3rem" />
								)}
							</HeroButton>
						</ButtonWrapper>
					</ButtonContainer>
				</HeroContent>
			</HeroSection>
			
		</>
	);
};

export default Hero;