import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from '../components/navbar/Navbar';

const AboutUs = () => {
    return (  
        <Flex 
            h = '100vh'
            w = '100vw'
            flexDirection = 'column'
            bg = 'green.500'
        >
            <Box 
                w = '100%'
            >
                <Navbar />
            </Box>
            <Box 
                flex = '1'
                bg = 'red.500'
            >
                <h1>Who We Are</h1>
            </Box>
        </Flex>
    );
}
 
export default AboutUs;