import { VisuallyHidden } from "@components/VisuallyHidden";

export const Person = () => {
  return (
    <VisuallyHidden itemScope itemType="//schema.org/Person">
      <span itemProp="name">Саша Беспоясов</span>
      <span itemProp="jobTitle">Разработчик, ментор, спикер</span>
      <span itemProp="email">bespoyasov@me.com</span>
    </VisuallyHidden>
  );
};
