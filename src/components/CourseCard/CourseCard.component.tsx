import React from "react";
import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
};

const CourseCard = ({ title, description }: Props) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="aspect-[3/4] h-[400px]"
      isPressable={true}
    >
      <Image
        alt="Woman listing to music"
        className="object-cover w-full h-2/3"
        width={375}
        height={100}
        src={"https://nextui.org/images/hero-card.jpeg"}
      />
      <CardFooter className="flex flex-col items-start p-[20px] h-full justify-around">
        <h3 className="text-xl mb-3">{title}</h3>
        <p className="text-sm text-left">{description} </p>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
