import type { Metadata } from "@domain/metadata";
import { absoluteUrlFor } from "@shared/absoluteUrl";
import { unwrap } from "./unwrap";

type SummaryCardProps = {
  metadata?: Metadata;
};

export const SummaryCard = ({ metadata }: SummaryCardProps) => {
  const { title, description, cover } = unwrap(metadata);
  const preview = absoluteUrlFor(cover);

  return (
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bespoyasov" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={preview} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={preview} />
    </>
  );
};
