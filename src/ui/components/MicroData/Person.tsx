import { VisuallyHidden } from "@components/VisuallyHidden";

export const Person = () => {
  return (
    <VisuallyHidden itemScope itemType="//schema.org/Person">
      <p itemProp="name">Саша Беспоясов</p>
      <p itemProp="jobTitle">Разработчик, ментор, спикер</p>
      <p itemProp="email">bespoyasov@me.com</p>
    </VisuallyHidden>
  );
};
