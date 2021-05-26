import { Metadata } from "@domain/metadata";
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION, PREVIEW_IMAGE } from "./const";

type SummaryCardProps = {
  metadata?: Metadata;
};

export const SummaryCard = ({ metadata }: SummaryCardProps) => {
  const { title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION } = metadata ?? {};

  return (
    <>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@bespoyasov" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={PREVIEW_IMAGE} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={PREVIEW_IMAGE} />
    </>
  );
};
