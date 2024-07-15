import { Box, Flex, Heading, Image, Spacer, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import facebookLogo from "../../assets/facebook_logo.png";
import youtubeLogo from "../../assets/youtube_logo.png";
const Online = () => {
    const [isHoveringYoutube, setIsHoveringYoutube] = useState(false);
    const [isHoveringFacebook, setIsHoveringFacebook] = useState(false);

    const handleFacebookClick = () => {
        window.location.href = 'https://www.facebook.com/Koreancpc';
    }

    const handleYoutubeClick = () => {

    }

    return (  
        <Flex
            flexDirection = 'Row'
            w = '100%'
            h = '90%'
        >
            <Flex
                bg = 'blue.500'
                justifyContent = 'center'
                alignItems = 'center'
                w = '45%'
            >
                Holder for Image
            </Flex>
            <Flex
                bg = 'yellow.500'
                justifyContent = 'center'
                alignItems = 'center'
                w = '55%'
            >
                <Flex
                    direction = 'column'
                    justifyContent = 'center'
                    alignItems = 'center'
                >
                    <Heading
                        size = 'xl'
                        mb = '8px'
                    >
                        Join Us Through Our Online Platforms!
                    </Heading>
                    <Text
                        mb = '48px'
                        fontWeight = 'bold'
                        fontSize = 'xl'
                    >
                        Live streams begin at 12:00PM CST on Sundays.
                    </Text>
                    
                    <Flex
                        direction = 'row'
                    >
                        <Flex
                            direction = 'column'
                            alignItems = 'center'
                            justifyContent = 'center'
                        >
                            <Box
                                _hover = {{cursor: 'pointer'}}
                                onMouseEnter = {() => setIsHoveringFacebook(true)}
                                onMouseLeave = {() => setIsHoveringFacebook(false)}
                                onClick = {handleFacebookClick}
                                mb = '4px'
                            >
                                <Image
                                    src = {facebookLogo}
                                    alt = 'facebook'
                                    w = '50px'
                                    h = '50px'
                                />
                            </Box>
                            <Text fontSize = 'lg'>
                                Facebook
                            </Text>
                        </Flex>
                        <Spacer 
                            w = '80px'
                        />
                        <Flex
                            direction = 'column'
                            alignItems = 'center'
                            justifyContent = 'center'
                        >
                            <Box
                                _hover = {{cursor: 'pointer'}}
                                onMouseEnter = {() => setIsHoveringYoutube(true)}
                                onMouseLeave = {() => setIsHoveringYoutube(false)}
                                onClick = {handleYoutubeClick}
                                mb = '4px'
                            >
                                <Image
                                    src = {youtubeLogo}
                                    alt = 'YouTube'
                                    w = '60px'
                                    h = '50px'
                                />
                            </Box>
                            <Text fontSize = 'lg'>
                                YouTube
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    );
}
 
export default Online;