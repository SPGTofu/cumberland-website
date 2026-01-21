import { Box } from '@chakra-ui/react';
import ContactContainer from '../components/contact-us/ContactContainer';
import PageWrapper from './PageWrapper';

const ContactPage = () => {
  return (
    <PageWrapper>
      <Box bg='#D8CFD0'>
        <ContactContainer />
      </Box>
    </PageWrapper>
  );
}
 
export default ContactPage;