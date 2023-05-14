import { Layout } from "@/src/components/Layout";
import { client } from "@/src/libs/client";
import { Blog } from "@/src/pages/blog";
import { Divider, Image } from "@mantine/core";
import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  // console.log(props);

  return (
    <div>
      <Layout title="Blog">
        <h1 className="m-0">{props.title}</h1>
        <time dateTime={props.publishedAt} className="ml-5">
          {dayjs(props.publishedAt).format("YYYY-MM-DD HH:mm:ss")}
        </time>
        <Divider my="sm" />
        <Image
          src={props.eyecatch.url}
          alt="image"
          height={300}
          withPlaceholder
          fit="scale-down"
        />
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </Layout>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "blogs" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{}, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) return { notFound: true };
  const data = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId: ctx.params.id,
  });

  return {
    props: data,
  };
};

export default BlogId;
