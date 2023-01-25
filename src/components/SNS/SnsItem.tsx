import { Group } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { BrandGithub, BrandInstagram, BrandTwitter } from "tabler-icons-react";

export const SnsItem = () => {
  return (
    <div className="flex">
      <Group className="ml-3">
        <Link target="_blank" href="https://twitter.com/eigablog_kazu">
          <BrandTwitter />
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/eigasukisuki_kazu/"
        >
          <BrandInstagram />
        </Link>
        <Link target="_blank" href="https://github.com/kazushige-s">
          <BrandGithub />
        </Link>
      </Group>
    </div>
  );
};
