import {
  ChakraProvider,
  Box,
  theme
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import Home from './page/Home'
import './styles/styles.css'
import { myNewTheme } from './styles/theme'

export const App = () => (
  <ChakraProvider theme={myNewTheme}>
    <Box textAlign="center" fontSize="xl">
        <ColorModeSwitcher justifySelf="flex-end" position='absolute' top='2' right='2'/>
        <Home />
    </Box>
  </ChakraProvider>
)
