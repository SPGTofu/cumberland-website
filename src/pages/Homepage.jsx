import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/navbar/Navbar';

const Homepage = () => {
    return (
        <Flex 
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
                <h1>Homepage</h1>
            </Box>
        </Flex>
    );
}
 
export default Homepage;