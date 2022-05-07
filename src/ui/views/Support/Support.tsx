import Head from "next/head";

import { SupportOptions } from "@components/SupportOptions";
import { Description } from "@components/Description";
import { SummaryCard } from "@components/SummaryCard";

import styles from "./Support.module.css";

export const SupportMe = () => {
  return (
    <main className={styles.support}>
      <Head>
        <title>Сказать спасибо ❤️</title>
        <Description>Как поддержать меня и мой блог.</Description>
        <SummaryCard />
      </Head>

      <h1>Сказать спасибо</h1>
      <p>Блог — это моё хобби.</p>
      <p>
        Я нахожу в ежедневной работе то, что может пригодиться другим разработчикам. Опыт, грабли
        и шишки я превращаю в статьи и иногда в онлайн-книги.
      </p>
      <p>
        Мне нравится думать, что мой труд полезен читателям. Это мотивирует искать интересное
        в рабочей рутине, находить и конспектировать хорошие книги о разработке, рассказывать
        о неудачах и как их можно избегать.
      </p>
      <p>
        Если вам нравится мой блог, и вы хотите поддержать выход новых статей и проектов, дайте
        знать — я буду благодарен.
      </p>

      <SupportOptions />
    </main>
  );
};
