import { Fragment } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  Text,
  useDisclosure,
  useColorModeValue,
  Stack,
  Img,
  Heading,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Logo from "lib/assets/logo.png";

interface IItem {
  name: string;
  value: string;
}

interface ILinks {
  name: string;
  value: string;
  child?: IItem[];
}

const Links: ILinks[] = [
  {
    name: "Dashboard",
    value: "/",
  },
  {
    name: "Site Search",
    value: "/",
  },
  {
    name: "Add Sites",
    value: "/",
    child: [
      {
        name: "Bulk Upload",
        value: "/bulk-upload",
      },
      {
        name: "Invidual Upload",
        value: "/individual-upload",
      },
    ],
  },
  {
    name: "Carrier interest Search",
    value: "",
  },
];

const NavLink = ({ key, children }: { key: any; children: ILinks }) => (
  <Fragment key={key}>
    {children.child ? (
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          fontWeight="normal"
          bg="white"
        >
          {children.name}
        </MenuButton>
        <MenuList>
          {children.child.map((item, index) => (
            <MenuItem key={index}>
              <Link
                href={item.value}
                _hover={{
                  textDecoration: "none",
                }}
              >
                {item.name}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    ) : (
      <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href={"#"}
      >
        {children.name}
      </Link>
    )}
  </Fragment>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            justify="center"
            flexGrow={1}
          >
            <Box>
              <Img height="100%" alt="logo" objectFit="cover" src={Logo} />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              justify="center"
              flexGrow={1}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, index) => (
                <NavLink key={index}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Box textAlign="right" mr={2}>
              <Heading fontSize="md">John Doe</Heading>
              <Text fontSize="sm">Admin</Text>
            </Box>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, index) => (
                <NavLink key={index}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
