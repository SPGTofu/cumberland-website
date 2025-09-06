import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import Phone from "./Phone";
import Address from "./Address";
import Email from "./Email";

const ContactContainer = () => {
    return (
        <Flex
            flexDirection = 'column'
            justifyContent = 'center'
            alignItems = 'center'
        >
            <Heading 
                size = 'lg'
                pb = '6%'
                pt = '8%'
            >
                Contact Us
            </Heading>
                    
            <Box 
                display = 'flex'
                justifyContent = 'center'
                alignItems = 'center'
                ml = '15%'
                mr = '15%'
                mt = '0px'
            >
                <Address />
                <Spacer 
                    w = '100px'
                />
                <Phone />
                <Spacer 
                    w = '100px'
                />
                <Email />
            </Box>
        </Flex>
    );
}
 
export default ContactContainer;