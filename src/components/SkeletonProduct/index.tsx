import { Box, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const SkeletonProduct = () => (
<Skeleton padding='6' w='400px' boxShadow='lg'>
  <Box>
  <SkeletonText mt='4' spacing='4' />
  <SkeletonText mt='4' spacing='4' />
  </Box>
</Skeleton>
)

export default SkeletonProduct
