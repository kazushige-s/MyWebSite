import { Burger } from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";

export const SpHeader = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  return (
      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        title={title}
      />
  );
};
