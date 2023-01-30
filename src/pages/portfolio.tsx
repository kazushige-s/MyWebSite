import { Layout } from "@/src/components/Layout";
import { Button, Center, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import React from "react";
import { BrandGithub } from "tabler-icons-react";

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
          src="https://source.unsplash.com/featured/?programing/"
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
            このサイトです。Next.js、TypeScript、CSSはTailwindCSSを使用して制作しています。
            UIライブラリはMantineを使用しています。
            ブログ部分及びお問い合わせページはMicroCMSを使用しています。
          </Text>
          <Link href="https://github.com/kazushige-s/MyWebSite" target="_blank">
            <Button mt={10} leftIcon={<BrandGithub />} variant="outline">
              GitHubページへ
            </Button>
          </Link>
        </span>
      </div>
    </Layout>
  );
};

export default Portfolio;
