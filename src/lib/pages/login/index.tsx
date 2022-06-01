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
  Text,
  Spinner,
} from "@chakra-ui/react";
import type * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "lib/assets/background.png";
import Logo from "lib/assets/logo-dark.png";
import "./Login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      if (email === "test@test.com" && password == "testtest") {
        localStorage.setItem("auth", "success");
        navigate("/home");
      } else {
        setError("Login Failed.");
      }
      setLoading(false);
    }, 2000);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  return (
    <Flex
      align="center"
      minH="100vh"
      className="login-screen"
      bgImage={BackgroundImage}
    >
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
              <br />
              <Box mb="8" textAlign={{ base: "center", md: "start" }}>
                <Heading size="lg" mb="2" fontWeight="extrabold">
                  Login
                </Heading>
              </Box>
              <form onSubmit={onSubmit}>
                <Stack spacing="4">
                  <FormControl id="email">
                    <Input
                      type="email"
                      autoComplete="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    fontSize="md"
                    disabled={disabled || loading}
                  >
                    {loading ? <Spinner /> : <Text>Submit</Text>}
                  </Button>
                  {error && (
                    <Text color="red" textAlign="center" size="xs">
                      {error}
                    </Text>
                  )}
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
