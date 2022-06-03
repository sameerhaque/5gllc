import { Box, Button, Checkbox, Flex, Heading, HStack, IconButton, Image, Select, Text } from '@chakra-ui/react'

import type * as React from 'react'
import BadgeIcon from './BadgeIcon'
import Dots from '../../assets/SVGs/dots.svg'

export enum Status {
  SUCCESSFUL = `successful`,
  WARNING = `warning`,
  FAILED = `failed`
}

export interface UploadItem {
  batch: string
  sites: number
  date: string
  status: Status.SUCCESSFUL | Status.WARNING | Status.FAILED
  user: string
}

interface PreviousUploadProps {
  lists: UploadItem[]
}

const RenderItem: React.FC<UploadItem> = ({ batch, sites, user, date, status }) => {
  const getBadge = () => {
    let bgColor = ``
    let title = ``
    switch (status) {
      case Status.SUCCESSFUL:
        bgColor = `#28C66F`
        title = `SUCCESSFUL - NO ERRORS`
        break
      case Status.WARNING:
        bgColor = `#FFAB00`
        title = `SUCCESSFUL - WITH ERRORS`
        break
      case Status.FAILED:
        bgColor = `#EC5453`
        title = `FAILED UPLOAD`
        break
      default:
        break
    }
    return { bgColor, title }
  }

  return (
    <Flex py={5} alignItems="center">
      <Box width="5%" display="flex" alignItems="center" justifyContent="center">
        <BadgeIcon color={getBadge().bgColor} />
      </Box>
      <Box width="10%" textAlign="center">
        <Text>{`#${batch}`}</Text>
      </Box>
      <Box width="15%" textAlign="center">
        <Text>{sites} sites</Text>
      </Box>
      <Box width="20%" textAlign="center">
        <Text>{date}</Text>
      </Box>
      <Box width="25%" display="flex" alignItems="center" justifyContent="center">
        <Box border={`1px solid ${getBadge().bgColor}`} color={getBadge().bgColor} p={0} width="75%" textAlign="center">
          <Text fontSize={12}>{getBadge().title}</Text>
        </Box>
      </Box>
      <Box width="20%" textAlign="center">
        <Text>{user}</Text>
      </Box>
      <Box width="5%">
        <IconButton variant="ghost" aria-label="datepicker left button" icon={<Image src={Dots} />} />
      </Box>
    </Flex>
  )
}

const PreviousUploads: React.FC<PreviousUploadProps> = ({ lists }) => {
  return (
    <Box mt={10}>
      <Heading
        as="h3"
        pb={1}
        fontWeight="bold"
        fontSize="3xl"
        //   borderBottom="1px solid #BBBBBB"
      >
        Previous Uploads
      </Heading>
      <Box className="prev-actions-handle" py={3}>
        <HStack borderRadius={10} border="1px solid #F3F3F3">
          <Button backgroundColor="#012076" color="white" fontWeight={400}>
            All
          </Button>
          <Button backgroundColor="white" fontWeight={400}>
            Successful
          </Button>
          <Button backgroundColor="white" fontWeight={400}>
            Warning
          </Button>
          <Button backgroundColor="white" fontWeight={400}>
            Failed
          </Button>
        </HStack>
        <HStack className="right-selection">
          <Select placeholder="Date" />
          <Select placeholder="Status" />
          <Select placeholder="User" />
        </HStack>
      </Box>
      <Flex borderRadius={10} my={3} border="1px solid #F3F3F3" alignItems="center" py={2}>
        <Box width="5%" display="flex" alignItems="center" justifyContent="center">
          <Checkbox />
        </Box>
        <Box width="10%" textAlign="center">
          <Text>Batch #</Text>
        </Box>
        <Box width="15%" textAlign="center">
          <Text># Of Sites</Text>
        </Box>
        <Box width="20%" textAlign="center">
          <Text>Date</Text>
        </Box>
        <Box width="25%" textAlign="center">
          <Text>Status</Text>
        </Box>
        <Box width="20%" textAlign="center">
          <Text>User</Text>
        </Box>
        <Box width="5%" />
      </Flex>
      {lists.map((list, idx) => (
        <RenderItem
          key={idx.toString()}
          batch={list.batch}
          status={list.status}
          date={list.date}
          user={list.user}
          sites={list.sites}
        />
      ))}
    </Box>
  )
}

export default PreviousUploads
