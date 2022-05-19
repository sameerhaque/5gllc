import { AspectRatio, Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import PreviousUploads, { Status, UploadItem } from "./PreviousUpload";

const lists: UploadItem[] = [
  {
    batch: "#5036",
    sites: 24,
    date: "1 May 2022",
    status: Status.SUCCESSFUL,
    user: "John Smith",
  },
  {
    batch: "#5036",
    sites: 24,
    date: "1 May 2022",
    status: Status.WARNING,
    user: "John Smith",
  },
  {
    batch: "#5036",
    sites: 24,
    date: "1 May 2022",
    status: Status.FAILED,
    user: "John Smith",
  },
];

const BulkUpload = () => {
  const controls = useAnimation();
  const startAnimation = () => controls.start("hover");
  const stopAnimation = () => controls.stop();

  return (
    <Box p={10} height={"100%"}>
      <AspectRatio width={"100%"} height={200}>
        <Box
          borderColor="gray.300"
          borderStyle="dashed"
          borderWidth="1px"
          rounded="md"
          shadow="sm"
          role="group"
          transition="all 150ms ease-in-out"
          _hover={{
            shadow: "md",
          }}
          as={motion.div}
          initial="rest"
          animate="rest"
          w={"100%"}
          whileHover="hover"
        >
          <Box position="relative" height="100%" width="100%">
            <Box
              position="absolute"
              top="0"
              left="0"
              height="100%"
              width="100%"
              display="flex"
              flexDirection="column"
            >
              <Stack
                height="100%"
                width="100%"
                display="flex"
                alignItems="center"
                justify="center"
                spacing="4"
              >
                <Stack
                  p="8"
                  textAlign="center"
                  spacing="1"
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Text fontWeight="light" mb={15}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam eleifend cursus enim id tempus.
                  </Text>
                  <Button backgroundColor={"#012076"} color={"white"} w={150}>
                    Upload File
                  </Button>
                </Stack>
              </Stack>
            </Box>
            <Input
              type="file"
              height="100%"
              width="100%"
              position="absolute"
              top="0"
              left="0"
              opacity="0"
              aria-hidden="true"
              accept="image/*"
              onDragEnter={startAnimation}
              onDragLeave={stopAnimation}
            />
          </Box>
        </Box>
      </AspectRatio>
      <PreviousUploads lists={lists} />
    </Box>
  );
};

export default BulkUpload;
