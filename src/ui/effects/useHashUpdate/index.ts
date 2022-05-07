import { useRouter } from "next/router";
import type { HashUpdater } from "./types";

export function useHashUpdate(): HashUpdater {
  const router = useRouter();
  return (hash) => router.push(`#${hash}`);
}
