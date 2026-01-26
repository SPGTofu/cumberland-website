import { Flex, Text } from "@chakra-ui/react";
import Phone from "./Phone";
import Address from "./Address";
import Email from "./Email";
import { translate } from "../languages/translations";

const ContactContainer = () => {
    return (
        <Flex sx= {{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Text textStyle='h1' sx={{ mb: '5%' }}>
                {translate('contactPage.title')}
            </Text>
            <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Address />
                <Phone />
                <Email />
            </Flex>
        </Flex>
    );
}
 
export default ContactContainer;