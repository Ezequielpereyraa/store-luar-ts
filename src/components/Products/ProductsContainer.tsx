import { Stack } from '@chakra-ui/react'
import React from 'react'
import { IProduct } from '../interface'
import Loader from '../Loader'
import Products from './Products'

interface IProductsProps {
  products: IProduct[]
}

const ProductsContainer: React.FC<IProductsProps> = ({ products }) => {
  if (!products.length) return <Loader />
  return (
    <Stack p='6'>
      {products.map((product: IProduct, idx: number) => (
      <Products product={product} key={idx} />
      ))}
    </Stack>
  )
}

export default ProductsContainer
