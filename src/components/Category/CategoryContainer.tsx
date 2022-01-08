import { Box, Stack } from '@chakra-ui/react'
import Category from '.'
import { ICategory } from '../interface'

interface ICategoryContainerProps {
  categories: ICategory[]
}

const CategoryContianer = ({ categories } : ICategoryContainerProps) => {
  return (
    <Stack p='5' direction='row' flexWrap='wrap' justifyContent='center' alignItems='center'>
      {categories.length && categories.map((categorie: ICategory, idx: number) => (
        <Box m='2' key={idx}>
          <Category nameCategory={categorie.Categories} />
        </Box>
      ))
      }
    </Stack>
  )
}
export default CategoryContianer
