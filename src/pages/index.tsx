import { Hero } from "src/components/Hero";
import { Info } from "src/components/Info";
import { NextPage } from "next";
import { Layout } from "@/src/components/Layout";
import { AdArea } from "@/src/components/AdArea/AdArea";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="My Web Site">
        <Hero />
        <Info />
        <AdArea />
      </Layout>
    </>
  );
};

export default Home;
