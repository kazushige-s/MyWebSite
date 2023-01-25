import { MENU } from "@/src/components/Header/menu";
import { Group } from "@mantine/core";
import Link from "next/link";
import React from "react";

export const PcHeader = () => {
  return (
    <Group>
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
  );
};
