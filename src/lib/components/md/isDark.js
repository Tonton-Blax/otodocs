import { readable } from "svelte/store";

export const isDark = readable(false, (set) => {
  if (typeof document === 'undefined') return;

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.attributeName === "class") {
        const dark = document.documentElement.classList.contains("dark");
        set(dark);
      }
    });
  });

  set(document.documentElement.classList.contains("dark"));

  observer.observe(document.documentElement, {
    attributes: true,
    childList: false,
    subtree: false,
  });

  return () => observer.disconnect();
});
