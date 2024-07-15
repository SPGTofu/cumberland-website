import { Flex, Heading } from '@chakra-ui/react';
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
            backgroundColor = '#697184'
            w = '100%'
            justify= 'center'
            align = 'center'
        >
            <Flex 
                flex = '1'
                p = '8px'
            >
                <Heading size = 'lg'>Korean Cumberland Presbyterian Church</Heading>
            </Flex>

            <Flex justifyContent = 'flex-end'
                  fontSize= 'xl'

            >
                {listOfNavItems} 
            </Flex>
        </Flex>
    );
}

export default Navbar;