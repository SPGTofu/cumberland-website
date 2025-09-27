import { Box } from '@chakra-ui/react';
import ContactContainer from '../components/contact-us/ContactContainer';
import MessageContainer from '../components/contact-us/MessageContainer';
import PageWrapper from './PageWrapper';

const ContactPage = () => {
  return (
    <PageWrapper>
      <Box w='100%' h='50%' bg='#D8CFD0'>
        <ContactContainer />
      </Box>

      <Box w='100%' h='60%' bg='#B0A6A4' flex='1' justifyContent='center' alignItems='center'>
        <MessageContainer />
      </Box>
    </PageWrapper>
  );
}
 
export default ContactPage;