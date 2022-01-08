import { Grid, Spinner } from '@chakra-ui/react'

const Loader = () => (
  <Grid placeContent='center' mt='16' h='300px'>
    <Spinner size='xl' />
  </Grid>
)

export default Loader
