import { Flex } from "@chakra-ui/react"
import Navbar from "../components/navbar/Navbar"
import PropTypes from "prop-types";
import Footer from "../components/footer";

const PageWrapper = ({
  height,
  width,
  children
}) => {
  return (
    <Flex
      flexDirection="column"
      h={height ?? "100%"}
      w={width ?? "100vw"}
      maxW="100vw"
      overflowX='hidden'
    >
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
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PageWrapper;
