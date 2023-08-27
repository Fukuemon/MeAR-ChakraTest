import { FC } from "react";

import { PROPS_PROFILE } from "@/types/Auth/types";
import { PROPS_POST } from "@/types/Post/types";
import {
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Stack,
  Heading,
  Text,
  Divider,
  Box,
  CardHeader,
  Flex,
  Avatar,
  HStack,
  Badge,
} from "../index";
import { DynamicModelViewer } from "../ModelViewer/DynamicModel";
import { Squada_One } from "next/font/google";
import { StarIcon } from "../index";

export const PostCard: FC<PROPS_POST> = ({
  menu_item_model,
  author,
  created_on,
  restaurant,
  menu_item,
}) => {
  return (
    <Card
      w={{ base: "100%", md: "400px", xl: "100%" }}
      rounded={"10"}
      shadow={"lg"}
    >
      <CardHeader h={"60px"} border={"1px"} borderColor="gray.200">
        <Flex align={"center"} justify={"space-between"}>
          <HStack>
            <Avatar size="sm" src="" />
            <Heading size="sm">{author}</Heading>
            <Divider orientation="vertical" />
          </HStack>
          <Text fontWeight="bold" color="blue.600" fontSize="">
            {created_on}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody pos={"relative"} p={0}>
        <Box
          w="auto"
          h={{ base: "200px", md: "360px", xl: "400px" }}
          border={"1px"}
          borderColor="gray.200"
        >
          <DynamicModelViewer src={menu_item_model} />
        </Box>
        <HStack align={"center"} justify={"space-between"}>
          <Stack p="4" spacing="3">
            <Heading size={{ base: "sm", md: "md" }}>{restaurant}</Heading>
            <Heading size={{ base: "sm", md: "md" }}>{menu_item}</Heading>
          </Stack>
          <Stack p="4" spacing="3">
            <Badge colorScheme="blue">3Dモデル</Badge>
            <StarIcon color="yellow" />
          </Stack>
        </HStack>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default PostCard;
