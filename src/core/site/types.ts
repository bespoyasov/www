export type BaseUrl = AbsoluteUrl;
export type PageUrl = AbsoluteUrl;

export type DomainZone = "me" | "ru";

export type FoundationYear = FullYear;

export type Site = {
  baseUrl: BaseUrl;
  createdAt: FoundationYear;
};
