import { Flex, Image, Text, Link } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import React from 'react'

export const ContactDisplay = ({
  image,
  title,
  text,
  href,
  alt
}) => {
 return (
    <Flex
      sx={{
        minW: '0',
        flexDirection: 'column',
        justifyContent: 'top',
        alignItems: 'center',
      }}
    >
        <Image
          sx={{
            w: 'clamp(1rem, 4rem, 5rem)',
            h: 'clamp(1rem, 4rem, 5rem)'
          }}
          src={image}
          alt={alt ?? 'Image'}
          objectFit='contains'
        />
        <Text textStyle='h3' p="1rem">
            {title}
        </Text>
        <Link
          href = {href ?? ''}
          textStyle='body'
          isExternal
          overflowWrap="break-word"
          maxW='100%'
          whiteSpace='normal'
          display='block'
        >
            {text ?? 'Missing Text'}
        </Link>
    </Flex>
  )
}

ContactDisplay.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.node,
  href: PropTypes.string,
  alt: PropTypes.string
}
