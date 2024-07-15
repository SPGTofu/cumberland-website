import React from "react";
import { Box, Flex } from '@chakra-ui/react';
import Navbar from "../components/navbar/Navbar";
import Online from "../components/service/Online";
import InPerson from "../components/service/InPerson";

const Service = () => {
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
                <Online />
                <InPerson />
            </Box>
        </Flex>
    );
}
 
export default Service;