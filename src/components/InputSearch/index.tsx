import { Input, Icon, Flex, useColorMode } from '@chakra-ui/react'
import React, { SetStateAction, useState } from 'react'
import { HiSearch } from 'react-icons/hi'

const index = () => {
  const [textProduct, setTextProduct] = useState<HTMLInputElement | string>('')
  const inputRef = React.useRef<HTMLInputElement>(null)

  const { colorMode } = useColorMode()
  const modoCheck = colorMode === 'light' ? 'gray.200' : 'gray.700'

  const handleChange = () => {
    const value = inputRef.current?.value
    setTextProduct(value)
  }
  console.log(textProduct)
  return (
    <Flex alignItems='center' justifyContent='center'>
      <Flex p='2.5' alignItems='center' bg={modoCheck} borderTopRadius='4' borderBottomLeftRadius='4' mr='-0.5'>
      <Icon as={HiSearch}/>
      </Flex>
      <Input ref={inputRef} onChange={handleChange} placeholder='Busca tu producto' variant='filled' textAlign='center' w='90'/>
    </Flex>
  )
}

export default index
