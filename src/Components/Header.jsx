import { Box, Image, Flex, HStack, Heading,Text } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Flex justifyContent='space-between' w='100%' lineHeight='10rem' borderBottom='0.1rem solid #9a9191'
    mb='3rem' transform='rotate(-0.05deg)'>
    
        <HStack alignItems='center' h='inherit'>
            <Image src='./images/arrow.png' w='1.5rem' h='1.5rem'/>
            <Heading fontWeight='200' fontSize='1rem' ml='1.5rem'>
                Continue Shopping
            </Heading>
        </HStack>

        <HStack alignItems='center' textAlign='end' mr='2rem' position='relative'  justifyContent='flex-end'>
            <Image src='./images/cart.png' w='3rem' h='3rem' color='#2f80ed'/>
            <Flex justifyContent='center' alignItems='center' position='absolute' w='1.3rem' h='1.3rem' 
                right='-0.3rem' top='0.1rem' borderRadius='50%' bgColor='#99cbf7' color='white' 
                boxSizing='border-box' fontSize='1rem'
            >
                7
            </Flex>
        </HStack>
      
    </Flex>
  )
}

export default Header;
