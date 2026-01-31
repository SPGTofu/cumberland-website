import Online from "../components/service/Online";
import InPerson from "../components/service/InPerson";
import PageWrapper from "./PageWrapper";
import { translate } from "../components/languages/translations";

const Service = () => {
  document.title = translate('nav.joinUs')
  return (
    <PageWrapper>
        <Online />
        <InPerson />
    </PageWrapper>
  );
}

export default Service;