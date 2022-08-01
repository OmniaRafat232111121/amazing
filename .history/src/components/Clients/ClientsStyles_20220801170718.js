import React from 'react';
import { Container } from '../../globalStyles';
import {
	ClientSection,
	ClientColumn,
	ClientText,
	ClientTitle,
	ClientRow,
	ClientWrapper,
	ClientImage,
	ClientTextWrapper,
} from './ClientsStyles';
import { clientsData } from '../../data/ClientsData';
const Clients=()=>{
    return(
<ClientSection id="clients">
<Container>
<ClientTextWrapper>
<ClientTitle>Our Clients</ClientTitle>
<ClientText>We’ve been working with the teams around the world.</ClientText>
</ClientTextWrapper>
<ClientRow>
{cli}
</ClientRow>
</Container>
</ClientSection>
    );
};
export default Clients;