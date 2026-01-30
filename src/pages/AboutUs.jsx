import PageWrapper from './PageWrapper';
import { translate } from '../components/languages/translations';
import { Box, Text } from '@chakra-ui/react';

const AboutUs = () => {
  document.title = translate('nav.aboutItems.whoWeAre')
  return (  
    <PageWrapper>
      <Box w="100%" h="500px" background="#d3c0b0" p="20px" mb="50px">
        <Text fontSize="3rem" fontWeight="bold" color="black" textAlign="center">
          {translate('nav.aboutItems.whoWeAre')}
        </Text>
        <Text fontSize="2rem" color="black" textAlign="center">
          {translate('whoWeAre.whoCumberland')}
        </Text>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="flex-start" p="0 2%" mb="40px">
        <Box w="32%" background="#f6eae1" p="20px" mb="50px">
          <Text fontSize="2rem" fontWeight="bold" color="black" textAlign="left">
            {translate('whoWeAre.whatTitle')}
          </Text>
          <Text fontSize="1.5rem" color="black" textAlign="left">
            {translate('whoWeAre.whatCumberland')}
          </Text>
        </Box>
        <Box w="32%" background="#f6eae1" p="20px" mb="50px">
          <Text fontSize="2rem" fontWeight="bold" color="black" textAlign="left">
            {translate('whoWeAre.whyTitle')}
          </Text>
          <Text fontSize="1.5rem" color="black" textAlign="left">
            {translate('whoWeAre.whyCumberland')}
          </Text>
        </Box>
        <Box w="32%" background="#f6eae1" p="20px" mb="50px">
          <Text fontSize="2rem" fontWeight="bold" color="black" textAlign="left">
            {translate('whoWeAre.giveTitle')}
          </Text>
          <Text fontSize="1.5rem" color="black" textAlign="left">
            {translate('whoWeAre.giveCumberland')}
          </Text>
        </Box>
      </Box>
    </PageWrapper>
  );
}
 
export default AboutUs;