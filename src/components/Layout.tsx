import { FC, ReactNode } from "react";
import Head from "next/head";
import { Header } from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer";
import { Container } from "@mantine/core";

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children, title = "My Web Site" }) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  );
};
