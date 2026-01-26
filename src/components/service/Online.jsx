import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
import facebookLogo from "../../assets/facebook_logo.png";
import youtubeLogo from "../../assets/youtube_logo.png";
import { translate } from "../languages/translations";
const Online = () => {
  const [isHoveringYoutube, setIsHoveringYoutube] = useState(false);
  const [isHoveringFacebook, setIsHoveringFacebook] = useState(false);

  const handleFacebookClick = () => {
    window.location.href = 'https://www.facebook.com/Koreancpc';
  }

  const handleYoutubeClick = () => {

  }

  return (  
    <Flex sx={{ flexDirection: 'row', flex: '1' }}>
      <Flex sx={{ bg: 'gray.100', justifyContent: 'center', alignItems: 'center', width: '45%' }}>
        Holder for Image
      </Flex>
      <Flex sx={{ bg: 'white', justifyContent: 'center', alignItems: 'center', width: '55%', paddingX: '15rem' }}>
        <Flex sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Text textStyle='h2' sx={{ mb: '1rem', color: 'gray.800' }}>
            {translate('joinUs.onlineTitle')}
          </Text>
          <Text textStyle='h4' sx={{ marginBottom: '3rem', fontWeight: '600', color: 'gray.600' }}>
            {translate('joinUs.onlineSubtitle')}
          </Text>
          <Flex sx={{ flexDirection: 'row' }}>
            <Flex sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Box
                sx={{
                  cursor: 'pointer',
                  marginBottom: '0.25rem',
                  borderRadius: 'md',
                  _hover: { opacity: 0.5 }
                }}
                onMouseEnter = {() => setIsHoveringFacebook(true)}
                onMouseLeave = {() => setIsHoveringFacebook(false)}
                onClick = {handleFacebookClick}
              >
                <Image
                  sx={{ width: '3.125rem', height: '3.125rem' }}
                  src = {facebookLogo}
                  alt = 'facebook'
                />
              </Box>
              <Text sx={{ fontSize: 'md', fontWeight: '500', color: 'gray.700', opacity: (isHoveringFacebook ? 0.5 : 1) }}>
                {translate('joinUs.facebook')}
              </Text>
            </Flex>
            <Spacer sx={{ width: '5rem' }}/>
            <Flex sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Box
                sx={{
                  cursor: 'pointer',
                  marginBottom: '0.25rem',
                  borderRadius: 'md',
                  _hover: { opacity: 0.5 }
                }}
                onMouseEnter = {() => setIsHoveringYoutube(true)}
                onMouseLeave = {() => setIsHoveringYoutube(false)}
                onClick = {handleYoutubeClick}
              >
                <Image
                  src = {youtubeLogo}
                  alt = 'YouTube'
                  sx={{ width: '3.75rem', height: '3.125rem' }}
                />
              </Box>
              <Text sx={{ fontSize: 'md', fontWeight: '500', color: 'gray.700', opacity: (isHoveringYoutube ? 0.5 : 1 )}}>
                {translate('joinUs.youtube')}
              </Text>
            </Flex>
          </Flex>
        </Flex>

      </Flex>
    </Flex>
  );
}
 
export default Online;