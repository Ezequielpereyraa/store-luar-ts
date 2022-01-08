import { Center, Image } from '@chakra-ui/react'
import logo from '../../assets/luar.jpg'

const Header = () => {
  return (
    <Center bg='brand.primary'>
      <Image objectFit='cover' maxH='290px' src={logo} alt='logo Luar' />
    </Center>
  )
}

export default Header
