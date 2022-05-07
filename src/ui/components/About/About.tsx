import { VisuallyHidden } from "@components/VisuallyHidden";
import styles from "./About.module.css";

export const About = () => {
  return (
    <main className={styles.about}>
      <VisuallyHidden as="h2">Обо мне</VisuallyHidden>
      <div>
        <p>Разработчик из Стокгольма.</p>
        <p>
          Превращаю идеи и макеты в сайты и приложения. Помогаю доводить проекты до конца
          и запускать их в срок.
        </p>
        <p>Поддерживаю и развиваю продукты компаний и собственные проекты.</p>
      </div>
      <div>
        <p>
          Рассказываю в блоге о процессе и результатах работы. Пишу о дизайне, разработке и книгах.
        </p>
        <p>Менторю и помогаю начинающим технологам освоить разработку.</p>
        <p>
          Иногда пишу в <a href="https://twitter.com/bespoyasov">Твиттер</a> и коммичу на 
          <a href="https://github.com/bespoyasov">Гитхаб</a>.
        </p>
      </div>
    </main>
  );
};
