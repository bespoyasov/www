import { isProduction, EnvironmentKind, ProcessType } from ".";
import { assureType } from "@shared/assureType";

function createProcessFor(env: EnvironmentKind): ProcessType {
  return assureType<ProcessType>({
    env: { NODE_ENV: env },
  });
}

describe("shared > env > isProduction", () => {
  it("should return true if is in production mode", () => {
    const processMock = createProcessFor("production");
    expect(isProduction(processMock)).toBe(true);
  });

  it("should return true if is in production mode", () => {
    const processMock = createProcessFor("development");
    expect(isProduction(processMock)).toBe(false);
  });
});
