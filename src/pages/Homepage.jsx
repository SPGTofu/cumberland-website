import PageWrapper from './PageWrapper';
import { Box, Text, Image } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const Homepage = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY;
  const position = {lat: 37.13683574512634, lng: -93.26230885169069}
  const [currentImage, setCurrentImage] = useState(0);
  const [currentMap, setCurrentMap] = useState(0);
  const [fade, setFade] = useState(true);
  const images = [
    "/photo1.jpg",
    "/photo2.jpg", 
    "/group.JPEG"
  ];
  //refreshes the map too need to fix
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 1000);
    }, 7000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <PageWrapper>
      <Box position="relative">
        <Image src={images[currentImage]} alt="Church building" transition="all 0.5s ease-in-out" className={`image-fade ${fade ? 'active' : ''}`}/>
        
        <Box w="100%" h="500px" background="#d3c0b0" p="20px" mb="50px">
          <Text fontSize="3rem" fontWeight="bold" color="black" textAlign="center">
            Something about the Church
          </Text>
          <Text fontSize="2rem" color="black" textAlign="center">
            I still dont know what to fill this space with if we even need it at all?
          </Text>       
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="flex-start" p="0 2%" mb="40px">
          <Box w="59%" h="400px" background="#f6eae1" p="20px" mb="50px">
            <Text fontSize="3rem" fontWeight="bold" color="black" textAlign="left">
              About Our Services
            </Text>
            <Text fontSize="1.5rem" color="black" textAlign="left">
              John Park actually has some really nice sermons when 
              you take into consideration that he is a fish that eats 
              blankets when carrots get too expires to use for hunting purposes.
            </Text>
          </Box>
        <Box w="39%" h="400px">
          <LoadScript googleMapsApiKey={apiKey} libraries={['places']}>
            <GoogleMap mapContainerStyle={{ width: "90%", height: "100%" }} center={position} zoom={15}>
              <MarkerF position={position}/>
            </GoogleMap>
          </LoadScript>
        </Box>
        </Box>
      </Box>

      <Box w="100%">
        <Text fontSize="1rem" color="black" textAlign="center" background="#b5a191">
          Copyright 2017 Korean United Presbyterian Church of Springfield. All Rights Reserved.<br/>
          1234 JohnsHouse Ave Springfield MO, 43213<br/>
          Tel. 123-456-7891 | Fax. 123-456-7891 | cumberlandchurch@gmail.com<br/>
        </Text>
      </Box>
    </PageWrapper>
  );
}

export default Homepage;