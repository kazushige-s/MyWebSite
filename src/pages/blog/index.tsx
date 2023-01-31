import { Layout } from "@/src/components/Layout";
import React from "react";
import { client } from "@/src/libs/client";
import { GetStaticProps, NextPage } from "next";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import {
  Card,
  Center,
  Container,
  Grid,
  Group,
  Image,
  Text,
} from "@mantine/core";
import dayjs from "dayjs";

export type Blog = {
  id: string;
  name: string;
  title: string;
  content: string;
  createdAt: string;
  publishedAt: string;
  eyecatch: {
    url: string;
  };
};

type Props = MicroCMSListResponse<Blog>;

const blog: NextPage<Props> = (props) => {
  return (
    <Layout title="Blog">
      <Center>
        <h2 className="font-bold">Blog</h2>
      </Center>

      <Grid>
        {props.contents.map((content) => (
          <Grid.Col span={12} xs={6} sm={4} key={content.id}>
            <Link href={`/blog/${content.id}`} className="no-underline">
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    // src="https://source.unsplash.com/random"
                    src={content.eyecatch.url}
                    alt="image"
                    height={160}
                    withPlaceholder
                  />
                </Card.Section>
                <Group position="apart">
                  <Text weight={700}>{content.title}</Text>
                  {/* <Text color="dimmed" truncate lineClamp={2}>
                    <small
                      dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                  </Text> */}
                  <time
                    dateTime={content.publishedAt}
                    className="text-right text-gray-500"
                  >
                    {dayjs(content.publishedAt).format("YYYY-MM-DD")}
                  </time>
                </Group>
              </Card>
            </Link>
          </Grid.Col>
        ))}
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blogs" });
  return {
    props: data,
  };
};

export default blog;
