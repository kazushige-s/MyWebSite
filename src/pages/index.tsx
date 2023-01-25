import { Footer } from "src/components/Footer";
import { Header } from "@/src/components/Header/Header";
import { Hero } from "src/components/Hero";
import { Info } from "src/components/Info";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Info />
      <Footer />
    </>
  );
};

export default Home;
