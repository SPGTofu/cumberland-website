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
    <Flex
      sx={{
        flexDirection: { base: 'column', md: 'row' },
        minH: '20rem',
        flex: '1'
      }}
    >
      <Flex
        sx={{
          bg: 'gray.100',
          justifyContent: 'center',
          alignItems: 'center',
          minW: '45%',
          minH: '24rem'
        }}
      >
        Holder for Image
      </Flex>
      <Flex
        sx={{
          bg: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          minW: '55%',
          padding: 'clamp(1rem, 8vw, 12rem)',
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text textStyle='h2' sx={{ mb: 'clamp(0.5rem, 2vw, 1.5rem)', color: 'gray.800' }}>
            {translate('joinUs.onlineTitle')}
          </Text>
          <Text textStyle='h4' sx={{ marginBottom: 'clamp(1rem, 5vw, 5rem)', color: 'gray.600' }}>
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
                  sx={{
                    w: 'clamp(0.5rem, 4vw, 5.125rem)',
                    h: 'clamp(0.5rem, 4vw, 5.125rem)'
                  }}
                  src = {facebookLogo}
                  alt = 'facebook'
                />
              </Box>
              <Text
                sx={{
                  textStyle: 'body',
                  fontWeight: 500,
                  color: 'gray.700',
                  opacity: (isHoveringFacebook ? 0.5 : 1)
                }}
              >
                {translate('joinUs.facebook')}
              </Text>
            </Flex>
            <Spacer sx={{ w: 'clamp(1rem, 6vw, 8rem)' }}/>
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
                  sx={{
                    w: 'clamp(0.5rem, 4vw, 5.125rem)',
                    h: 'clamp(0.5rem, 4vw, 5.125rem)'
                  }}
                />
              </Box>
              <Text sx={{ textStyle: 'body', fontWeight: 500, color: 'gray.700', opacity: (isHoveringYoutube ? 0.5 : 1 )}}>
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