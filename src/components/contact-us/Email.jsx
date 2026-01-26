import React from "react";
import email from "../../assets/email.png";
import { Image, Heading, Link, Flex } from "@chakra-ui/react";
import { translate } from "../languages/translations";
const Email = () => {
    return (  
        <Flex sx={{ w: '2xs', h: 'sm', flexDirection: 'column', justifyContent: 'top', alignItems: 'center' }}>
            <Image sx={{ w: '30%', h: '20%' }} src={email} alt='email'/>
            <Heading size='sm' p='12%' pb='6%'>
                {translate('contactPage.email')}
            </Heading>
            <Link href = 'mailto:hesedpark1967@gmail.com'>
                hesedpark1967@gmail.com
            </Link>
        </Flex>
    );
}
 
export default Email;