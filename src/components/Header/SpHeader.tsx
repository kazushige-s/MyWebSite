import { MENU } from "@/src/components/Header/menu";
import { SnsItem } from "@/src/components/SNS/SnsItem";
import { ActionIcon, Burger, Drawer, Group } from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";
import { X } from "tabler-icons-react";

export const SpHeader = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div>
      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        title={title}
      />
      {opened && (
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          padding="xl"
          size="sm"
          withCloseButton={false}
          transition="fade"
          transitionDuration={250}
          transitionTimingFunction="ease"
        >
          {/* 閉じるボタン */}
          <ActionIcon
            color="dark"
            size="lg"
            variant="light"
            onClick={() => setOpened(false)}
          >
            <X />
          </ActionIcon>

          {/* メニュー */}
          <Group className="mt-5 flex-col items-start">
            {MENU.map((item, i) => {
              return (
                <ul key={i} className="m-0 list-none p-0">
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

          {/* SNS */}
          <div className="mt-10">
            <SnsItem />
          </div>
        </Drawer>
      )}
    </div>
  );
};
