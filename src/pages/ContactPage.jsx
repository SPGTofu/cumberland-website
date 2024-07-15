import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Navbar from '../components/navbar/Navbar';
import ContactContainer from '../components/contact-us/ContactContainer';
import MessageContainer from '../components/contact-us/MessageContainer';

const ContactPage = () => {
    return (  
        <Flex 
            h = '100svh'
            w = '100svw'
            flexDirection = 'column'
        >
            <Navbar />
            <Box 
                flex = '1'
            >
                <Box
                    w = '100%'
                    h = '50%'
                    bg = '#D8CFD0'
                >
                    <ContactContainer />
                </Box>

                <Box
                    w = '100%'
                    h = '60%'
                    bg = '#B0A6A4'
                    flex = '1'
                    justifyContent = 'center'
                    alignItems = 'center'
                >
                    <MessageContainer />
                </Box>
            </Box>
        </Flex>
    );
}
 
export default ContactPage;