import { MENU } from "@/src/components/Header/menu";
import { SnsItem } from "@/src/components/SNS/SnsItem";
import { Container, Divider, Group, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  const media = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Divider my="lg" className="mt-20" />

      {!media ? null : (
        <Container className="flex justify-between">
          <SnsItem />
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
        </Container>
      )}
      <small>
        <Text className="my-8 text-center">&copy;2023 My Web Site</Text>
      </small>
    </>
  );
};
