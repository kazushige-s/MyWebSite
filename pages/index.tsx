import { Container, Group, Text } from "@mantine/core";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Container className="xl">
        <div className="flex h-20 items-center justify-center gap-60">
          <Link
            href="/"
            className="font-mono text-2xl font-bold text-black no-underline"
          >
            My Web Site
          </Link>
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
        </div>
      </Container>
    </>
  );
};

export default Home;
