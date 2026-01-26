import { Flex, Image, Text } from '@chakra-ui/react';
import NavItem from './NavItem';
import navigationItems from './NavItemList';
import { getLanguage, setLanguage } from '../languages/translations';
import { languagesEnum } from '../languages/context';
import { Navigate, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const lang = getLanguage();
  const navigate = useNavigate();

  const listOfNavItems = navigationItems.map((item) => (
    <NavItem
      key={item.name}
      name={item.name}
      menuItems={item.menuItems}
      navigation={item.navigation}
    />
  ));

  return (  
    <Flex sx={{ bg: 'white', justifyContent: 'space-between', borderBottomWidth: '1px', boxShadow: 'md' }}>
      <Flex sx={{ m: '1rem', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          src="/church-logo.png"  // file in public/ should be referenced from root
          alt="logo"
          sx={{ width: '12rem'}}
          _hover={{ opacity: 0.5, cursor: 'pointer' }}
          onClick={() => {navigate('/')}}
        />
      </Flex>
      <Flex sx={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Flex sx={{ gap: '0.25rem', mr: '4%', mb: '3%', mt: '3%' }}>
          <Text
            textStyle='h3'
            _hover={{ cursor: "pointer", opacity: 0.5 }}
            fontWeight={lang === languagesEnum.ENGLISH ? 'bold' : 'normal'}
            textDecoration={lang === languagesEnum.ENGLISH ? 'underline' : 'none'}
            onClick={() => setLanguage(languagesEnum.ENGLISH)}
          >
            English
          </Text>
          <Text textStyle='h3'>/</Text>
          <Text
            textStyle='h3'
            _hover={{ cursor: "pointer", opacity: 0.5 }}
            fontWeight={lang === languagesEnum.KOREAN ? 'bold' : 'normal'}
            textDecoration={lang === languagesEnum.KOREAN ? 'underline' : 'none'}
            onClick={() => setLanguage(languagesEnum.KOREAN)}
          >
            한국어
          </Text>
        </Flex>
        <Flex>
          {listOfNavItems}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navbar;