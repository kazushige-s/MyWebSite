import {
  Center,
  Container,
  Text,
} from "@mantine/core";
import React from "react";

export const Info = () => {
  return (
    <>
      <Container className="mx-auto mt-10 ">
        <Container size="sm" className="border-solid">
            <Center>
              <Text className="my-5 text-2xl font-bold underline">お知らせ</Text>
            </Center>
            <ul className="m-0 mb-5">
              <li>ダークモードボタンは工事中</li>
              <li>お問い合わせフォームも裏側を工事中</li>
              <li>写真はすべてunsplashから取ってきたダミーの画像です</li>
            </ul>
        </Container>
      </Container>
    </>
  );
};
