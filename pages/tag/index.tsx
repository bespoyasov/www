import React from "react";
import Head from "next/head";
import { Description } from "@components/Description";
import { AllTags } from "@components/AllTags";

const Tags: React.FC = () => {
  return (
    <main>
      <Head>
        <title>Все теги</title>
        <Description>Список всех тегов из заметок и проектов</Description>
      </Head>

      <h1 className="frontline">Все теги</h1>
      <AllTags />
    </main>
  );
};

export default Tags;
