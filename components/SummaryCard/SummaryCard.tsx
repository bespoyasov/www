import { Metadata } from "@domain/metadata";
import { absoluteUrlFor } from "@shared/absoluteUrl";

type SummaryCardProps = {
  metadata: Metadata;
};

export const SummaryCard = ({ metadata }: SummaryCardProps) => {
  const { title, description, slug } = metadata;
  const url = absoluteUrlFor(slug);

  return (
    <>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@bespoyasov" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </>
  );
};
