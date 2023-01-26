import { ActionIcon, Group } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { BrandGithub, BrandInstagram, BrandTwitter } from "tabler-icons-react";

export const SnsItem = () => {
  return (
    <div className="flex">
      <Group className="ml-3">
        <Link target="_blank" href="https://twitter.com/eigablog_kazu">
          <ActionIcon color="dark" size="lg">
            <BrandTwitter />
          </ActionIcon>
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/eigasukisuki_kazu/"
        >
          <ActionIcon color="dark" size="lg">
            <BrandInstagram />
          </ActionIcon>
        </Link>
        <Link target="_blank" href="https://github.com/kazushige-s">
          <ActionIcon color="dark" size="lg">
            <BrandGithub />
          </ActionIcon>
        </Link>
      </Group>
    </div>
  );
};
