import { Flex, Image, Text, IconButton, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import NavItem from './NavItem';
import navigationItems from './NavItemList';
import { getLanguage, setLanguage } from '../languages/translations';
import { languagesEnum } from '../languages/context';
import { useNavigate } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import churchLogo from '../../assets/church_logo_extended.png';

const Navbar = () => {
  const lang = getLanguage();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <Flex sx={{ m: '1rem', justifyContent: 'flex-start', alignItems: 'center' }}>
        <Image
          src={churchLogo}  // file in public/ should be referenced from root
          alt="logo"
          sx={{ 
            w: '46%',
          }}
          _hover={{ opacity: 0.5, cursor: 'pointer' }}
          onClick={() => {navigate('/')}}
        />
      </Flex>
      <Flex
        sx={{
          display: { base: 'flex', md: 'none' },
          alignItems: 'center',
          mr: '1rem',
        }}
      >
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open menu"
          variant="ghost"
          size="lg"
          onClick={onOpen}
        />
      </Flex>
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          display: { base: 'none', md: 'flex' },
        }}
      >
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
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex sx={{ flexDirection: 'column', gap: '1.5rem', mt: '3rem' }}>
              <Flex sx={{ gap: '0.5rem' }}>
                <Text
                  textStyle="h3"
                  fontWeight={lang === languagesEnum.ENGLISH ? 'bold' : 'normal'}
                  textDecoration={lang === languagesEnum.ENGLISH ? 'underline' : 'none'}
                  onClick={() => { setLanguage(languagesEnum.ENGLISH); onClose(); }}
                >
                  English
                </Text>
                <Text textStyle="h3">/</Text>
                <Text
                  textStyle="h3"
                  fontWeight={lang === languagesEnum.KOREAN ? 'bold' : 'normal'}
                  textDecoration={lang === languagesEnum.KOREAN ? 'underline' : 'none'}
                  onClick={() => { setLanguage(languagesEnum.KOREAN); onClose(); }}
                >
                  한국어
                </Text>
              </Flex>

              <Flex sx={{ flexDirection: 'column', gap: '1rem' }}>
                {listOfNavItems}
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Navbar;