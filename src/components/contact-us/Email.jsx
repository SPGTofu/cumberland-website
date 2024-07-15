import React from "react";
import email from "../../assets/email.png";
import { Box, Image, Heading, Link } from "@chakra-ui/react";
const Email = () => {
    return (  
        <Box 
            w = '2xs'
            h = 'sm'
            display = 'flex'
            flexDirection= 'column'
            justifyContent = 'top'
            alignItems = 'center'
        >
            <Image 
                src = {email}
                alt = 'email'
                w = '30%'
                h = '20%'
            />
            <Heading 
                size = 'sm'
                p = '12%'
                pb = '6%'
            >
                Email
            </Heading>
            <Link href = 'mailto:hesedpark1967@gmail.com'>
                hesedpark1967@gmail.com
            </Link>
        </Box>
    );
}
 
export default Email;