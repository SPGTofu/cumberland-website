import PageWrapper from "./PageWrapper";
import { Box, Heading, Text } from "@chakra-ui/react";
import ProfileBio from "../components/Image/ProfileBio";
import { translate } from "../components/languages/translations";
import { BubbleText } from "../components/BubbleTextOverlay";

export default function TeamPage() {
  document.title = translate('nav.aboutItems.ourTeam')

  return (
    <PageWrapper>
      <Box maxW="1200px" mx="auto" px={6} py={10}>
        <Heading textAlign="center" mb={12}>
          Our Team
        </Heading>

        <ProfileBio name="Senior Pastor" position="John's Father" photoSrc="/photo1.jpg">
          <BubbleText bg='accent2'>
            <Text mb={4} textAlign='left'>
              Amber Kwon Spends billions on groceries every single week and it is actually astonishing im just blabbering blah blah blah John Pork we need to play minecraft some time I like to each dumplings, especiialy soup sumplings i love xao long bao.
            </Text>
            <Text textAlign='left'>
              This is also just another bio I guess because I am having fun not really this is frying my brain to make this a component.
            </Text>
          </BubbleText>
        </ProfileBio>

        <ProfileBio name="The President" position="Hannah Kim" photoSrc="/photo2.jpg" reverse >
          <BubbleText bg='accent2'>
            <Text mb={4} textAlign='left'>
              Amber Kwon Spends billions on groceries every single week and it is actually astonishing im just blabbering blah blah blah John Pork we need to play minecraft some time I like to each dumplings, especiialy soup sumplings i love xao long bao.
            </Text>
            <Text textAlign='left'>
              This is also just another bio I guess because I am having fun not really this is frying my brain to make this a component.
            </Text>
          </BubbleText>
        </ProfileBio>

        <ProfileBio name="Senior Pastor" position="John's Father" photoSrc="/photo1.jpg">
          <BubbleText bg='accent2'>
            <Text mb={4} textAlign='left'>
              Amber Kwon Spends billions on groceries every single week and it is actually astonishing im just blabbering blah blah blah John Pork we need to play minecraft some time I like to each dumplings, especiialy soup sumplings i love xao long bao.
            </Text>
            <Text textAlign='left'>
              This is also just another bio I guess because I am having fun not really this is frying my brain to make this a component.
            </Text>
          </BubbleText>

        </ProfileBio>

        <ProfileBio name="The President" position="Hannah Kim" photoSrc="/photo2.jpg" reverse >
          <BubbleText bg='accent2'>
            <Text mb={4} textAlign='left'>
              Amber Kwon Spends billions on groceries every single week and it is actually astonishing im just blabbering blah blah blah John Pork we need to play minecraft some time I like to each dumplings, especiialy soup sumplings i love xao long bao.
            </Text>
            <Text textAlign='left'>
              This is also just another bio I guess because I am having fun not really this is frying my brain to make this a component.
            </Text>
          </BubbleText>
        </ProfileBio>

        <ProfileBio name="Senior Pastor" position="John's Father" photoSrc="/photo1.jpg">
          <BubbleText bg='accent2'>
            <Text mb={4} textAlign='left'>
              Amber Kwon Spends billions on groceries every single week and it is actually astonishing im just blabbering blah blah blah John Pork we need to play minecraft some time I like to each dumplings, especiialy soup sumplings i love xao long bao.
            </Text>
            <Text textAlign='left'>
              This is also just another bio I guess because I am having fun not really this is frying my brain to make this a component.
            </Text>
          </BubbleText>
        </ProfileBio>

        <ProfileBio name="The President" position="Hannah Kim" photoSrc="/photo2.jpg" reverse >
          <BubbleText bg='accent2'>
            <Text mb={4} textAlign='left'>
              Amber Kwon Spends billions on groceries every single week and it is actually astonishing im just blabbering blah blah blah John Pork we need to play minecraft some time I like to each dumplings, especiialy soup sumplings i love xao long bao.
            </Text>
            <Text textAlign='left'>
              This is also just another bio I guess because I am having fun not really this is frying my brain to make this a component.
            </Text>
          </BubbleText>
        </ProfileBio>

      </Box>
    </PageWrapper>
  );
}