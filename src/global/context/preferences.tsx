import { createContext, useContext, useState } from "react";

import type { CodeSamplesLanguage, PreferredLanguage } from "@domain/preferences";
import { DEFAULT_PREFERRED } from "@domain/preferences";
import { WithChildren } from "@extensions/components";
import { identity } from "@shared/identity";

type PreferredLanguageContext = {
  language: PreferredLanguage;
  update: (updated: CodeSamplesLanguage) => void;
};

const initial: PreferredLanguageContext = {
  language: DEFAULT_PREFERRED,
  update: identity,
};

const Context = createContext<PreferredLanguageContext>(initial);
const Provider = Context.Provider;

export const usePreferencesContext = () => useContext(Context);
export const PreferencesProvider = ({ children }: WithChildren) => {
  const [language, setLanguage] = useState(DEFAULT_PREFERRED);
  return <Provider value={{ language, update: setLanguage }}>{children}</Provider>;
};
