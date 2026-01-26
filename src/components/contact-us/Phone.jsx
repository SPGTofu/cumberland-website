import React from "react";
import { Image, Heading, Link, Flex } from "@chakra-ui/react";
import phone from "../../assets/phone.png";
import { translate } from "../languages/translations";

const Phone = () => {
    return (  
        <Flex sx={{ w: '2xs', h: 'sm', flexDirection: 'column', justifyContent: 'top', alignItems: 'center' }}>
            <Image sx={{ w: '30%', h: '20%' }} src = {phone} alt = 'phone' />
            <Heading size = 'sm' p = '12%' pb = '6%'>
                {translate('contactPage.phone')}
            </Heading>
            <Link href = 'tel:4177637740'>
                (417)763-7740
            </Link>
        </Flex>
    );
}
 
export default Phone;