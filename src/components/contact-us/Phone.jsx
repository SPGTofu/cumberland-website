import React from "react";
import { Box, Image, Heading, Link, Text } from "@chakra-ui/react";
import phone from "../../assets/phone.png";

const Phone = () => {
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
                src = {phone}
                alt = 'phone'
                w = '30%'
                h = '20%'
            />
            <Heading 
                size = 'sm'
                p = '12%'
                pb = '6%'
            >
                Phone
            </Heading>
            <Link href = 'tel:4177637740'>
                (417)763-7740
            </Link>
        </Box>
    );
}
 
export default Phone;