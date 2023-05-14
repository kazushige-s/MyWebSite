import { CareerData, SkillData } from "@/src/components/Career/CareerData";
import { Layout } from "@/src/components/Layout";
import { Center, Grid, Group, Image, Table, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

const Profile = () => {
  const media = useMediaQuery("(min-width: 768px)");

  const Career = CareerData.map((item, i) => (
    <tr key={i}>
      <td>{item.time}</td>
      <td>{item.company}</td>
      <td>{item.summary}</td>
    </tr>
  ));

  return (
    <Layout title="Profile">
      <Center>
        <h2 className="mb-5 font-bold">プロフィール</h2>
      </Center>

      {/* プロフィールエリア */}
      <div className={media ? "flex items-center" : "flex-col content-center"}>
        <Image
          src="https://source.unsplash.com/featured/?cat/"
          alt="profile image"
          radius={90}
          height={180}
          width={180}
          withPlaceholder
          className="m-auto"
        />

        <Group className="p-5">
          <Text>
            映画好き。本好き。近ごろはプログラミングにフルコミット。
            映画好きが高じて、WordPressにて映画ブログを開始→「HTML、CSSをいじりたい!」→
            ドットインストールにてプログラミングの勉強開始→現在はKindle UnlimitedやUdemyの講座でReact、TypeScriptを勉強中。
            基本情報技術者試験の勉強もがんばっています。
          </Text>
          <Text fw={700}>かず</Text>
        </Group>
      </div>

      {/* スキルエリア */}
      <Center>
        <h3 className="my-10 font-bold">スキル</h3>
      </Center>

      <Grid>
        {SkillData.map((skill, i) => {
          return (
            <Grid.Col key={i} span={4} xs={3} sm={2}>
              <div className="text-center">
                <skill.icon size={50} />
                <p className="m-0">{skill.name}</p>
              </div>
            </Grid.Col>
          );
        })}
      </Grid>

      {/* 経歴エリア */}
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

export default Profile;
