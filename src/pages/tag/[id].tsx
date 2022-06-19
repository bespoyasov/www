import type { GetStaticProps, GetStaticPaths } from "next";
import type { TagKind } from "@core/tags";
import { tags } from "@core/tags";

import { projectsMetadata, notesMetadata, talksMetadata } from "@_network/metadata";
import { castTo } from "@utils/castTo";
import { withTag } from "@utils/filter";

import type { TagProps } from "@views/Tag";
import { Tag as TagPage } from "@views/Tag";

function excludeTravel(tag: TagKind): boolean {
  return tag !== "travel";
}

function pathFromTag(tag: TagKind): UrlSlug {
  return `/tag/${tag}`;
}

export const getStaticProps: GetStaticProps<TagProps> = ({ params }) => {
  const desired = castTo<TagKind>(params.id);
  const byTag = withTag(desired);

  const projects = projectsMetadata().filter(byTag);
  const notes = notesMetadata().filter(byTag);
  const talks = talksMetadata().filter(byTag);

  return {
    props: {
      projects,
      notes,
      talks,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(tags).filter(excludeTravel).map(pathFromTag);
  return { paths, fallback: false };
};

export default TagPage;
