import { useRef } from "react";
import { nextRender } from "@utils/nextRender";

export function useScrollRestore<TControl extends HTMLElement>() {
  const control = useRef<TControl>();

  function restoreScroll() {
    if (!control.current) return;

    const origin = control.current.parentElement;
    const initial = origin.getBoundingClientRect().top;

    nextRender(() => {
      const current = origin.getBoundingClientRect().top;
      const target = window.scrollY + current - initial;
      window.scrollTo(0, target);
    });
  }

  return { control, restoreScroll };
}
