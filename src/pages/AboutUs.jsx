import PageWrapper from './PageWrapper';
import translations from '../components/languages/translations';
import { Box, Text } from '@chakra-ui/react';

const AboutUs = () => {
  const lang = (typeof window !== 'undefined' && window.localStorage.getItem('lang')) || 'en';
  const tr = (node) => (node?.[lang] || node?.ko || node?.kor || node?.en || '');
  return (  
    <PageWrapper>
      <Box w="100%" h="500px" background="#d3c0b0" p="20px" mb="50px">
        <Text fontSize="3rem" fontWeight="bold" color="black" textAlign="center">
          {tr(translations.nav?.aboutItems?.whoWeAre)}
        </Text>
        <Text fontSize="2rem" color="black" textAlign="center">
          {tr(translations.whoWeAre?.whoCumberland)}
        </Text>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="flex-start" p="0 2%" mb="40px">
        <Box w="32%" background="#f6eae1" p="20px" mb="50px">
          <Text fontSize="2rem" fontWeight="bold" color="black" textAlign="left">
            What Is Cumberland?
          </Text>
          <Text fontSize="1.5rem" color="black" textAlign="left">
            {tr(translations.whoWeAre?.whatCumberland)}
          </Text>
        </Box>
        <Box w="32%" background="#f6eae1" p="20px" mb="50px">
          <Text fontSize="2rem" fontWeight="bold" color="black" textAlign="left">
            Why is Cumberland?
          </Text>
          <Text fontSize="1.5rem" color="black" textAlign="left">
            {tr(translations.whoWeAre?.whyCumberland)}
          </Text>
        </Box>
        <Box w="32%" background="#f6eae1" p="20px" mb="50px">
          <Text fontSize="2rem" fontWeight="bold" color="black" textAlign="left">
            Who is Cumberland?
          </Text>
          <Text fontSize="1.5rem" color="black" textAlign="left">
            {tr(translations.whoWeAre?.giveCumberland)}
          </Text>
        </Box>
      </Box>
    </PageWrapper>
  );
}
 
export default AboutUs;