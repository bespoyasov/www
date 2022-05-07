import type { Contact } from "./types";

import { author } from "@core/author";
import { mailto } from "@utils/mailto";
import { translated } from "@translation";

export const contacts: List<Contact> = [
  {
    url: mailto(author.email),
    text: translated.contacts.email,
  },
  {
    url: author.telegram,
    text: translated.contacts.telegram,
  },
  {
    url: author.twitter,
    text: translated.contacts.twitter,
  },
  {
    url: author.github,
    text: translated.contacts.github,
  },
  {
    url: author.linked,
    text: translated.contacts.linked,
  },
  {
    url: author.employer,
    text: translated.contacts.employer,
  },
];
