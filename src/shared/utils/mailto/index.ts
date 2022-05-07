type MailtoProtocolUrl = AbsoluteUrl;

export function mailto(email: Email): MailtoProtocolUrl {
  return `mailto:${email}`;
}
