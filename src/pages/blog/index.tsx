import { Layout } from "@/src/components/Layout";
import React from "react";
import { client } from "@/src/libs/client";
import { GetStaticProps, NextPage } from "next";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import { Container } from "@mantine/core";

export type Blog = {
  id: string;
  name: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

type Props = MicroCMSListResponse<Blog>;

const blog: NextPage<Props> = (props) => {
  return (
    <Layout title="Blog">
      <Container>
        <div>
          <h1 className="font-bold">Blog</h1>
          <ol>
            {props.contents.map((content) => (
              <li key={content.id} className="mt-3">
                <Link
                  href={`/blog/${content.id}`}
                  className="
                text-lg
                text-black
                hover:text-blue-500"
                  no-underline
                >
                  {content.title}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Container>
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
