import { useEffect, useState } from "react";

export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    !mounted && setMounted(true);
  }, [mounted]);

  return mounted;
}
