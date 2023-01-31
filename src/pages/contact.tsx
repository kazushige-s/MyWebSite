import { Layout } from "@/src/components/Layout";
import { Box, Button, Center, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { showNotification, updateNotification } from "@mantine/notifications";
import axios from "axios";
import { TbCheck, TbX } from "react-icons/tb";

const Contact = () => {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value)
          ? null
          : "メールアドレスの形式が正しくありません",
      name: (value) => (value.length > 2 ? null : "名前を入力してください"),
      message: (value) =>
        value.length > 3 ? null : "メッセージを入力してください",
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    try {
      showNotification({
        id: "send-message",
        title: "送信中",
        autoClose: false,
        disallowClose: true,
        loading: true,
        message: "メッセージを送信しています。",
      });
      await axios.post("/api/contact", JSON.stringify(values), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      form.reset();
      updateNotification({
        id: "send-message",
        title: "送信完了",
        autoClose: 5000,
        color: "teal",
        icon: <TbCheck size={16} />,
        message: "メッセージの送信が完了しました！",
      });
    } catch (err) {
      updateNotification({
        id: "send-message",
        title: "送信失敗",
        autoClose: 5000,
        color: "red",
        disallowClose: true,
        icon: <TbX size={16} />,
        loading: false,
        message: "メッセージの送信が失敗しました。",
      });
    }
  };

  return (
    <Layout title="contact">
      <Center>
        <h2 className="mb-10 font-bold">お問い合わせ（工事中）</h2>
      </Center>

      {/* フォームエリア */}
      <Box sx={{ maxWidth: 500 }} mx="auto">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <TextInput
            mt="md"
            withAsterisk
            label="Name"
            placeholder="Yamada Taro"
            {...form.getInputProps("name")}
          />
          <Textarea
            mt="md"
            withAsterisk
            label="Message"
            placeholder="お仕事を依頼したい。"
            {...form.getInputProps("message")}
          />

          <Group position="center" mt="md">
            <Button disabled type="submit" color="dark" radius="xl">
              Send Message
            </Button>
          </Group>
        </form>
      </Box>
    </Layout>
  );
};

export default Contact;
