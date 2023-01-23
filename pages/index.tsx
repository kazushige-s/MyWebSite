import { Footer } from "@/component/Footer";
import { Header } from "@/component/Header";
import { Hero } from "@/component/Hero";
import { Info } from "@/component/Info";
import { usePosts } from "@/hooks/usePosts";
import { NextPage } from "next";

const Home: NextPage = () => {
  // ダミーのブログ部分は後回し
  // const Posts = () => {
  //   const { data, error, isLoading, isEmpty } = usePosts();

  //   console.log(data);

  //   if (isLoading) {
  //     return <div>loading...</div>;
  //   }
  //   if (error) {
  //     return <div>failed to load</div>;
  //   }
  //   if (isEmpty) {
  //     return <div>no data</div>;
  //   }
  //   return (
  //     <ol>
  //       {data.map((post: any) => (
  //         <li key={post.id}>{post.title}</li>
  //       ))}
  //     </ol>
  //   );
  // };

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
