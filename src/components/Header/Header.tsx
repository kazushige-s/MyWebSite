import React from "react";
import { PcHeader } from "@/src/components/Header/PcHeader";
import { SpHeader } from "@/src/components/Header/SpHeader";
import { ActionIcon, Container, useMantineColorScheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import { Moon, Sun } from "tabler-icons-react";

export const Header = () => {
  const media = useMediaQuery("(min-width: 768px)");

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* スマホ用ヘッダー */}
          {media ? null : <SpHeader />}

          <Link href="/" className="ml-3 font-mono text-2xl font-bold">
            My Web Site
          </Link>

          <nav className="flex gap-4">
            {/* PC用ヘッダー */}
            {!media ? null : <PcHeader />}

            {/* ダークモード切り替えボタン */}
            <ActionIcon
              variant="outline"
              color={dark ? "yellow" : "blue"}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </ActionIcon>
          </nav>
        </div>
      </Container>
  );
};
