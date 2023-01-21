import { Container, Group, Image } from "@mantine/core";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Container>
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
      {/* <Container className="xl"> */}
        <Image
          // width={1440}
          // height={480}
          src="https://source.unsplash.com/random/1480x480/"
          alt="Unsplash image"
        />
      {/* </Container> */}
    </div>
  );
};

export default Home;
