import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import type { ReactNode } from 'react'

import Header from './Header'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Header />
      <Box flexGrow={1} bg={useColorModeValue('gray.100', 'gray.800')}>
        {children}
      </Box>
    </Flex>
  )
}

export default Layout
