import { Container, Divider, Group, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { BrandGithub, BrandInstagram, BrandTwitter } from "tabler-icons-react";

export const Footer = () => {
  return (
    <>
      <Divider my="lg" className="mt-20" />
      <Container className="flex justify-between">
        <Group className="ml-3">
          <Link target="_blank" href="https://twitter.com/eigablog_kazu">
            <BrandTwitter />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/eigasukisuki_kazu/"
          >
            <BrandInstagram />
          </Link>
          <Link target="_blank" href="https://github.com/kazushige-s">
            <BrandGithub />
          </Link>
        </Group>

        <Group>
          <Link
            href="/profile"
            className=" text-black no-underline hover:text-blue-500"
          >
            プロフィール
          </Link>
          <Link
            href="/blog"
            className="text-black no-underline  hover:text-blue-500"
          >
            ブログ
          </Link>
          <Link
            href="/news"
            className="text-black no-underline  hover:text-blue-500"
          >
            ポートフォリオ
          </Link>
          <Link
            href="/blog"
            className="text-black no-underline  hover:text-blue-500"
          >
            お問い合わせ
          </Link>
        </Group>
      </Container>
      <small>
        <Text className="my-8 text-center">&copy;2023 My Web Site</Text>
      </small>
    </>
  );
};
