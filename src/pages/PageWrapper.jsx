import { Flex } from "@chakra-ui/react"
import Navbar from "../components/navbar/Navbar"
import PropTypes from "prop-types";
import Footer from "../components/footer";

const PageWrapper = ({ children, height, width }) => {
  return (
    <Flex
      flexDirection="column"
      flex='1'
      h={height ?? '100%'}
      w={width ?? '100%'}
    >
      <Navbar />
      <Flex sx={{ flexDirection: 'column', flex: 1 }}>
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
