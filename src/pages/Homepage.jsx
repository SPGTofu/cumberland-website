import PageWrapper from './PageWrapper';
import { Box, Text, Image } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const Homepage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/public/photo1.jpg",
    "/public/photo2.jpg", 
    "/public/group.JPEG"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
      <Box position="relative" width="100%" height="100%">
        <Image
          src={images[currentImage]}
          alt="Church building"
          w="100%"
          h="100%"
          mb="150px"
          transition="all 0.5s ease-in-out"
        />
        
        <Box
          w="100%"
          h="500px"
          background="#d3c0b0"
          p="20px"
          mb="50px"
        >
          <Text
            fontSize="50px"
            fontWeight="bold"
            color="black"
            textAlign="center"
          >
            Something about the Church
          </Text>
          <Text
            fontSize="30px"
            color="black"
            textAlign="center"
          >
            I still dont know what to fill this space with if we even need it at all?
          </Text>       
        </Box>

        <Box p="0 40px">
          <Box
            w="55%"
            h="500px"
            background="#f6eae1"
            p="20px"
            mb="50px"
          >
            <Text
              fontSize="50px"
              fontWeight="bold"
              color="black"
              textAlign="left"
            >
              About Our Services
            </Text>
            <Text
              fontSize="30px"
              color="black"
              textAlign="left"
            >
              John Park actually has some really nice sermons when 
              you take into consideration that he is a fish that eats 
              blankets when carrots get too expires to use for hunting purposes.
            </Text>
          </Box>
        </Box>

        <Image
          src="/public/logo.png"
          alt="Church logo"
          w="25%"
          h="auto"
          mb="50px"
          position="absolute"
          right="150px"
          bottom="20px"
        />
      </Box>

      <Box p="0 40px">
        <Box
          w="100%"
          h="500px"
          background="#d3c0b0"
          p="20px"
          mb="50px"
          position="relative"
        >
          <Text
            fontSize="40px"
            fontWeight="bold"
            color="black"
            textAlign="center"
            mb="20px"
          >
            Find Us
          </Text>
        </Box>
      </Box>

      <Box
        w="100%"
        h="100px"
        background="#b5a191"
        p="20px"
      >
        <Text
          fontSize="15px"
          color="black"
          textAlign="center"
        >
          Copyright 2017 Korean United Presbyterian Church of Springfield. All Rights Reserved.<br/>
          1234 JohnsHouse Ave Springfield MO, 43213<br/>
          Tel. 123-456-7891 | Fax. 123-456-7891 | cumberlandchurch@gmail.com<br/>
        </Text>
      </Box>
    </PageWrapper>
  );
}

export default Homepage;