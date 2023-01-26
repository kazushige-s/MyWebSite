import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import React from "react";

export const Hero = () => {
  return (
    <>
      <Carousel slideSize="70%" slideGap="md" loop>
        <Carousel.Slide>
          <Image
            src="https://source.unsplash.com/featured/?fashion"
            alt="Unsplash image"
            width={1480}
            height={480}
            fit="cover"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src="https://source.unsplash.com/featured/?coffe"
            alt="Unsplash image"
            width={1480}
            height={480}
            fit="cover"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src="https://source.unsplash.com/featured/?dog"
            alt="Unsplash image"
            width={1480}
            height={480}
            fit="cover"
          />
        </Carousel.Slide>
      </Carousel>
    </>
  );
};
