import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Img,
  FormControl,
  Input,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import type * as React from "react";

import BackgroundImage from "lib/assets/background.png";
import Logo from "lib/assets/logo-dark.png";

const Login: React.FC = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Flex align="center" minH="100vh" bgImage={BackgroundImage}>
      <Box
        maxW="6xl"
        mx="auto"
        py={{ base: "10", md: "20" }}
        px={{ base: "4", md: "10" }}
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="14">
          <Flex align="center" py="24" display={{ base: "none", lg: "flex" }}>
            <Heading color="white" as="h2" size="3xl" noOfLines={3}>
              Site Inventory Management System (SIMS)
            </Heading>
          </Flex>

          <Box w="full" maxW="xl" mx="auto">
            <Box
              bg={{ md: mode("white", "gray.700") }}
              rounded={{ md: "2xl" }}
              p={{ base: "4", md: "12" }}
              borderWidth={{ md: "1px" }}
              borderColor={mode("gray.200", "transparent")}
              shadow={{ md: "lg" }}
            >
              <Img alt="logo" objectFit="cover" src={Logo} />
              <Box mb="8" textAlign={{ base: "center", md: "start" }}>
                <Heading size="lg" mb="2" fontWeight="extrabold">
                  Login
                </Heading>
              </Box>
              <form onSubmit={onSubmit}>
                <Stack spacing="4">
                  <FormControl id="email">
                    <Input type="email" autoComplete="email" />
                  </FormControl>
                  <FormControl>
                    <Input type="password" autoComplete="current-password" />
                  </FormControl>
                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    fontSize="md"
                  >
                    Submit
                  </Button>
                </Stack>
              </form>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Login;
