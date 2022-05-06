import type { EnvironmentKind, ProcessType } from "./types";

type Discriminator = (proc?: ProcessType) => boolean;

function is(required: EnvironmentKind): Discriminator {
  return function determine({ env } = process) {
    return env.NODE_ENV === required;
  };
}

export const isProduction = is("production");
