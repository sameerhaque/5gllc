import type * as React from "react";
import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue as mode,
  HStack,
  Link,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import BulkSVG from "../../assets/SVGs/bulk.svg";
import IndividualSVG from "../../assets/SVGs/individual.svg";
import "./style.css";

enum Page {
  BULK = `bulk`,
  INDIVIDUAL = `individual`,
}

const UploadMain: React.FC<any> = ({ children }) => {
  const location = useLocation();
  const [page, setPage] = useState(``);

  useEffect(() => {
    if (location.pathname.includes(Page.BULK)) setPage(Page.BULK);
    else setPage(Page.INDIVIDUAL);
  }, [location]);

  return (
    <Box py="12" h="100%">
      <Box maxW={{ base: "xl", md: "7xl" }} mx="auto" px="5">
        <Heading as="h1" mb="5">
          {page === Page.BULK ? `Bulk Upload` : `Individual Upload`}
        </Heading>
        <Box
          rounded="lg"
          minH="xs"
          bg={mode("white", "gray.700")}
          mx="auto"
          shadow="base"
        >
          <Flex align="center" px="6" py="4">
            <Link href="/individual-upload" _hover={{ textDecoration: "none" }}>
              <HStack
                borderBottom="solid"
                borderBottomColor={
                  page === Page.INDIVIDUAL ? "#3ED4DA" : "gray.200"
                }
                borderBottomWidth={1}
                py={2}
                px={5}
              >
                <Image
                  width={5}
                  height={5}
                  src={IndividualSVG}
                  display={page === Page.INDIVIDUAL ? "block" : "none"}
                />
                <Text
                  as="h3"
                  fontWeight="bold"
                  fontSize="sm"
                  color={page === Page.INDIVIDUAL ? "#012076" : "black"}
                >
                  Individual Upload
                </Text>
              </HStack>
            </Link>
            <Link href="/bulk-upload" _hover={{ textDecoration: "none" }}>
              <HStack
                borderBottom="solid"
                borderBottomColor={page === Page.BULK ? "#3ED4DA" : "gray.200"}
                borderBottomWidth={1}
                py={2}
                px={5}
              >
                <Image
                  width={5}
                  height={5}
                  src={BulkSVG}
                  display={page === Page.BULK ? "block" : "none"}
                />
                <Text
                  as="h3"
                  fontWeight="bold"
                  fontSize="sm"
                  color={page === Page.BULK ? "#012076" : "black"}
                >
                  Bulk Upload
                </Text>
              </HStack>
            </Link>
          </Flex>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default UploadMain;
