import { EffectCallback, useEffect } from "react";

export function useMount(fn: EffectCallback): void {
  useEffect(fn, []);
}
