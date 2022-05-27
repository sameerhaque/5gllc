import { Box, Heading, useColorModeValue as mode } from "@chakra-ui/react";
import { TableActions } from "lib/components/table/TableActions";
import { TableContent } from "lib/components/table/TableContent";
// import { TablePagination } from "lib/components/table/TablePagination";

const BlogList = () => {
  return (
    <Box py="12" h="100%">
      <Box maxW={{ base: "xl", md: "7xl" }} mx="auto" px="5">
        <Heading as="h1" mb="5">
          ICOP Blog List
        </Heading>
        <Box
          rounded="lg"
          minH="xs"
          bg={mode("white", "gray.700")}
          mx="auto"
          shadow="base"
        >
          <TableActions />
          <TableContent />
          {/* <TablePagination /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default BlogList;
