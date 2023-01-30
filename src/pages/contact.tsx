import { Layout } from "@/src/components/Layout";
import {
  Box,
  Button,
  Center,
  Group,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";

const Contact = () => {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Layout title="contact">
      <Center>
        <h2 className="mb-10 font-bold">お問い合わせ</h2>
      </Center>

      {/* フォームエリア */}
      <Box sx={{ maxWidth: 500 }} mx="auto">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
            {...form.getInputProps("email")}
          />
          <Textarea
            mt="md"
            withAsterisk
            label="Message"
            placeholder="お仕事を依頼したい。"
            {...form.getInputProps("email")}
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
