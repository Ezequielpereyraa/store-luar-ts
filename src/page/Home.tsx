import { Stack, Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import CategoryContianer from '../components/Category/CategoryContainer'
import Header from '../components/Header'
import HeadingMessage from '../components/Heading'
import { ICategory, IProduct } from '../components/interface'
import InputSearch from '../components/InputSearch'
import getProducts, { getCategories } from '../components/utils/api'
import WelcomModal from '../components/WelcomModal'
import ErrorBoundary from '../components/ErrorBoundary'
import ProductsContainer from '../components/Products/ProductsContainer'
// import { getCategories, getProducts } from '../components/utils/api'
// import { useQuery } from 'react-query'

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [categories, setCategories] = useState<ICategory[]>([])
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    getCategories().then(setCategories)
    setTimeout(() => getProducts().then(setProducts), 3000)
  }, [])

  const filterCategory = categories.filter(({ mensaje }) => !mensaje)
  const messageWelcom = categories.filter(({ mensaje }) => mensaje)

  return (
    <ErrorBoundary>
      <Stack>
        {isOpen && <WelcomModal isOpen={isOpen} setIsOpen={setIsOpen} />}
        <Header />
        <HeadingMessage message={messageWelcom} />
        <CategoryContianer categories={filterCategory} />
        <InputSearch />
        <ProductsContainer products={products} />
      </Stack>
    </ErrorBoundary>
  )
}

export default Home
