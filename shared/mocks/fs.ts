import { SystemType } from "@persistence/types";
import { assureType } from "@shared/assureType";

type SystemOverrides = Partial<Record<keyof SystemType, () => unknown>>;

export function mockSystem(overrides: SystemOverrides): SystemType {
  return assureType<SystemType>({ ...overrides });
}
