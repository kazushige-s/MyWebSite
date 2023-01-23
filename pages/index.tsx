import { Header } from "@/component/Header";
import { usePosts } from "@/hooks/usePosts";
import { Center, Container, Divider, Group, Image, Text } from "@mantine/core";
import { NextPage } from "next";
import Link from "next/link";
import { BrandGithub, BrandInstagram, BrandTwitter } from "tabler-icons-react";

const Home: NextPage = () => {
  const Posts = () => {
    const { data, error, isLoading, isEmpty } = usePosts();

    console.log(data);

    if (isLoading) {
      return <div>loading...</div>;
    }
    if (error) {
      return <div>failed to load</div>;
    }
    if (isEmpty) {
      return <div>no data</div>;
    }
    return (
      <ol>
        {data.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    );
  };

  return (
    <div>
        <Header />
      {/* ヒーロエリア */}
      {/* <Container className="xl"> */}
      <Image
        // width={1440}
        // height={480}
        src="https://source.unsplash.com/random/1480x480/"
        alt="Unsplash image"
      />
      {/* </Container> */}

      {/* 新着ブログ記事 */}
      <Container className="mx-auto mt-10 border-solid border-black">
        <Center>
          <Text className="my-10  text-2xl font-bold">最新記事</Text>
        </Center>
        <Group></Group>
      </Container>

      {/* フッター */}
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
    </div>
  );
};

export default Home;
