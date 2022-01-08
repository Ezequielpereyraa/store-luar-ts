import { Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { ICategory } from '../interface'

interface IMessage {
  message: ICategory[]
}

const HeadingMessage: React.FC<IMessage> = ({ message }) => {
  if (!message.length) return null
  return (
    <Flex h='auto' bg='brand.secondary' mt={'-10px !important'} p='4' >
      <Center textAlign='center' w='100%'>
      <Text fontSize='3xl' textColor='brand.primary' fontWeight='black' textShadow='1px 1px 1px rgba(0,0,0,0.25)' >
        {message && message?.[0].Categories}
      </Text>
      </Center>
    </Flex>
  )
}
export default HeadingMessage
