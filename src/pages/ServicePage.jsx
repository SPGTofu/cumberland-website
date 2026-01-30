import Online from "../components/service/Online";
import InPerson from "../components/service/InPerson";
import PageWrapper from "./PageWrapper";

const Service = () => {
  document.title = "Join Us"
  return (
    <PageWrapper>
        <Online />
        <InPerson />
    </PageWrapper>
  );
}

export default Service;