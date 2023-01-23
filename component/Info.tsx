import { Center, Container, Group, Text } from "@mantine/core";
import React from "react";

export const Info = () => {
  return (
    <Container className="mx-auto mt-10 border-solid border-black">
      <Center>
        <Text className="my-10  text-2xl font-bold">最新記事</Text>
      </Center>
      <Group></Group>
    </Container>
  );
};
