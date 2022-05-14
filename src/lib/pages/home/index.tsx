import * as React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Box py="12" h="100%">
      <Box maxW={{ base: "xl", md: "7xl" }} mx="auto" px="5">
        <Heading as="h1" mb="5">
          Dashboard
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem colSpan={{ base: 3, md: 1 }}>
            <Box
              rounded="lg"
              minH="xs"
              bg={mode("white", "gray.700")}
              mx="auto"
              shadow="base"
            >
              <Flex align="center" justify="space-between" px="6" py="4">
                <Text as="h3" fontWeight="bold" fontSize="lg">
                  Total sites categorized
                </Text>
              </Flex>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 3, md: 1 }}>
            <Box
              rounded="lg"
              minH="xs"
              bg={mode("white", "gray.700")}
              mx="auto"
              shadow="base"
            >
              <Flex align="center" justify="space-between" px="6" py="4">
                <Text as="h3" fontWeight="bold" fontSize="lg">
                  Executed sites
                </Text>
              </Flex>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 3, md: 1 }}>
            <Box
              rounded="lg"
              minH="xs"
              bg={mode("white", "gray.700")}
              mx="auto"
              shadow="base"
            >
              <Flex align="center" justify="space-between" px="6" py="4">
                <Text as="h3" fontWeight="bold" fontSize="lg">
                  Sites in progress
                </Text>
              </Flex>
            </Box>
          </GridItem>
          <GridItem colSpan={3}>
            <Box
              rounded="lg"
              minH="xs"
              bg={mode("white", "gray.700")}
              mx="auto"
              shadow="base"
            >
              <Flex align="center" justify="space-between" px="6" py="4">
                <Text as="h3" fontWeight="bold" fontSize="lg">
                  Total sites categorized
                </Text>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
