import { Flex } from "@chakra-ui/react"
import Navbar from "../components/navbar/Navbar"
import PropTypes from "prop-types";
import Footer from "../components/footer";

const PageWrapper = ({ children }) => {
  return (
    <Flex flexDirection="column" minH="100vh" w="100vw" overflowX='hidden'>
      <Navbar />
      <Flex flex="1" flexDirection="column" bg="white">
        {children}
      </Flex>
      <Footer />
    </Flex>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageWrapper;