"use client";
import Link from "next/link";
import {
  Flex,
  Box,
  Heading,
  Spacer,
  Avatar,
  Button,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  ButtonGroup,
} from "..";
import { FC, useState } from "react";
type NavbarProps = {
  title: string;
};
export const Navbar: FC<NavbarProps> = ({ title }) => {
  const [flag, setFlag] = useState(false);
  const changeFlag = () => {
    setFlag(!flag);
  };

  return (
    <header>
      <Flex
        as={"nav"}
        align={"center"}
        justify={"space-between"}
        p={{ base: 3, md: 4 }}
        borderBottom={"1px solid #e2e8f0"}
        bg={"yellow.50"}
      >
        <Box p={2}>
          <Heading size="md">{title}</Heading>
        </Box>
        <Spacer />
        <Box p={2}>
          <Heading size="md">投稿ページ</Heading>
        </Box>
        <Box>
          {flag ? (
            <Button onClick={changeFlag} bg={"red.300"} colorScheme="teal">
              Log in
            </Button>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Avatar src="" />
              </PopoverTrigger>
              <PopoverContent w={"100"} bg={"white"}>
                <Stack>
                  <Button onClick={changeFlag}>Logout</Button>
                </Stack>
              </PopoverContent>
            </Popover>
          )}
        </Box>
      </Flex>
    </header>
  );
};
