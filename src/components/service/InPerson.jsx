import { Text, Flex, Link } from '@chakra-ui/react';
import { translate } from '../languages/translations';

const InPerson = () => {
  return (
    <Flex
      sx={{
        flexDirection: { base: 'column-reverse', md: 'row' },
        flex: '1'
      }}
    >
      <Flex sx={{ bg: 'white', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minW: '55%', padding: 'clamp(1rem, 8vw, 15rem)' }}>
        <Text textStyle='h2' sx={{ mb: 'clamp(0.5rem, 2vw, 1rem)', color: 'gray.800' }}>
          {translate('joinUs.inPersonTitle')}
        </Text>
        <Text textStyle='h4' sx={{ marginBottom: 'clamp(1rem, 5vw, 3rem)', fontWeight: '600', color: 'gray.600' }}>
          {translate('joinUs.inPersonSubtitle')}
        </Text>
        <Link
          textStyle='body'
          href='https://www.google.com/maps/place/%EC%BB%B4%EB%B2%8C%EB%9E%9C%EB%93%9C+%ED%95%9C%EC%9D%B8+%EC%9E%A5%EB%A1%9C+%EA%B5%90%ED%9A%8C+Korean+Cumberland+Presbyterian+Church/@37.1367543,-93.2648885,17z/data=!3m1!4b1!4m6!3m5!1s0x87cf650bd56bc4b5:0xf6a64dc41e36a3bc!8m2!3d37.1367501!4d-93.2623136!16s%2Fg%2F11t82pf2jh?entry=ttu'
          isExternal
        >
          4216 S Charleston Ave
          <br />
          Springfield, MO 65804
        </Link>
      </Flex>
      <Flex sx={{ bg: 'gray.100', justifyContent: 'center', alignItems: 'center', minW: '45%', minH: '24rem' }}>
        Holder for Image
      </Flex>
    </Flex>
  );
}

export default InPerson;