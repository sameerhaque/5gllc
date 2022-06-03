import { Box, Button, FormLabel, HStack, Input, Select, VStack } from '@chakra-ui/react'

const IndividualUpload = () => {
  return (
    <VStack py={12} h="100%">
      <Box p={3}>
        <form>
          <HStack pt={5}>
            <FormLabel htmlFor="addressLine1" fontWeight={400} color="#656565" width="25%">
              Address Line 1 :
            </FormLabel>
            <Input placeholder="Address Line 1" width="75%" />
          </HStack>
          <HStack pt={5}>
            <FormLabel htmlFor="addressLine2" fontWeight={400} color="#656565" width="25%">
              Address Line 2 :
            </FormLabel>
            <Input placeholder="Address Line 2" width="75%" />
          </HStack>
          <Box className="sm-full-width">
            <HStack pt={5} w={{ md: '100%', lg: '50%' }}>
              <FormLabel htmlFor="city" fontWeight={400} color="#656565" width="30%">
                City :
              </FormLabel>
              <Input placeholder="City" width="70%" />
            </HStack>
            <HStack pt={5} className="right-bar" ml={10} w={{ md: '100%', lg: '50%' }}>
              <FormLabel htmlFor="city" fontWeight={400} color="#656565" width="30%">
                State :
              </FormLabel>
              <Input placeholder="State" width="70%" />
            </HStack>
          </Box>
          <Box className="sm-full-width">
            <HStack pt={5} w={{ md: '100%', lg: '50%' }}>
              <FormLabel htmlFor="country" fontWeight={400} color="#656565" width="30%">
                Country :
              </FormLabel>
              <Select placeholder="Choose Country" width="70%" />
            </HStack>
            <HStack pt={5} ml={10} w={{ md: '100%', lg: '50%' }} className="right-bar">
              <FormLabel htmlFor="Zip Code" fontWeight={400} color="#656565" width="30%">
                Zip Code :
              </FormLabel>
              <Input placeholder="Zip Code" width="70%" />
            </HStack>
          </Box>
        </form>
        <Button float="right" mt={30} backgroundColor="#012076" color="white" px={8}>
          Submit
        </Button>
      </Box>
    </VStack>
  )
}

export default IndividualUpload
