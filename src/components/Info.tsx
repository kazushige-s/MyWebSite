import { Center, Container, Group, Text } from "@mantine/core";
import React from "react";

export const Info = () => {
  return (
    <>
      <Container className="mx-auto mt-10">
        <Container size="sm" className="border-solid">
          <Center>
            <Text className="my-5 text-2xl font-bold">最新記事</Text>
          </Center>
          <ol className="m-0 mb-5">
            <li>ダークモードボタンは未対応(勉強中…)</li>
            <li>テスト</li>
            <li>テスト</li>
            <li>テスト</li>
            <li>テスト</li>
          </ol>
        </Container>
      </Container>
    </>
  );
};
