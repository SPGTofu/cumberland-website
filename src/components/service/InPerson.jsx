import { Text, Flex, Link } from '@chakra-ui/react';

const InPerson = () => {
  return (
    <Flex flexDirection='row' flex='1'>
      <Flex sx={{ bg: 'white', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '55%', paddingX: '10rem' }}>
        <Text textStyle='h2' b='16px'>
          Join Us In Person
        </Text>
        <Text textStyle='h4' sx={{ marginBottom: '3rem', fontWeight: '600', color: 'gray.600' }}>
          Our Sunday service starts at 12:00 PM, followed by a shared lunch and time to connect!
        </Text>
        <Link
          fontSize='lg'
          href='https://www.google.com/maps/place/%EC%BB%B4%EB%B2%8C%EB%9E%9C%EB%93%9C+%ED%95%9C%EC%9D%B8+%EC%9E%A5%EB%A1%9C+%EA%B5%90%ED%9A%8C+Korean+Cumberland+Presbyterian+Church/@37.1367543,-93.2648885,17z/data=!3m1!4b1!4m6!3m5!1s0x87cf650bd56bc4b5:0xf6a64dc41e36a3bc!8m2!3d37.1367501!4d-93.2623136!16s%2Fg%2F11t82pf2jh?entry=ttu'
          isExternal
        >
          4216 S Charleston Ave
          <br />
          Springfield, MO 65804
        </Link>
      </Flex>
      <Flex sx={{ bg: 'gray.100', justifyContent: 'center', alignItems: 'center', width: '45%' }}>
        Holder for Image
      </Flex>
    </Flex>
  );
}

export default InPerson;