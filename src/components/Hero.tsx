import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import React from "react";

export const Hero = () => {
  return (
    <>
      <Carousel slideSize="70%" slideGap="md" loop>
        <Carousel.Slide>
          <Image
            src="https://source.unsplash.com/random/1480x480/"
            alt="Unsplash image"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src="https://source.unsplash.com/random/1480x480/"
            alt="Unsplash image"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src="https://source.unsplash.com/random/1480x480/"
            alt="Unsplash image"
          />
        </Carousel.Slide>
      </Carousel>
    </>
  );
};
