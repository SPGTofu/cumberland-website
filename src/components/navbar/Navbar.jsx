import { Flex, Image, Text } from '@chakra-ui/react';
import NavItem from './NavItem';
import navigationItems from './NavItemList';
import { getLanguage, setLanguage } from '../languages/translations';
import { languagesEnum } from '../languages/context';

const Navbar = () => {
  const lang = getLanguage();

  const listOfNavItems = navigationItems.map((item) => (
    <NavItem
      key={item.name}
      name={item.name}
      menuItems={item.menuItems}
      navigation={item.navigation}
    />
  ));

  return (  
    <Flex 
      flexDirection="Column"
      backgroundColor="#ffffff"
      w="100%"
      justify="center"
      align="center"
      zIndex='10000'
    >
      <Flex 
        flex="1"
        p="65px"
      >
        <Image
          src="/remakelogo.png"  // file in public/ should be referenced from root
          alt="logo"
          w="300px"
          h="250px"
          position="absolute"
          left="20px"
          top="-30px"
        />
        <Flex position="absolute" right="20px" top="10px" gap="12px" align="center">
          <Text
            fontSize="20px"
            cursor="pointer"
            fontWeight={lang === languagesEnum.ENGLISH ? 'bold' : 'normal'}
            textDecoration={lang === languagesEnum.ENGLISH ? 'underline' : 'none'}
            onClick={() => setLanguage(languagesEnum.ENGLISH)}
          >
            English
          </Text>
          <Text fontSize="20px">/</Text>
          <Text
            fontSize="20px"
            cursor="pointer"
            fontWeight={lang === languagesEnum.KOREAN ? 'bold' : 'normal'}
            textDecoration={lang === languagesEnum.KOREAN ? 'underline' : 'none'}
            onClick={() => setLanguage(languagesEnum.KOREAN)}
          >
            한국어
          </Text>
        </Flex>
      </Flex>

      <Flex
        justifyContent="flex-end"
        fontSize="30px"
        position="absolute"
        right="20px"
        top="60px"
      >
        {listOfNavItems}
      </Flex>
    </Flex>
  );
}

export default Navbar;