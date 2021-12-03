import { useContext, useState } from "react";

import type { WithChildren } from "@extensions/components";
import { initialLanguage } from "./const";
import { Context } from "./context";

const Provider = Context.Provider;

export const usePreferencesContext = () => useContext(Context);
export const PreferencesProvider = ({ children }: WithChildren) => {
  const [language, setLanguage] = useState(initialLanguage);
  return <Provider value={{ language, update: setLanguage }}>{children}</Provider>;
};
