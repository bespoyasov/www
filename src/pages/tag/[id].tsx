import { GetStaticProps, GetStaticPaths } from "next";
import { assureType } from "@utils/assureType";
import { withTag } from "@utils/filter";
import { Tag as TagEnum, TagKind } from "@domain/tags";
import { projectsMetadata, blogPostsMetadata } from "@network/fetch";

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
  const notes = blogPostsMetadata().filter(byTag);

  return {
    props: {
      projects,
      notes,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(TagEnum).filter(excludeTravel).map(pathFromTag);
  return { paths, fallback: false };
};

export default TagPage;
