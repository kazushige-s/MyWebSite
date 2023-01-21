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
            <Link href="/profile" className="no-underline">
              プロフィール
            </Link>
            <Link href="/blog" className="no-underline">
              ブログ
            </Link>
            <Link href="/news" className="no-underline">
              ポートフォリオ
            </Link>
            <Link href="/blog" className="no-underline">
              お問い合わせ
            </Link>
          </Group>
        </div>
      </Container>
    </>
  );
};

export default Home;
