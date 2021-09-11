import { VisuallyHidden } from "@components/VisuallyHidden";
import styles from "./About.module.css";

export const About = () => {
  return (
    <main className={styles.about}>
      <VisuallyHidden as="h2">Обо мне</VisuallyHidden>
      <div>
        <p>Разработчик из Москвы.</p>
        <p>
          Превращаю идеи и макеты в сайты и приложения. Умею доводить проекты до конца и помогаю
          запускать их в срок.
        </p>
        <p>Поддерживаю и развиваю продукты компаний и свои проекты.</p>
      </div>
      <div>
        <p>
          Рассказываю в блоге о процессе и результатах работы. Пишу о дизайне, разработке и книгах.
        </p>
        <p>
          Преподаю вёрстку и программирование. Занимаюсь менторством и помогаю начинающим технологам
          освоить разработку.
        </p>
      </div>
    </main>
  );
};
