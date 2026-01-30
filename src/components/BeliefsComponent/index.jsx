import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { translate } from '../languages/translations'

export const BeliefsComponent = () => {
  const statements = translate("ourBeliefs.statements")
  const accordionItems = Object.entries(statements).map(([key, value]) => (
    <AccordionItem key={key} value={key}>
      <AccordionButton>
        <Text
          flex='1'
          textAlign="start"
          my='0.5rem'
          textStyle='h3'
          ml='0.5rem'
        >
          {key}
        </Text>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        <Text
          textStyle='body'
          textAlign='start'
          m='0.5rem'
        >
          {value}
        </Text>
      </AccordionPanel>
    </AccordionItem>
  ))

  return (
    <>
      <Text textStyle='h1' my={10}>{translate('ourBeliefs.title')}</Text>
      <Box mb='12rem'>
        <Accordion allowMultiple>
          {accordionItems}
        </Accordion>
      </Box>
    </>
  )
}