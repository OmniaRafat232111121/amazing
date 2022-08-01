import React, { useEffect } from 'react';
import { Container } from '../../globalStyles';
import {
	ContentSec,
	ContentRow,
	TextWrapper,
	TopLine,
	Heading,
	ContentButton,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
    ClientTextWrapper ,
    ClientTitle
} from './ContentStyles';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Tilt from 'react-tilt';
const Content = ({
	primary,
	topLine,
	headline,
	description,
	buttonLabel,
	img,
	alt,
	start,
	bottomImg,
	backgroundColor,
	linkTo,
	inverse,
	reverse,
	bigImage,
	id,
}) => {
	const initial = { opacity: 0, y: 30 };
	const transition = { delay: 0.3, duration: 0.6 };
	const animation = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.5,
	});

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);

	return (
		<ContentSec ref={ref}>
    
			<Container>
          
				<ContentRow reverse={reverse}>
					<ContentColumn>
						
					</ContentColumn>
					<ContentColumn
						initial={initial}
						transition={transition}
						animate={animation}
						bigImage={bigImage}
					>


                    <Tilt className="Tilt" options={{ max: 20, scale: 1.01, speed: 200 }}>
							<ImgWrapper backgroundColor={backgroundColor}>
								<Img
									src={img}
									alt={alt}
									whileHover={{ scale: 1.1 }}
									transition={{ duration: 0.5 }}
								/>
							</ImgWrapper>
						</Tilt>

					</ContentColumn>
				</ContentRow>
			</Container>
		</ContentSec>
	);
};

export default Content;