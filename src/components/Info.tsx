import { Accordion, Center, Container, Group, Text } from "@mantine/core";
import React from "react";

export const Info = () => {
  return (
    <>
      <Container className="mx-auto mt-10">
        <Container className="border-solid">
          <Center>
            <Text className="my-5 text-2xl font-bold">お知らせ</Text>
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
