import { Flex, Text } from "@chakra-ui/react";
import { translate } from "../languages/translations";
import { ContactDisplay } from "./ContactDisplay";
import location from "../../assets/location_icon.png";
import phone from "../../assets/phone_icon.png";
import email from "../../assets/email_icon.png";

const ContactContainer = () => {
  const addressText = (
    <>
      4216 S Charleston Ave
      <br />
      Springfield, MO 65804
    </>
  )

  const phoneText = (
    <>
      417-763-7740
    </>
  )

  const emailText = (
    <>
      hesedpark1967@gmail.com
    </>
  )

  return (
    <Flex
      sx= {{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        my: '10rem'
      }}
    >
      <Text textStyle='h1' mb='6rem'>
        {translate('contactPage.title')}
      </Text>
      <Flex
        sx={{
          flexDirection: { base: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          w: '100%',
          gap: 'clamp(2rem, 8vw, 16rem)'
        }}
      >
        <ContactDisplay
          image={location}
          title={translate('contactPage.address')}
          text= {addressText}
          href = 'https://www.google.com/maps/place/%EC%BB%B4%EB%B2%8C%EB%9E%9C%EB%93%9C+%ED%95%9C%EC%9D%B8+%EC%9E%A5%EB%A1%9C+%EA%B5%90%ED%9A%8C+Korean+Cumberland+Presbyterian+Church/@37.1367543,-93.2648885,17z/data=!3m1!4b1!4m6!3m5!1s0x87cf650bd56bc4b5:0xf6a64dc41e36a3bc!8m2!3d37.1367501!4d-93.2623136!16s%2Fg%2F11t82pf2jh?entry=ttu'
          alt = 'Address'
        />
        <ContactDisplay
          image={phone}
          title={translate('contactPage.phone')}
          text= {phoneText}
          href = 'tel:4177637740'
          alt = 'Phone'
        />
        <ContactDisplay
          image={email}
          title={translate('contactPage.email')}
          text= {emailText}
          href = 'mailto:hesedpark1967@gmail.com'
          alt = 'Email'
        />
      </Flex>
    </Flex>
  );
}
 
export default ContactContainer;