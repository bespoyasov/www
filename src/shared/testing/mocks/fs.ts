import fs from "fs";
import { assureType } from "@utils/assureType";

type SystemType = typeof fs;
type SystemMock = Dict<keyof SystemType, unknown>;
type SystemOverrides = OverridesFor<SystemMock>;

export function mockSystem(overrides: SystemOverrides): SystemType {
  return assureType<SystemType>({ ...overrides });
}
