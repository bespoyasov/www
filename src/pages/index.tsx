import Head from "next/head";
import { About } from "@components/About";
import { Description } from "@components/Description";
import { SummaryCard } from "@components/SummaryCard";

const Main = () => (
  <>
    <Head>
      <title>Саша Беспоясов — разработчик, ментор, спикер</title>
      <Description>
        Превращаю идеи и макеты в сайты и приложения. Рассказываю в блоге о процессе и результатах
        работы. Пишу о дизайне, разработке и книгах. Занимаюсь менторством и помогаю начинающим
        технологам освоить разработку.
      </Description>
      <SummaryCard />
    </Head>
    <About />
  </>
);

export default Main;
