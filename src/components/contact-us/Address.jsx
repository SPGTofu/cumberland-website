import React from "react";
import location from "../../assets/location.png";
import { Box, Image, Heading, Link } from "@chakra-ui/react";

const Address = () => {
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
                src = {location}
                alt = 'location'
                w = '30%'
                h = '20%'
            />
            <Heading 
                size = 'sm'
                pt = '12%'
                pb = '6%'
            >
                Address
            </Heading>
            <Link
                href = 'https://www.google.com/maps/place/%EC%BB%B4%EB%B2%8C%EB%9E%9C%EB%93%9C+%ED%95%9C%EC%9D%B8+%EC%9E%A5%EB%A1%9C+%EA%B5%90%ED%9A%8C+Korean+Cumberland+Presbyterian+Church/@37.1367543,-93.2648885,17z/data=!3m1!4b1!4m6!3m5!1s0x87cf650bd56bc4b5:0xf6a64dc41e36a3bc!8m2!3d37.1367501!4d-93.2623136!16s%2Fg%2F11t82pf2jh?entry=ttu'
                isExternal
            >
                4216 S Charleston Ave
                <br />
                Springfield, MO 65804
            </Link>
        </Box>
    );
}

export default Address;