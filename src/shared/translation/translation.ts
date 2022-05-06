import { currentLocale } from "@env/locale";
import translationSource from "./dictionary.json";

const dictionary = translationSource as Dictionary;
export const translated = dictionary[currentLocale];
