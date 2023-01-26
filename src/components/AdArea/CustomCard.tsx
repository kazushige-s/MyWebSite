import { Badge, Card, Group, Image, Text } from "@mantine/core";
import React from "react";

export const CustomCard = () => {
  return (
    <div>
      <Card shadow="md" radius="md" withBorder >
        <Card.Section>
          <Image
            height={160}
            src="https://source.unsplash.com/random/"
            alt="Norway"
            withPlaceholder
          />
        </Card.Section>
        <Group position="apart" my="md">
          <Text weight={800}>テスト</Text>
          <Badge color="pink" radius="lg" variant="filled">
            テスト
          </Badge>
        </Group>
        <Group my="md">
          <Text size="sm">テストテストテスト</Text>
        </Group>
      </Card>
    </div>
  );
};
