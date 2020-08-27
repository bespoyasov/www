import { assureType } from "@shared/assureType";

type SystemOverrides = Record<keyof SystemType, () => unknown>;

export function mockSystem(overrides: SystemOverrides): SystemType {
  return assureType<SystemType>({ ...overrides });
}
