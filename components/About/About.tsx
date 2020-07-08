import React from "react";
import { VisuallyHidden } from "@components/VisuallyHidden";
import styles from "./About.module.css";

export const About: React.FC = () => {
  return (
    <article className={styles.about}>
      <VisuallyHidden element="h2">Обо мне</VisuallyHidden>
      <div>
        <p>Фронтенд‑разработчик из Москвы.</p>
        <p>
          Превращаю идеи и макеты в сайты и приложения. Умею доводить проекты до конца и помогаю запускать их в срок.
        </p>
        <p>Поддерживаю и развиваю продукты компаний и свои проекты.</p>
      </div>
      <div>
        <p>Рассказываю в блоге о процессе и результатах работы. Пишу о дизайне, разработке и книгах.</p>
        <p>
          Веду лекции о вёрстке и программировании. Занимаюсь менторством и помогаю начинающим технологам освоить
          разработку.
        </p>
      </div>
    </article>
  );
};
