import React from "react";
import Head from "next/head";
import { About } from "@components/About";
import { Description } from "@components/Description";

const Main = () => (
  <>
    <Head>
      <title>АБ</title>
      <Description>Иногда работаю, иногда не работаю.</Description>
    </Head>
    <About />
  </>
);

export default Main;
