import React from "react";
import { VisuallyHidden } from "@components/VisuallyHidden";

export const Person: React.FC = () => {
  return (
    <VisuallyHidden itemScope itemType="//schema.org/Person">
      <span itemProp="name">Саша Беспоясов</span>
      <span itemProp="jobTitle">Фронтенд-разработчик</span>
      <span itemProp="email">bespoyasov@me.com</span>
    </VisuallyHidden>
  );
};
