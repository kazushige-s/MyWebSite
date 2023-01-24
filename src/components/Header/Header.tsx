import { MENU } from "@/src/components/Header/menu";
import { Burger, Container, Group, MediaQuery } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import React from "react";

export const Header = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <Container>
      <MediaQuery largerThan="xs" styles={{ display: "none" }}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          title={title}
        />
      </MediaQuery>

      <div className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="ml-3 font-mono text-2xl font-bold text-black no-underline"
        >
          My Web Site
        </Link>

        <Group>
          {MENU.map((item) => {
            return (
              <ul key={item.href}>
                <li>
                  <Link
                    href={item.href}
                    className="text-black no-underline hover:text-blue-500"
                  >
                    {item.title}
                  </Link>
                </li>
              </ul>
            );
          })}
        </Group>
        
      </div>
    </Container>
  );
};
