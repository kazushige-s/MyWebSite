import { Container, Group } from "@mantine/core";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="ml-3 font-mono text-2xl font-bold text-black no-underline"
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
