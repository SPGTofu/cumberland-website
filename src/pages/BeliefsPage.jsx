import { BeliefsComponent } from '../components/BeliefsComponent';
import { translate } from '../components/languages/translations';
import PageWrapper from './PageWrapper';

const BeliefsPage = () => {
  document.title = translate('nav.aboutItems.ourBeliefs')
  return (
    <PageWrapper>
      <BeliefsComponent />
    </PageWrapper>
  );
}

export default BeliefsPage;