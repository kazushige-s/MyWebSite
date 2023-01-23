import { Footer } from "@/component/Footer";
import { Header } from "@/component/Header";
import { Hero } from "@/component/Hero";
import { Info } from "@/component/Info";
import { usePosts } from "@/hooks/usePosts";
import { Center, Container, Divider, Group, Text } from "@mantine/core";
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
      <Hero />
      <Info />
      <Footer />
    </div>
  );
};

export default Home;
