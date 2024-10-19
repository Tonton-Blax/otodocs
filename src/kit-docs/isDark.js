import { readable } from "svelte/store";

// Create a readable store for tracking the "isDark" state
export const isDark = readable(false, (set) => {
  // Initialize the observer
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.attributeName === "class") {
        const isDark = Array.from(mutation.target.classList).includes?.("dark");
        set(isDark); // Update the store with the new value of isDark
      }
    });
  });

  // Start observing the document element for class attribute changes
  observer.observe(document.documentElement, {
    attributes: true,
    childList: false,
    subtree: false,
  });

  // Return a cleanup function to disconnect the observer when no longer needed
  return () => observer.disconnect();
});
