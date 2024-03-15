import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Section1 = () => {
  return (
    <Box>
      <Heading fontWeight='bold' fontSize='2rem' color='rgba(41, 41, 41, 1)' mb='1rem'>
        Shopping Cart
      </Heading>
      <Text fontSize='1.2rem' mb='1rem'>
        You have <span style={{fontWeight: 'bold'}}>7</span> items in your shopping cart
      </Text>
    </Box>
  )
}

export default Section1;
