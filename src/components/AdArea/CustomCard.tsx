import { Badge, Card, Group, Image, Text } from "@mantine/core";
import React from "react";

export const CustomCard = () => {
  return (
    <div>
      <Card shadow="md" radius="md" withBorder >
        <Card.Section>
          <Image
            height={160}
            src="https://source.unsplash.com/featured/?woman/"
            alt="Norway"
            withPlaceholder
          />
        </Card.Section>
        <Group position="apart" my="md">
          <Text weight={800}>広告エリア</Text>
          <Badge color="pink" radius="lg" variant="filled">
            広告
          </Badge>
        </Group>
        <Group my="md">
          <Text size="sm">お仕事募集</Text>
        </Group>
      </Card>
    </div>
  );
};
