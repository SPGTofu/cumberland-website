import { Flex } from "@chakra-ui/react"
import Navbar from "../components/navbar/Navbar"
import PropTypes from "prop-types";

const PageWrapper = ({ children }) => {
  return (
    <Flex flexDirection="column" minH="100vh" w="100vw">
      <Navbar />
      <Flex flex="1" flexDirection="column" bg="red.500">
        {children}
      </Flex>
    </Flex>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageWrapper;