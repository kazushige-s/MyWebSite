import React from "react";
import { PcHeader } from "@/src/components/Header/PcHeader";
import { SpHeader } from "@/src/components/Header/SpHeader";
import { ActionIcon, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import { Moon } from "tabler-icons-react";

export const Header = () => {
  const media = useMediaQuery("(min-width: 768px)");

  return (
    <Container>
      <header className="flex h-20 items-center justify-between">
        {/* スマホ用ヘッダー */}
        {media ? null : <SpHeader />}

        <Link
          href="/"
          className="ml-3 font-mono text-2xl font-bold text-black no-underline"
        >
          My Web Site
        </Link>

        <nav className="flex gap-4">
          {/* PC用ヘッダー */}
          {!media ? null : <PcHeader />}

          {/* ダークモード切り替えボタン */}
          <ActionIcon color="dark" size="lg" variant="outline">
            <Moon />
          </ActionIcon>
        </nav>
      </header>
    </Container>
  );
};
