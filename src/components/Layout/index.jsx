import { Flex } from "@chakra-ui/react"
import Navbar from "../navbar/Navbar"
import Footer from "../footer"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Flex flex='1' direction='column'>
        <Outlet />
      </Flex>
      <Footer />
    </Flex>
  )
}