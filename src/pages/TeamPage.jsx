import PageWrapper from "./PageWrapper";
import { Box, Heading, Text } from "@chakra-ui/react";
import ProfileBio from "../components/Image/ProfileBio";

export default function TeamPage() {
  return (
    <PageWrapper>
      <Box maxW="1100px" mx="auto" px={6} py={10}>
        <Heading textAlign="center" mb={12}>
          Our Team
        </Heading>

        <ProfileBio name="Senior Pastor" position="John's Father" photoSrc="/public/photo1.jpg">
          <Text mb={4}>
            Amber Kwon Spends billions on groceries every single week and it is actually astonishing im just blabbering blah blah blah John Pork we need to play minecraft some time I like to each dumplings, especiialy soup sumplings i love xao long bao.
          </Text>
          <Text>
            This is also just another bio I guess because I am having fun not really this is frying my brain to make this a component.
          </Text>
        </ProfileBio>

        <ProfileBio name="The President" position="Hannah Kim" photoSrc="/public/photo2.jpg" reverse >
          <Text mb={4}>
            Amber Kwon Spends billions on groceries every single week and it is actually astonishing im just blabbering blah blah blah John Pork we need to play minecraft some time I like to each dumplings, especiialy soup sumplings i love xao long bao.
          </Text>
          <Text>
            This is also just another bio I guess because I am having fun not really this is frying my brain to make this a component.
          </Text>
        </ProfileBio>

        <ProfileBio name="Senior Pastor" position="John's Father" photoSrc="/public/photo1.jpg">
          <Text mb={4}>
            Amber Kwon Spends billions on groceries every single week and it is actually astonishing im just blabbering blah blah blah John Pork we need to play minecraft some time I like to each dumplings, especiialy soup sumplings i love xao long bao.
          </Text>
          <Text>
            This is also just another bio I guess because I am having fun not really this is frying my brain to make this a component.
          </Text>
        </ProfileBio>

        <ProfileBio name="The President" position="Hannah Kim" photoSrc="/public/photo2.jpg" reverse >
          <Text mb={4}>
            Amber Kwon Spends billions on groceries every single week and it is actually astonishing im just blabbering blah blah blah John Pork we need to play minecraft some time I like to each dumplings, especiialy soup sumplings i love xao long bao.
          </Text>
          <Text>
            This is also just another bio I guess because I am having fun not really this is frying my brain to make this a component.
          </Text>
        </ProfileBio>

        <ProfileBio name="Senior Pastor" position="John's Father" photoSrc="/public/photo1.jpg">
          <Text mb={4}>
            Amber Kwon Spends billions on groceries every single week and it is actually astonishing im just blabbering blah blah blah John Pork we need to play minecraft some time I like to each dumplings, especiialy soup sumplings i love xao long bao.
          </Text>
          <Text>
            This is also just another bio I guess because I am having fun not really this is frying my brain to make this a component.
          </Text>
        </ProfileBio>

        <ProfileBio name="The President" position="Hannah Kim" photoSrc="/public/photo2.jpg" reverse >
          <Text mb={4}>
            Amber Kwon Spends billions on groceries every single week and it is actually astonishing im just blabbering blah blah blah John Pork we need to play minecraft some time I like to each dumplings, especiialy soup sumplings i love xao long bao.
          </Text>
          <Text>
            This is also just another bio I guess because I am having fun not really this is frying my brain to make this a component.
          </Text>
        </ProfileBio>

      </Box>
    </PageWrapper>
  );
}