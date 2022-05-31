import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export const TableActions = () => {
  return (
    <HStack justifyContent="flex-end" spacing="4">
      <FormControl maxW={{ md: "320px" }} id="search" p={3}>
        <InputGroup size="sm" alignItems="center">
          <FormLabel srOnly>Search</FormLabel>
          <InputLeftElement pointerEvents="none" color="gray.400" mt={1}>
            <BsSearch />
          </InputLeftElement>
          <Input
            rounded="base"
            type="search"
            placeholder="Search"
            h={10}
            backgroundColor="gray.100"
            color="gray.500"
            border="unset"
          />
        </InputGroup>
      </FormControl>
    </HStack>
  );
};
