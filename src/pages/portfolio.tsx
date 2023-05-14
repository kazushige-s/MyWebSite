import { Layout } from "@/src/components/Layout";
import { Button, Center, Image, Space, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import React from "react";
import { BrandGithub, ExternalLink } from "tabler-icons-react";

const Portfolio = () => {
  const media = useMediaQuery("(min-width: 768px)");

  return (
    <Layout title="Profile">
      <Center>
        <h2 className="mb-10 font-bold">ポートフォリオ</h2>
      </Center>
      <div className={media ? "mb-10 mt-12 flex h-60" : "h-min flex-col"}>
        <Image
          // src="@/public/mywebsite.png"
          src="https://source.unsplash.com/featured/?macbook/"
          alt="MyWebSite image"
          width={320}
          height={240}
          className="m-auto"
          withPlaceholder
        />
        <span className="ml-10">
          <Text fz="md" fw={700}>
            My Web Site
          </Text>
          <Text className="mt-3">
            このサイトです。Next.js、TypeScript、TailwindCSSを使用して制作しています。
            UIライブラリはMantineを使用しています。
            ブログ部分及びお問い合わせページはMicroCMSを使用して実装していますが、現在工事中です。
          </Text>
          <Link href="https://github.com/kazushige-s/MyWebSite" target="_blank">
            <Button mt={10} leftIcon={<BrandGithub />} variant="outline">
              GitHubページへ
            </Button>
          </Link>
          <Space h="xl" />
        </span>
      </div>

      <div className={media ? "mb-10 mt-12 flex h-60" : "h-min flex-col"}>
        <Image
          // src="@/public/mywebsite.png"
          src="https://picsum.photos/320/240"
          alt="simpletodo image"
          width={320}
          height={240}
          className="m-auto"
          withPlaceholder
        />
        <span className="ml-10">
          <Text fz="md" fw={700}>
            シンプルTodo
          </Text>
          <Text className="mt-3">
            シンプルなToDoアプリです。Next.js、TypeScript、TailwindCSSを使用して制作しています。
            バックエンドの機能は実装していません。
          </Text>
          <Link href="https://simple-todo-two-psi.vercel.app/" target="_blank">
            <Button mt={10} leftIcon={<ExternalLink />} variant="outline">
              シンプルToDo
            </Button>
          </Link>
          <br />
          <Link
            href="https://github.com/kazushige-s/SimpleTodo"
            target="_blank"
          >
            <Button mt={10} leftIcon={<BrandGithub />} variant="outline">
              GitHubページへ
            </Button>
          </Link>
          <Space h="xl" />
        </span>
      </div>

      <div className={media ? "mb-10 mt-12 flex h-60" : "h-min flex-col"}>
        <Image
          // src="@/public/mywebsite.png"
          src="https://picsum.photos/320/240"
          alt="pokemon image"
          width={320}
          height={240}
          className="m-auto"
          withPlaceholder
        />
        <span className="ml-10">
          <Text fz="md" fw={700}>
            ポケモン図鑑
          </Text>
          <Text className="mt-3">
            ポケモン図鑑です。Next.js、TypeScript、TailwindCSSを使用して制作しています。
            ポケモンのAPIを叩いてみました。
          </Text>
          <Link href="https://poke-lib-app.vercel.app/" target="_blank">
            <Button mt={10} leftIcon={<ExternalLink />} variant="outline">
              ポケモン図鑑
            </Button>
          </Link>
          <br />
          <Link
            href="https://github.com/kazushige-s/poke_lib_app"
            target="_blank"
          >
            <Button mt={10} leftIcon={<BrandGithub />} variant="outline">
              GitHubページへ
            </Button>
          </Link>
          <Space h="xl" />
        </span>
      </div>
    </Layout>
  );
};

export default Portfolio;
