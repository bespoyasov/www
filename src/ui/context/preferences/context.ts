import { createContext } from "react";

import type { PreferredLanguageContext } from "./types";
import { initial } from "./const";

export const Context = createContext<PreferredLanguageContext>(initial);
