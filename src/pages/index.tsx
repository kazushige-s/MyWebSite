import { Hero } from "src/components/Hero";
import { Info } from "src/components/Info";
import { NextPage } from "next";
import { Layout } from "@/src/components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="My Web Site">
        <Hero />
        <Info />
      </Layout>
    </>
  );
};

export default Home;
