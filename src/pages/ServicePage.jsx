import Online from "../components/service/Online";
import InPerson from "../components/service/InPerson";
import PageWrapper from "./PageWrapper";

const Service = () => {
  return (
    <PageWrapper height={'150vh'}>
        <Online />
        <InPerson />
    </PageWrapper>
  );
}

export default Service;