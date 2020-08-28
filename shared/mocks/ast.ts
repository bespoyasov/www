import { AnyList } from "@shared/types";

type FakeFileContent = string;

export class FileContentProcessorMock {
  constructor(private processResult: FakeFileContent) {}

  public inspect = jest.fn();

  public use = (...args: AnyList): FileContentProcessorMock => {
    this.inspect(...args);
    return this;
  };

  public process = async (...args: AnyList): Promise<FakeFileContent> => {
    this.inspect(...args);
    return this.processResult;
  };
}
