export enum RouteKind {
  Internal,
  External,
}

export type NavRoute<TKind extends RouteKind> = {
  url: TKind extends RouteKind.External ? AbsoluteUrl : UrlSlug;
  title: string;
};
