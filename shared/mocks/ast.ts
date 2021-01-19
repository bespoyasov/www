type FakeFileContent = string;

export class FileContentProcessorMock {
  constructor(private processResult: FakeFileContent) {}

  public inspect = jest.fn();

  public use = (...args: AnyList): FileContentProcessorMock => {
    this.inspect(...args);
    return this;
  };

  public process = async (): Promise<FakeFileContent> => {
    return this.processResult;
  };
}
