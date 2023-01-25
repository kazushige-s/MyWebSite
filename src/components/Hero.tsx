import { Center, Image, Loader } from "@mantine/core";
import React from "react";

export const Hero = () => {
  return (
    <>
      {null ? (
        <Center>
          <Loader />
        </Center>
      ) : (
        <Image
          src="https://source.unsplash.com/random/1480x480/"
          alt="Unsplash image"
        />
      )}
    </>
  );
};
