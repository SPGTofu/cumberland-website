import ContactContainer from '../components/contact-us/ContactContainer';
import { translate } from '../components/languages/translations';
import PageWrapper from './PageWrapper';

const ContactPage = () => {
  document.title = translate('nav.contactUs')
  return (
    <PageWrapper>
      <ContactContainer />
    </PageWrapper>
  );
}
 
export default ContactPage;