type FullName = LocalizedString;
type JobTitle = LocalizedString;

type PersonalUrl = AbsoluteUrl;
type ExternalUrl = AbsoluteUrl;
type ContactUrl = ExternalUrl;

export type Author = {
  name: FullName;
  title: JobTitle;

  email: Email;
  site: PersonalUrl;

  employer: ContactUrl;
  telegram: ContactUrl;
  twitter: ContactUrl;
  github: ContactUrl;
  linked: ContactUrl;

  donate: ExternalUrl;
};
