import { Box, Text } from "@chakra-ui/react"

export const BubbleText = ({
  text,
  textStyle,
  color,
  textAlign,
  borderRadius,
  ...rest
}) => {
  return (
    <Text
      {...rest}
      textStyle={textStyle ?? 'body'}
      color={color ?? 'gray.700'}
      textAlign={textAlign ?? 'center'}
      borderRadius={borderRadius ?? 10}
      borderWidth='1px'
      borderColor='black'
      px={rest.px ?? 'clamp(3px, 3vw, 5rem)'}
      py={rest.py ?? 'clamp(3px, 2vw, 5rem)'}
      m='3rem'
      boxShadow='22px 22px 20px 10px rgb(0,0,0,0.1)'
    >
      {text}
    </Text>
  )
}