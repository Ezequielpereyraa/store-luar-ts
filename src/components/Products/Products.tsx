import { Badge, Box, Image, SkeletonText, Text } from '@chakra-ui/react'
import React from 'react'
import { IProduct } from '../interface'
import SkeletonProduct from '../SkeletonProduct'
interface iProductProps {
  product: IProduct
}
const Products: React.FC<iProductProps> = ({ product }) => {
  const { product: name, description, price, img } = product

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'position='relative'>
      <Image src={img} alt={name} />
      <Box >
        <Text fontWeight='bold' textColor='brand.secondary' p='3' bgColor='brand.primaryDark'> {name} </Text>
        <Text textAlign='left' fontSize='md' m={[3, 1]}> {description} </Text>
        <Text textAlign='right' position='absolute' p='1' top='0' right='0' bgColor='brand.secondary' borderTopRightRadius='lg' borderBottomLeftRadius='lg' textColor='brand.primaryDark' fontSize='2xl' fontWeight='bold'> ${price}</Text>
      </Box>
    </Box>
  )
}

export default Products
