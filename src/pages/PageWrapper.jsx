import { Fade, Flex, useDisclosure } from "@chakra-ui/react"
import Navbar from "../components/navbar/Navbar"
import PropTypes from "prop-types";
import Footer from "../components/footer";
import { useEffect } from "react";

const PageWrapper = ({ children }) => {
  const { isOpen, onOpen } = useDisclosure();

  useEffect(() => {
    requestAnimationFrame(onOpen);
  }, []);

  return (
    <Fade in={isOpen} transition={{ enter: { duration: 0.6 } }}>
      <Flex sx={{ flexDirection: 'column', flex: 1 }}>
        {children}
      </Flex>
    </Fade>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  // height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PageWrapper;
