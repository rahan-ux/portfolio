"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Resets scroll to the top on every page navigation.
 *
 * Works for both the Next.js App Router and static-export mode where
 * the browser's own history / hash routing is in play.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  // 1. Disable the browser's automatic scroll restoration so it never
  //    jumps to a previously saved position after a navigation.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // 2. Scroll to top whenever the Next.js pathname changes (client-side nav).
  //    rAF defers until after React has painted the new page content so we
  //    always win the race against the browser's own scroll restoration.
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  // 3. Also catch native browser back/forward (popstate) and hash changes
  //    that may fire outside React's routing in static-export mode.
  useEffect(() => {
    const scrollTop = () =>
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    window.addEventListener("popstate", scrollTop);
    window.addEventListener("hashchange", scrollTop);
    return () => {
      window.removeEventListener("popstate", scrollTop);
      window.removeEventListener("hashchange", scrollTop);
    };
  }, []);

  return null;
}
