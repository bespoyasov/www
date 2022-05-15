import fs from "fs";
import { castTo } from "@utils/castTo";

type SystemType = typeof fs;
type SystemMock = Dict<keyof SystemType, unknown>;
type SystemOverrides = OverridesFor<SystemMock>;

export function mockSystem(overrides: SystemOverrides): SystemType {
  return castTo<SystemType>({ ...overrides });
}
