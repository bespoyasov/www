import { useState } from "react";
import { useMount } from "@effects/useMount";

export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useMount(() => setMounted(true));

  return mounted;
}
