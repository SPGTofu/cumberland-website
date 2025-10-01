import { Flex, Heading, Image, Box, Text} from '@chakra-ui/react';
import React from 'react';
import NavItem from './NavItem';
import navigationItems from './NavItemList';
const Navbar = () => {
    const listOfNavItems = navigationItems.map((item) =>
            <NavItem 
                key = {item.name} 
                name = {item.name}
                menuItems = {item.menuItems}
                navigation = {item.navigation}
            />
        );

    return (  
        <Flex 
            flexDirection= 'Column'
            backgroundColor = '#ffffff'
            w = '100%'
            justify= 'center'
            align = 'center'
        >
            <Flex 
                flex = '1'
                p = '65px'
            >
            <Image
                src = "/public/remakelogo.png"
                alt = 'logo'
                w = '300px'
                h = '250px'
                position = 'absolute'
                left = '20px'
                top = '-30px'
            />
            <Heading
                fontSize = '30px'
                position = 'absolute'
                right = '20px'
                top = '10px'
            >
                English / 한국어
            </Heading>
            </Flex>

            <Flex justifyContent = 'flex-end'
                  fontSize= '30px'
                  position = 'absolute'
                  right = '20px'
                  top = '60px'

            >
                {listOfNavItems} 
            </Flex>
        </Flex>
    );
}

export default Navbar;