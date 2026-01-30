import { BeliefsComponent } from '../components/BeliefsComponent';
import PageWrapper from './PageWrapper';

const BeliefsPage = () => {
  document.title = 'Beliefs'
  return (
    <PageWrapper>
      <BeliefsComponent />
    </PageWrapper>
  );
}

export default BeliefsPage;