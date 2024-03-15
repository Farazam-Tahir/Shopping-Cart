import { Box, Button, Divider, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { cartContext } from '../App';
// import Products from './Data';

const Cart = () => {
    const Products = useContext(cartContext); 
  return (
    <Box width='100%' bgColor='aliceblue' minH='70vh' borderRadius='20px' padding='40px 50px' mb={5}>
      <VStack overflowY='scroll' w='100%' h='40vh' gap='50px' objectFit='cover' padding='20px'>
          {
            Products.map((Product)=>{
                return(
                    <>
                    <HStack width='100%' justifyContent='space-between' key={Product.id} h='60px' >
            
                        <Box w='20%' h='100%'>
                            <Image src={Product.img} w='100%' h='100%' objectFit='contain'/>
                        </Box>
                        
                        <Box w='20%' display='flex' flexDirection='column'>
                            <Heading fontSize='1rem'>{Product.title}</Heading>
                            <Text textTransform='capitalize'>{Product.description}</Text>
                        </Box>
                        
                        <Box w='20%' display='flex' justifyContent='center'>
                            <HStack>
                                <Image src='./images/decr.png' w='0.5rem' />
                                <Button shadow='lg' border='1px solid gray'>1</Button>
                                <Image src='./images/incr.png'w='0.5rem'/>
                            </HStack>
                        </Box>

                        <Box w='10%' display='flex' justifyContent='center'>
                            Rs {Product.price}
                        </Box>
                        
                        <Box w='10%' display='flex' justifyContent='center'>
                            <Image src='./images/delete.png' w='1rem'/>
                        </Box>

                    </HStack>
                    <Divider/>
                    </>
                )
            })
          }   
      </VStack>

      <Box float='right' mt='30px'>
        <Text fontWeight='bold' fontSize={'xx-large'}>Cart Total: <span>5000</span></Text>
        <Button colorScheme='blue'>Checkout</Button>
      </Box>
    </Box>
  )
}

export default Cart;
