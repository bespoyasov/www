import type { GetStaticProps, GetStaticPaths } from "next";
import type { TagKind } from "@core/tags";
import { tags } from "@core/tags";

import { projectsMetadata, notesMetadata } from "@network/fetch";
import { assureType } from "@utils/assureType";
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
  const desired = assureType<TagKind>(params.id);
  const byTag = withTag(desired);

  const projects = projectsMetadata().filter(byTag);
  const notes = notesMetadata().filter(byTag);

  return {
    props: {
      projects,
      notes,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(tags).filter(excludeTravel).map(pathFromTag);
  return { paths, fallback: false };
};

export default TagPage;
