type Template = LocalizedString;
type Injected = string;
type Interpolated = LocalizedString;

export function injectIn(translation: Template, ...values: List<Injected>): Interpolated {
  return values.reduce((result, value) => result.replace(/%s/, value), translation);
}
