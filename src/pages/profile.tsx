import { CareerData } from "@/src/components/Career/CareerData";
import { Layout } from "@/src/components/Layout";
import { Center, Group, Image, Table, Text } from "@mantine/core";
import React from "react";

const profile = () => {
  const Career = CareerData.map((item) => (
    <tr key={item.time}>
      <td>{item.time}</td>
      <td>{item.company}</td>
      <td>{item.summary}</td>
    </tr>
  ));

  return (
    <Layout title="Profile">
      <Center>
        <h2 className="mb-10 font-bold">プロフィール</h2>
      </Center>
      <div className="flex gap-10">
        <Image
          src="https://source.unsplash.com/featured/?kitten/"
          alt="profile image"
          radius={90}
          height={180}
          width={180}
        />
        <Group>
          <Text sx={{ fontFamily: "Noto Sans CJK JP" }}>
            自己紹介、自己紹介、自己紹介、自己紹介、自己紹介、自己紹介、自己紹介、自己紹介、自己紹介、自己紹介、自己紹介、自己紹介、自己紹介、自己紹介
          </Text>
          <Text sx={{ fontFamily: "Noto Sans CJK JP" }}>名前</Text>
        </Group>
      </div>
      <Center>
        <h3 className="mt-10 font-bold">経歴</h3>
      </Center>
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Company</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{Career}</tbody>
      </Table>
    </Layout>
  );
};

export default profile;
